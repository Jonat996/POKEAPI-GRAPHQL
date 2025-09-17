import { PokeCard } from "./components/card/card.component";
import { Loading } from "../../common/loading/loading.component";
import { usePokeList } from "./list.hook";
import { Pager } from "./components/paginator/pager.component";

export const PokeList = () => {
  const { loading, error, pokeData, onPageChange } = usePokeList();
  return (
    <div className="p-4 bg-sky-700 text-white min-h-screen">
      {loading && <Loading />}

      <div className="flex flex-wrap justify-center gap-4">
        {pokeData.pokemons &&
          pokeData?.pokemons.map((pokemon) => (
            <PokeCard
              key={pokemon.id}
              nombre={pokemon.name}
              imagen={pokemon.pokemonsprites[0]?.sprites?.front_default || ""}
            />
          ))}
      </div>
      <Pager
        currentPage={pokeData.currentPage}
        totalPages={pokeData.totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};
