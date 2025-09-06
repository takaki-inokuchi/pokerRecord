import { useContext } from "react";
import { InputData } from "../components/InputData";
import { TotalData } from "../components/TotalData";
import { UserContext } from "../providers/provider";

export const Top = () => {
  const { records } = useContext(UserContext);
  return (
    <div>
      <InputData />
      <TotalData records={records}/>
    </div>
  );
};
