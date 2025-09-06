export const PokerRecord = (props) => {
  const { records } = props;
  const totalTakaki = records.reduce((sum, record) => sum + record.takaki, 0);
  const totalTakashi = records.reduce((sum, record) => sum + record.takashi, 0);
  const totalCope = records.reduce((sum, record) => sum + record.cope, 0);
  return (
    <div>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            たかき{record.takaki}$ たかし{record.takashi}$ こーぺ{record.cope}$
          </li>
        ))}
      </ul>
      <p>合計</p>
      <p>たかき{totalTakaki}💰</p>
      <p>たかし{totalTakashi}💰</p>
      <p>こーぺ{totalCope}💰</p>
    </div>
  );
};
