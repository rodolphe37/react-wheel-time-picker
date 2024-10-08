function PickerEffects({ height }:{height:number}) {
  return (
    <>
      <div
        className="react-wheel-time-picker-top-shadow"
        style={{ height: `${height * 2}px` }}
      />
      <div
        className="react-wheel-time-picker-bottom-shadow"
        style={{ height: `${height * 2}px` }}
      />
    </>
  );
}

export default PickerEffects;
