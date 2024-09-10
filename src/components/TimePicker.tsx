import { useState } from "react";

import "../styles/react-wheel-time-picker.css";
import TimePickerSelection from "./TimePickerSelection";
import TimePickerWrapper from "./TimePickerWrapper";
import { TimePickerProps } from "./TimePicker.type";

function TimePicker({
  value: initialValue = "",
  cellHeight = 28,
  placeHolder = "Select Time",
  pickerDefaultValue = "",
  onChange = () => {},
  onFocus = () => {},
  onSave = () => {},
  onCancel = () => {},
  disabled = false,
  isOpen: initialIsOpenValue = false,
  required = false,
  cancelButtonText = "Cancel",
  saveButtonText = "Save",
  controllers = true,
  seperator = true,
  id = null,
  use12Hours = false,
  onAmPmChange = () => {},
  name = null,
  onOpen = () => {},
  popupClassName = null,
  inputClassName = null,
  isDarkMode,
  label,
}: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(initialIsOpenValue);
  const [height] = useState(cellHeight);
  const [inputValue, setInputValue] = useState(initialValue);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleFocus = () => {
    onFocus();
    onOpen();
  };

  let finalValue = inputValue;

  if (initialValue === null && use12Hours) {
    finalValue = `${pickerDefaultValue} AM`;
  } else if (initialValue === null && !use12Hours) {
    finalValue = pickerDefaultValue;
  }

  const params = {
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
    initialValue: finalValue,
    pickerDefaultValue,
    isDarkMode,
  };

  return (
    <>
      <div
        className="react-wheel-time-picker-main"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onClick={handleClick}
      >
        <label className="label">{label}</label>
        <input
          id={id!}
          name={name!}
          className={`react-wheel-time-picker-input ${inputClassName || ""}`}
          value={inputValue === null ? "" : inputValue}
          type="text"
          style={{
            width: "80%",
            color: isDarkMode ? "#fff" : "#000",
            border: isDarkMode ? "1px solid #fff" : "1px solid #0005",
          }}
          placeholder={placeHolder}
          readOnly
          disabled={disabled}
          required={required}
          onFocus={handleFocus}
        />
      </div>
      {isOpen && !disabled && (
        <TimePickerWrapper isOpen={isOpen} isDarkMode={isDarkMode!}>
          <div>
            <div className="react-wheel-time-picker-popup">
              <div
                className={`react-wheel-time-picker-popup-overlay ${
                  popupClassName || ""
                }`}
                onClick={() => setIsOpen(!isOpen)}
              />
              <TimePickerSelection {...params} />
            </div>
          </div>
        </TimePickerWrapper>
      )}
    </>
  );
}

export default TimePicker;
