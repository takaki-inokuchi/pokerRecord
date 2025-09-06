import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { InputData } from "./components/InputData";
import { supabase } from "../supabaseClient";
import { PokerRecord } from "./components/PokerRecord";

function App() {
  const [takakirecord, setTakakiRecord] = useState(0);
  const [takashirecord, setTakashiRecord] = useState(0);
  const [coperecord, setCopeRecord] = useState(0);
  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

  const registerbutton = async () => {
    if (takakirecord + takashirecord + coperecord == 0) {
      const newRecord = {
        takaki: takakirecord,
        takashi: takashirecord,
        cope: coperecord,
      };
    } else {
      return setError("間違っています。");
    }
    const { data, error } = await supabase
      .from("poker_record")
      .insert([newRecord])
      .select("*");
    if (error) {
      console.log(error);
      setError("データの取得に失敗しました。");
    } else {
      setRecords([...records, data[0]]);
      setTakakiRecord("");
      setTakashiRecord("");
      setCopeRecord("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("poker_record").select("*");
      if (error) {
        console.log(error);
        setError("データの取得に失敗しました。");
      } else {
        setRecords(data || []);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <InputData
        takakirecord={takakirecord}
        takashirecord={takashirecord}
        coperecord={coperecord}
        onChangeTakakiresult={onChangeTakakiresult}
        onChangeTakashiresult={onChangeTakashiresult}
        onChangecoperesult={onChangecoperesult}
        registerbutton={registerbutton}
      />
      {error}
      <PokerRecord records={records}/>
    </div>
  );
}

export default App;
