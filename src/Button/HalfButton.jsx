import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../providers/provider";

export const HalfButton = () => {
  const {
    takakirecord,
    setTakakiRecord,
    takashirecord,
    setTakashiRecord,
    coperecord,
    setCopeRecord,
  } = useContext(UserContext);
  const onClickHalf = () => {
    setTakakiRecord(takakirecord / 2);
    setTakashiRecord(takashirecord / 2);
    setCopeRecord(coperecord / 2);
  };
  return (
    <div>
      <PokerChip onClick={onClickHalf}>すべて1/2</PokerChip>
    </div>
  );
};

const PokerChip = styled.button`
  width: 80px; /* 円の直径 */
  height: 80px; /* 円の直径 */
  border-radius: 50%; /* 完全円形 */
  border: none;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  background: radial-gradient(
    circle at 30% 30%,
    #006400,
    #014101ff
  ); /* 赤チップ風 */
  box-shadow: 0 4px #002b00ff; /* 下に影 */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: radial-gradient(circle at 30% 30%, #013801ff, #014601ff);
  }

  &:active {
    box-shadow: 0 2px #006400;
    transform: translateY(2px);
  }
`;
