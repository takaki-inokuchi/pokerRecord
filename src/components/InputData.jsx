export const InputData = (props) => {
  const {
    takakirecord,
    takashirecord,
    coperecord,
    onChangeTakakiresult,
    onChangeTakashiresult,
    onChangecoperesult,
    registerbutton,
  } = props;
  return (
    <div>
      <p>
        たかき
        <input
          placeholder="金額"
          value={takakirecord}
          onChange={onChangeTakakiresult}
        />
      </p>
      <p>
        たかし
        <input
          placeholder="金額"
          value={takashirecord}
          onChange={onChangeTakashiresult}
        />
      </p>
      <p>
        こーぺ
        <input
          placeholder="金額"
          value={coperecord}
          onChange={onChangecoperesult}
        />
      </p>
      <button onClick={registerbutton}>登録</button>
    </div>
  );
};
