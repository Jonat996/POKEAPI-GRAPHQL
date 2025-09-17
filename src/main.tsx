import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./core/configs/pokemons-graphQL";
import "./core.css";
import { Layout } from "./core/components/layout/layout.component";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Layout />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
);
