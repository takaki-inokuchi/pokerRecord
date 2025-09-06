import { useContext } from "react";
import { UserContext } from "../providers/provider";
import { RegisterButton } from "../Button/RegiterButton";

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

  const { takakirecord, takashirecord, coperecord } = useContext(UserContext);

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
      <RegisterButton />
    </div>
  );
};
