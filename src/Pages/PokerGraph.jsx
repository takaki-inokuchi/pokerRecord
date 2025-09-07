import { useContext } from "react";
import { UserContext } from "../providers/provider";
import { PokerGraphData } from "../components/PokerGraphData";

export const PokerGraph = () => {
  const { records } = useContext(UserContext);
  return (
    <div>
      <PokerGraphData records={records} />
    </div>
  );
};
