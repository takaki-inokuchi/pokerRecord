import { useContext } from "react";
import { UserContext } from "../providers/provider";
import { ButtonDesign } from "../Button/ButtonDesign";

export const InputData = (props) => {
  const { setTakakiRecord, setTakashiRecord, setCopeRecord } =
    useContext(UserContext);
  const onChangeTakakiresult = (e) => {
    const value = e.target.value;
    if (value === "" || value === "-" || /^-?\d+$/.test(value)) {
      setTakakiRecord(value);
    }
  };

  const onChangeTakashiresult = (e) => {
    const value = e.target.value;
    if (value === "" || value === "-" || /^-?\d+$/.test(value)) {
      setTakashiRecord(value);
    }
  };

  const onChangecoperesult = (e) => {
    const value = e.target.value;
    if (value === "" || value === "-" || /^-?\d+$/.test(value)) {
      setCopeRecord(value);
    }
  };

  const { takakirecord, takashirecord, coperecord, error } =
    useContext(UserContext);

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
      <div>{error}</div>

      <ButtonDesign />
    </div>
  );
};
