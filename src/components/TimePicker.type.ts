export interface TimePickerProps {
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
  }