import { useState, useEffect, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { InputData } from "./components/InputData";
import { supabase } from "../supabaseClient";
import { PokerRecord } from "./components/PokerRecord";
import { UserContext } from "./providers/provider";

function App() {
  const {
    setTakakiRecord,
    setTakashiRecord,
    setCopeRecord,
    records,
    setRecords,
    error,
    setError,
    loading,
    setLoading,
  } = useContext(UserContext);

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
      {loading ? (
        <p>♠ ♣ ♥ ♦</p>
      ) : (
        <div>
          <InputData />
          {error}
          <PokerRecord records={records} />
        </div>
      )}
    </div>
  );
}

export default App;
