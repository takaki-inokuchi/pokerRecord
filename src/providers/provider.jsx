import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const [takakirecord, setTakakiRecord] = useState("");
  const [takashirecord, setTakashiRecord] = useState("");
  const [coperecord, setCopeRecord] = useState("");
  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <UserContext.Provider
      value={{
        takakirecord,
        setTakakiRecord,
        takashirecord,
        setTakashiRecord,
        coperecord,
        setCopeRecord,
        records,
        setRecords,
        error,
        setError,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
