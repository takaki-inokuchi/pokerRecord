import styled from "styled-components";

export const TotalData = (props) => {
  const { records } = props;
  const totalTakaki = records.reduce((sum, record) => sum + record.takaki, 0);
  const totalTakashi = records.reduce((sum, record) => sum + record.takashi, 0);
  const totalCope = records.reduce((sum, record) => sum + record.cope, 0);
  return (
    <Stable>
      <STh>合計</STh>
      <STd>たかき<br />{`${totalTakaki}円`}</STd>
      <STd>たかし<br />{`${totalTakashi}円`}</STd>
      <STd>こーぺ<br />{`${totalCope}円`}</STd>
    </Stable>
  );
};

const Stable = styled.table`
width:100%;
border-collapse: collapse;
 text-align: center;
 margin:18px 0;
`

const STh = styled.th`
  border: 1px solid #ffffffff;
  padding: 8px;
  background-color: #0a203aff;
   text-align: center; 
   vertical-align: middle;
  `;

const STd = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
`;