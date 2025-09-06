import { useContext } from "react";
import { supabase } from "../../supabaseClient";
import { UserContext } from "../providers/provider";

export const RegisterButton = () => {
  const {
    takakirecord,
    setTakakiRecord,
    takashirecord,
    setTakashiRecord,
    coperecord,
    setCopeRecord,
    records,
    setRecords,
    setError,
  } = useContext(UserContext);

  const handleRegister = async () => {
    const takakiNum = parseInt(takakirecord, 10) || 0;
    const takashiNum = parseInt(takashirecord, 10) || 0;
    const copeNum = parseInt(coperecord, 10) || 0;

    if (takakiNum + takashiNum + copeNum !== 0) {
      setTakakiRecord("");
      setTakashiRecord("");
      setCopeRecord("");
      return setError("間違っています。");
    }
    const newRecord = {
      takaki: takakiNum,
      takashi: takashiNum,
      cope: copeNum,
    };
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
      setError("");
    }
  };

  
  return(<button onClick={handleRegister}>登録</button>);
};
