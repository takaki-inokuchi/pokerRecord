import { useContext } from "react";
import { PokerRecord } from "../components/PokerRecord";
import { UserContext } from "../providers/provider";

export const Results = () => {
  const { records } = useContext(UserContext);
  return (
    <div>
      <PokerRecord records={records} />
    </div>
  );
};
