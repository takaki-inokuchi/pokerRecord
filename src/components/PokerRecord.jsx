export const PokerRecord = (props) => {
  const { records } = props;
  return (
    <div>
      <ul>
        {records.map((record, index) => (
          <li>
            {record.takaki} {record.takashi} {record.cope}
          </li>
        ))}
      </ul>
    </div>
  );
};
