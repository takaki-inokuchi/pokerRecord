import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { InputData } from "./components/InputData";

function App() {
  const [takakirecord, setTakakiRecord] = useState(0);
  const [takashirecord, setTakashiRecord] = useState(0);
  const [coperecord, setCopeRecord] = useState(0);
  const [records, setRecords] = useState([]);

  const onChangeTakakiresult = (e) => {
    const value = e.target.value;
    setTakakiRecord(parseInt(value, 10) || 0);
  };

  const onChangeTakashiresult = (e) => {
    const value = e.target.value;
    setTakashiRecord(parseInt(value, 10) || 0);
  };

  const onChangecoperesult = (e) => {
    const value = e.target.value;
    setCopeRecord(parseInt(value, 10) || 0);
  };

  const registerbuttn = () => {
    const newRecord =////////
  }
  return (
    <div>
      <InputData
        takakirecord={takakirecord}
        takashirecord={takashirecord}
        coperecord={coperecord}
        onChangeTakakiresult={onChangeTakakiresult}
        onChangeTakashiresult={onChangeTakashiresult}
        onChangecoperesult={onChangecoperesult}
        registerbuttn={registerbuttn}
      />
    </div>
  );
}

export default App;
