import { useContext } from "react";
import { supabase } from "../../supabaseClient";
import { UserContext } from "../providers/provider";
import styled from "styled-components";

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
    error,
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
    if (takakiNum == 0 && takashiNum == 0 && copeNum == 0) {
      return setError("入力されていません。");
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
      setError("記録しました");
    }
  };

  return (
    <div>
      <PokerButton onClick={handleRegister}>登録</PokerButton>
    </div>
  );
};

const PokerButton = styled.button`
  width: 80px; /* 円の直径 */
  height: 80px; /* 円の直径 */
  border-radius: 50%; /* 完全円形 */
  border: none;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  background: radial-gradient(
    circle at 30% 30%,
    #8B0000,
    #8B0000
  ); /* 赤チップ風 */
  box-shadow: 0 4px #3f0101ff; /* 下に影 */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: radial-gradient(circle at 30% 30%, #5e0202ff, #550303ff);
  }

  &:active {
    box-shadow: 0 2px #610303ff;
    transform: translateY(2px);
  }
`;