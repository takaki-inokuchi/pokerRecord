import styled from "styled-components";
export const PokerRecord = (props) => {
  const { records } = props;

  return (
    <Stable>
      <thead>
        <tr>
          <STh>回数</STh>
          <STh>たかき</STh>
          <STh>たかし</STh>
          <STh>こーぺ</STh>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index}>
            <STd>{index + 1}回目</STd>
            <STd>{record.takaki}円</STd>
            <STd>{record.takashi}円</STd>
            <STd>{record.cope}円</STd>
          </tr>
        ))}
      </tbody>
    </Stable>
  );
};

const Stable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  text-align: center;
`;

const STd = styled.td`
  border: 1px solid #ccc;
  padding: 8px 0;
`;

const STh = styled.th`
  border: 1px solid #ccc;
  padding: 8px 0;
`;
