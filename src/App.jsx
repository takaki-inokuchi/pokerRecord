import { useEffect, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { supabase } from "../supabaseClient";
import { UserContext } from "./providers/provider";
import { Router } from "./router/Router";

function App() {
  const { setRecords, setError, loading, setLoading } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("poker_record").select("*");
      if (error) {
        console.log(error);
        setError("データの取得に失敗しました。");
      } else {
        setRecords(data || []);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>♠ ♣ ♥ ♦</p>
      ) : (
        <>
          <Router />
        </>
      )}
    </div>
  );
}

export default App;
