const TimePickerWrapper = ({
  isOpen,
  isDarkMode,
  children,
}: {
  children: JSX.Element;
  isOpen: boolean;
  isDarkMode: boolean
}) => {
  return (
    <div
      style={
        isOpen
          ? {
              width: "100%",
              height: "100%",
              backgroundColor: isDarkMode ? "rgba(58,54,56,0.83)" : "rgba(0,0,0,0.83)",
              position: "absolute",
              top: 0,
              left:0
            }
          : {}
      }
    >
      {children}
    </div>
  );
};

export default TimePickerWrapper;
