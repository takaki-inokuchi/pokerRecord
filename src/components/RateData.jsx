import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../providers/provider";

export const RateData = () => {
  const { records } = useContext(UserContext);

  if (!records || records.length === 0) {
    return <Container>データがありません</Container>;
  }

  // 合計ポイントを計算
  const totalTakaki = records.reduce((sum, r) => sum + Number(r.takaki), 0);
  const totalTakashi = records.reduce((sum, r) => sum + Number(r.takashi), 0);
  const totalCope = records.reduce((sum, r) => sum + Number(r.cope), 0);

  // 合計ポイントの絶対値の合計（％計算用）
  const totalAbs =
    Math.abs(totalTakaki) + Math.abs(totalTakashi) + Math.abs(totalCope);

  // 勝率（合計ポイントに対する割合）
  const calcRate = (num) => ((num / totalAbs) * 100).toFixed(1);

  return (
    <Container>
      <SRate>player Rate</SRate>
      <RateRow>
        <Label>たかき</Label>
        <Value>
          {totalTakaki}点 / {calcRate(totalTakaki)}%
        </Value>
      </RateRow>
      <RateRow>
        <Label>たかし</Label>
        <Value>
          {totalTakashi}点 / {calcRate(totalTakashi)}%
        </Value>
      </RateRow>
      <RateRow>
        <Label>こーぺ</Label>
        <Value>
          {totalCope}点 / {calcRate(totalCope)}%
        </Value>
      </RateRow>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const RateRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  color: #1a73e8;
`;
const SRate = styled.h2`
  text-align: center;
`;
