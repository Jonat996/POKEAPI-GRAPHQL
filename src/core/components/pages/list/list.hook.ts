import { gql, useQuery } from "@apollo/client";
import { Data } from "../../../interfaces/response.interfaces";
import { useState } from "react";

export const usePokeList = () => {
  const GET_POKEMON = gql`
    query {
      pokemon {
        id
        name
        weight
        height
        pokemonsprites {
          sprites
        }
      }
    }
  `;

  const { loading, error, data } = useQuery<Data>(GET_POKEMON);
  const [currentPage, setCurrentPage] = useState(1);

  const pokeData = {
    pokemons: data?.pokemon.slice((currentPage - 1) * 20, currentPage * 20),
    currentPage,
    totalPages: data?.pokemon.length ? Math.ceil(data.pokemon.length / 20) : 0,
    pageSize: 20,
  };

  return {
    loading,
    error,
    pokeData,
    onPageChange: (page: number) => {
      if (page < 1 || page > pokeData.totalPages) return;
      setCurrentPage(page);
    },
  };
};
