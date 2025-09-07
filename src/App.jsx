import { useEffect, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { supabase } from "../supabaseClient";
import { UserContext } from "./providers/provider";
import { Router } from "./router/Router";
import styled from "styled-components";

function App() {
  const { setRecords, setError, setLoading } = useContext(UserContext);

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
    <MainContainer>
      <Router />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  max-width: 900px;
  width: 100%;
  background-color: #0f3460;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  padding: 20px;
  margin-top: 20px;
  margin: 0 auto;
`;