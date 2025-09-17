import { Route, Routes } from "react-router-dom";
import { PokeList } from "../pages/list/list.component";

export const PokeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PokeList />} />
    </Routes>
  );
};
