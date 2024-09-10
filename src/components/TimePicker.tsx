import { useState } from "react";

import "../styles/react-ios-time-picker.css";
import TimePickerSelection from "./TimePickerSelection";
import TimePickerWrapper from "./TimePickerWrapper";

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
}: {
  value: string | null;
  cellHeight?: number;
  placeHolder?: string;
  pickerDefaultValue?: string;
  onChange: (timeValue: string) => void;
  onFocus?: () => void;
  onSave?: (finalSelectedValue: string | undefined) => void;
  onCancel?: () => void;
  disabled?: boolean;
  isOpen?: boolean;
  required?: boolean;
  cancelButtonText?: string;
  saveButtonText?: string;
  controllers?: boolean;
  seperator?: boolean;
  id?: string | null;
  use12Hours?: boolean;
  onAmPmChange?: (value: string) => void;
  name?: string | null;
  onOpen?: () => void;
  popupClassName?: string | null;
  inputClassName?: string | null;
  isDarkMode?: boolean;
  label?: string;
}) {
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
        className="react-ios-time-picker-main"
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
          className={`react-ios-time-picker-input ${inputClassName || ""}`}
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
            <div className="react-ios-time-picker-popup">
              <div
                className={`react-ios-time-picker-popup-overlay ${
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
