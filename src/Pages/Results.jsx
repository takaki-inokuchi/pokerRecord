import { useContext } from "react";
import { PokerRecord } from "../components/PokerRecord";
import { UserContext } from "../providers/provider";
import { TotalData } from "../components/TotalData";

export const Results = () => {
  const { records } = useContext(UserContext);
  return (
    <div>
      <PokerRecord records={records} />
      <TotalData records={records}/>
    </div>
  );
};
