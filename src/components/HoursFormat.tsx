import {
  useEffect,
  useState,
  useRef,
  MouseEvent,
  TouchEvent,
  WheelEvent,
} from "react";

function HourFormat({
  height,
  setHourFormat,
  hourFormat,
  isDarkMode
}: {
  height: number;
  isDarkMode?: boolean ;
  value: string | null | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  onAmPmChange: (value: string) => void;
  setHourFormat: React.Dispatch<
    React.SetStateAction<{
      mount: boolean;
      hourFormat: string;
    }>
  >;
  hourFormat: {
    mount: boolean;
    hourFormat: string;
  };
}) {
  const Hours = [
    {
      number: "AM",
      translatedValue: (height * 2).toString(),
      selected: false,
    },
    {
      number: "PM",
      translatedValue: height.toString(),
      selected: false,
    },
  ];

  const [hours, setHours] = useState([
    {
      number: "AM",
      translatedValue: (height * 2).toString(),
      selected: hourFormat.hourFormat === "AM",
    },
    {
      number: "PM",
      translatedValue: height.toString(),
      selected: hourFormat.hourFormat === "PM",
    },
  ]);
  const mainListRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const [firstCursorPosition, setFirstCursorPosition] = useState<number>(0);
  const [currentTranslatedValue, setCurrentTranslatedValue] = useState(
    parseInt(hours.filter((item) => item.selected === true)[0]?.translatedValue)
  );
  const [startCapture, setStartCapture] = useState(false);
  const [showFinalTranslate, setShowFinalTranslate] = useState(false);
  // start and end times
  const [dragStartTime, setDragStartTime] = useState<number>(0);
  const [dragEndTime, setDragEndTime] = useState<number>(0);
  // drag duration
  const [, setDragDuration] = useState<number | null>(null);
  // drag type fast or slow
  const [, setDragType] = useState<string>("");
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
    setCurrentTranslatedValue((prev) => prev + cursorPosition!);
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
    setCurrentTranslatedValue((prev) => prev + cursorPosition);
    setShowFinalTranslate(true);
    setDragEndTime(performance.now());

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
        currentTranslatedValue + cursorPosition
      }px)`;
    }
  }, [cursorPosition, currentTranslatedValue, startCapture]);

  // final translation here
  useEffect(() => {
    if (showFinalTranslate) {
      setDragDuration(dragEndTime - dragStartTime);

      let finalValue = Math.round(currentTranslatedValue / height) * height;
      if (finalValue < height) finalValue = height;
      if (finalValue > height * 2) finalValue = height * 2;
      mainListRef.current!.style.transform = `translateY(${finalValue}px)`;
      setCurrentTranslatedValue(finalValue);
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
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    const propertyName = e.propertyName;
    if (propertyName === "transform") {
      const selectedValueArray = [
        {
          number: "AM",
          translatedValue: (height * 2).toString(),
          arrayNumber: 0,
        },
        {
          number: "PM",
          translatedValue: height.toString(),
          arrayNumber: 1,
        },
      ];
      selectedValueArray.map((item) => {
        if (parseInt(item.translatedValue) === currentTranslatedValue) {
          setSelectedNumber(item.arrayNumber);
          setHourFormat({ mount: true, hourFormat: item.number });
          setHours(() => {
            const newValue = Hours.map((hour) => {
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
    }
  };

  // handle click to select number
  const handleClickToSelect = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (cursorPosition === 0) {
      setCurrentTranslatedValue(parseInt(target.dataset.translatedValue!));
    }
  };

  /** ***************************   handle wheel scroll ************************* */

  const handleWheelScroll = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      if (currentTranslatedValue <= height) {
        setCurrentTranslatedValue((prev) => prev + height);
      }
    } else if (currentTranslatedValue >= height * 2) {
      setCurrentTranslatedValue((prev) => prev - height);
    }
  };

  return (
    <div
      className="react-ios-time-picker-hour-format"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ height: height * 5 }}
      onWheel={handleWheelScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* <PickerEffects height={height} /> */}
      <div
        ref={mainListRef}
        className={`${
          showFinalTranslate && "react-ios-time-picker-hour-format-transition"
        }`}
        onTransitionEnd={handleTransitionEnd}
        style={{ transform: `translateY(${currentTranslatedValue}px)` }}
      >
        {hours.map((hourObj, index) => (
          <div
            key={index}
            className="react-ios-time-picker-cell-hour"
            style={{ height: `${height}px` }}
          >
            <div
            style={hourObj.selected ? {color:  isDarkMode ? "#f7f7f7" : "#000"}:{}}
              className={`react-ios-time-picker-cell-inner-hour-format${
                hourObj.selected
                  ? " react-ios-time-picker-cell-inner-hour-format-selected"
                  : ""
              }`}
              onClick={handleClickToSelect}
              data-translated-value={hourObj.translatedValue}
            >
              {hourObj.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourFormat;
