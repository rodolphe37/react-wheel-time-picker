import { useEffect, useState } from "react";
import HourWheel from "./HourWheel";
import MinuteWheel from "./MinuteWheel";
import HourFormat from "./HoursFormat";

function TimePickerSelection({
  pickerDefaultValue,
  initialValue,
  onChange,
  height,
  onSave,
  onCancel,
  cancelButtonText,
  saveButtonText,
  controllers,
  setInputValue,
  setIsOpen,
  seperator,
  use12Hours,
  onAmPmChange,
  isDarkMode,
}: {
  pickerDefaultValue?: string;
  initialValue: string | null;
  onChange: (timeValue: string) => void;
  height: number;
  onSave: (finalSelectedValue: string) => void;
  onCancel: () => void;
  cancelButtonText?: string;
  saveButtonText?: string;
  controllers?: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<string | null>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  seperator?: boolean;
  use12Hours?: boolean;
  onAmPmChange: (value: string) => void;
  isDarkMode?: boolean;
}) {
  const initialTimeValue = use12Hours
    ? initialValue?.slice(0, 5)
    : initialValue;
  const [value, setValue] = useState(
    initialValue === null ? pickerDefaultValue : initialTimeValue
  );
  const [hourFormat, setHourFormat] = useState<{
    mount: boolean;
    hourFormat: string;
  }>({
    mount: false,
    hourFormat: initialValue! && initialValue?.slice(6, 8),
  });

  useEffect(() => {
    if (controllers === false) {
      const finalSelectedValue = use12Hours
        ? `${value} ${hourFormat.hourFormat}`
        : value;
      setInputValue(finalSelectedValue!);
      onChange(finalSelectedValue!);
    }
  }, [
    value,
    controllers,
    hourFormat.hourFormat,
    onChange,
    setInputValue,
    use12Hours,
  ]);

  useEffect(() => {
    if (hourFormat.mount) {
      onAmPmChange(hourFormat.hourFormat);
    }
  }, [hourFormat, onAmPmChange]);

  console.log("hourFormat.hourFormat", hourFormat);

  const params = {
    height,
    value,
    setValue,
    controllers,
    use12Hours,
    onAmPmChange,
    setHourFormat,
    hourFormat,
    isDarkMode,
  };

  const handleSave = () => {
    const finalSelectedValue = use12Hours
      ? `${value} ${hourFormat.hourFormat}`
      : value;
    if (finalSelectedValue) {
      setInputValue(finalSelectedValue);
      onChange(finalSelectedValue);
      onSave(finalSelectedValue);
    }
    setIsOpen(false);
  };
  const handleCancel = () => {
    onCancel();
    setIsOpen(false);
  };

  return (
    <div className="react-wheel-time-picker  react-wheel-time-picker-transition">
      {controllers && (
        <div
          className="react-wheel-time-picker-btn-container"
          style={
            isDarkMode ? { background: "#000" } : { backgroundColor: "#d6d6d6" }
          }
        >
          <button
            style={{
              backgroundColor: isDarkMode ? "#000" : "#d6d6d6",
              color: isDarkMode ? "#fe9f06" : "#262626",
            }}
            className="react-wheel-time-picker-btn react-wheel-time-picker-btn-cancel"
            onClick={handleCancel}
          >
            {cancelButtonText}
          </button>
          <button
            style={{
              background: isDarkMode ? "#000" : "#d6d6d6",
              color: isDarkMode ? "#fe9f06" : "#262626",
            }}
            className="react-wheel-time-picker-btn"
            onClick={handleSave}
          >
            {saveButtonText}
          </button>
        </div>
      )}
      <div
        className="react-wheel-time-picker-container"
        style={{
          height: `${height * 5 + 70}px`,
          backgroundColor: isDarkMode ? "#1d1d1d" : "#f6f6f6f6",
        }}
      >
        <div
          className="react-wheel-time-picker-selected-overlay"
          style={{
            top: `${height * 2 + 20}px`,
            height: `${height}px`,
            backgroundColor: isDarkMode ? "#2c2c2f" : "#d3d3d3d3",
          }}
        />
        <HourWheel {...params} />
        {seperator && (
          <div
            className="react-wheel-time-picker-colon"
            style={{ color: isDarkMode ? "#f7f7f7" : "#000" }}
          >
            :
          </div>
        )}
        <MinuteWheel {...params} />
        {use12Hours && <HourFormat {...params} />}
      </div>
    </div>
  );
}

export default TimePickerSelection;
