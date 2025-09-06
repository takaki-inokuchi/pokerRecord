import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DefaultLayout } from "../templates/DefaultLayout";
import { Top } from "../Pages/Top";
import { Results } from "../Pages/Results";
import { Rate } from "../Pages/Rate";
import { Graph } from "../Pages/graph";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Top />} />
          <Route path="/Results" element={<Results />} />
          <Route path="/Rate" element={<Rate />} />
          <Route path="/Graph" element={<Graph />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
