import { PokeRoutes } from "../routes/poke.routes";
import { Header } from "./header/header.component";

export const Layout = () => {
  return (
    <>
      <Header />
      <PokeRoutes />
    </>
  );
};
