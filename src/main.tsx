import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomeComponent } from "./components/home/home.component";
import { BrowserRouter } from "react-router-dom";
import { client } from "./configs/pokemons-graphQL";
import { ApolloProvider } from "@apollo/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <HomeComponent nombre="Jonathan" />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
);
