import {
  useEffect,
  useState,
  useRef,
  MouseEvent,
  TouchEvent,
  WheelEvent,
} from "react";
import { initialNumbersValue, returnSelectedValue } from "../helpers";

function MinuteWheel({
  height,
  value,
  setValue,
  isDarkMode,
}: {
  height: number;
  value: string | null | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  isDarkMode?: boolean;
}) {
  const [hours, setHours] = useState(
    initialNumbersValue(height, 60, parseInt(value!.slice(3, 6)))
  );
  const mainListRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const [firstCursorPosition, setFirstCursorPosition] = useState<number>(0);
  const [currentTranslatedValue, setCurrentTranslatedValue] = useState<
    number | string
  >(
    value! &&
      parseInt(
        initialNumbersValue(height, 60, parseInt(value.slice(3, 6))).filter(
          (item) =>
            item.number === value.toString().slice(3, 6) &&
            item.selected === true
        )[0].translatedValue
      )
  );
  const [startCapture, setStartCapture] = useState(false);
  const [showFinalTranslate, setShowFinalTranslate] = useState(false);
  // start and end times
  const [dragStartTime, setDragStartTime] = useState<number>(0);
  const [dragEndTime, setDragEndTime] = useState<number>(0);
  // drag duration
  const [, setDragDuration] = useState<number | null>(null);
  // drag type fast or slow
  const [dragType, setDragType] = useState<string>("");
  // drag direction
  const [dragDirection, setDragDirection] = useState<string | null>(null);
  // selected number
  const [, setSelectedNumber] = useState<number | undefined>(undefined);

  const handleMouseDown = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    setShowFinalTranslate(false);
    setFirstCursorPosition(e.clientY);
    setStartCapture(true);
    setDragStartTime(performance.now());
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setShowFinalTranslate(false);
    setFirstCursorPosition(e.targetTouches[0].clientY);
    setStartCapture(true);
    setDragStartTime(performance.now());
  };

  const handleMouseUp = () => {
    setStartCapture(false);
    setCurrentTranslatedValue((prev) => +prev + cursorPosition);
    setShowFinalTranslate(true);
    setDragEndTime(performance.now());
    if (performance.now() - dragStartTime <= 100) {
      setDragType("fast");
    } else {
      setDragType("slow");
    }

    if (cursorPosition < 0) {
      setDragDirection("down");
    } else {
      setDragDirection("up");
    }
  };

  const handleMouseLeave = () => {
    setStartCapture(false);
    setCurrentTranslatedValue((prev) => +prev + cursorPosition);
    setShowFinalTranslate(true);
    setDragEndTime(performance.now());
    if (performance.now() - dragStartTime <= 100) {
      setDragType("fast");
    } else {
      setDragType("slow");
    }

    if (cursorPosition < 0) {
      setDragDirection("down");
    } else {
      setDragDirection("up");
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (startCapture) {
      setCursorPosition(e.clientY - firstCursorPosition);
    } else {
      setCursorPosition(0);
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (startCapture) {
      setCursorPosition(e.targetTouches[0].clientY - firstCursorPosition);
    } else {
      setCursorPosition(0);
    }
  };

  // preview translation
  useEffect(() => {
    if (startCapture) {
      mainListRef.current!.style.transform = `translateY(${
        +currentTranslatedValue + cursorPosition!
      }px)`;
    }
  }, [cursorPosition, currentTranslatedValue, startCapture]);

  // final translation here
  useEffect(() => {
    if (showFinalTranslate) {
      setDragDuration(dragEndTime - dragStartTime);
      if (dragEndTime - dragStartTime <= 100 && cursorPosition !== 0) {
        let currentValue;
        if (dragDirection === "down") {
          currentValue =
            +currentTranslatedValue -
            (120 / (dragEndTime - dragStartTime)) * 100;
        } else if (dragDirection === "up") {
          currentValue =
            +currentTranslatedValue +
            (120 / (dragEndTime - dragStartTime)) * 100;
        }
        let finalValue = Math.round(currentValue! / height) * height;
        if (finalValue < height * -177) finalValue = height * -177;
        if (finalValue > height * 2) finalValue = height * 2;

        mainListRef.current!.style.transform = `translateY(${finalValue}px)`;
        setCurrentTranslatedValue(finalValue);
      }
      if (dragEndTime - dragStartTime > 100 && cursorPosition !== 0) {
        let finalValue = Math.round(+currentTranslatedValue / height) * height;
        if (finalValue < height * -177) finalValue = height * -177;
        if (finalValue > height * 2) finalValue = height * 2;
        mainListRef.current!.style.transform = `translateY(${finalValue}px)`;
        setCurrentTranslatedValue(finalValue);
      }
      setCursorPosition(0);
    }
  }, [
    showFinalTranslate,
    currentTranslatedValue,
    cursorPosition,
    dragDirection,
    dragEndTime,
    height,
    dragStartTime,
  ]);

  // return to default position after drag end (handleTransitionEnd)
  const handleTransitionEnd = () => {
    returnSelectedValue(height, 60).map((item) => {
      if (parseInt(item.translatedValue) === currentTranslatedValue) {
        setSelectedNumber(item.arrayNumber);
        setValue((prev) => `${prev?.slice(0, 2)}:${item.number}`);
        setHours(() => {
          const newValue = initialNumbersValue(height, 60).map((hour) => {
            if (
              hour.number == item.number &&
              +hour.translatedValue == currentTranslatedValue
            ) {
              return {
                ...hour,
                selected: true,
              };
            }
            return hour;
          });
          return newValue;
        });
      }
    });
  };

  // handle click to select number
  const handleClickToSelect = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (cursorPosition === 0) {
      setCurrentTranslatedValue(parseInt(target.dataset.translatedValue!));
    }
  };

  const isFastCondition = showFinalTranslate && dragType === "fast";
  const isSlowCondition = showFinalTranslate && dragType === "slow";

  /* ***************************   handle wheel scroll ************************* */

  const handleWheelScroll = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      if (+currentTranslatedValue < height * 2) {
        setCurrentTranslatedValue((prev) => +prev + height);
      }
    } else if (+currentTranslatedValue > height * -177) {
      setCurrentTranslatedValue((prev) => +prev - height);
    }
  };

  return (
    <div
      className="react-ios-time-picker-minute"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ height: height * 5.7 }}
      onWheel={handleWheelScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* <PickerEffects height={height} /> */}
      <div
        ref={mainListRef}
        className={`${
          isFastCondition === true && "react-ios-time-picker-fast"
        } ${isSlowCondition === true && "react-ios-time-picker-slow"}`}
        onTransitionEnd={handleTransitionEnd}
        style={{ transform: `translateY(${currentTranslatedValue}px)` }}
      >
        {hours.map(
          (
            hourObj: {
              number: string;
              translatedValue: string;
              selected?: boolean | undefined;
              arrayNumber?: number | undefined;
            },
            index: number
          ) => (
            <div
              key={index}
              className="react-ios-time-picker-cell-minute"
              style={{ height: `${height}px` }}
            >
              <div
                style={{
                  color: isDarkMode
                    ? "#f7f7f7"
                    : hourObj.selected
                    ? "#000"
                    : "#6a6a6b",
                  fontSize: hourObj.selected ? 18 : 14,
                }}
                className={`react-ios-time-picker-cell-inner-minute${
                  hourObj.selected
                    ? " react-ios-time-picker-cell-inner-selected"
                    : ""
                }`}
                onClick={handleClickToSelect}
                data-translated-value={hourObj.translatedValue}
              >
                {hourObj.number}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default MinuteWheel;
