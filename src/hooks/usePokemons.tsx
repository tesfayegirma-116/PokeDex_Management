import { createContext, useContext } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { getPokemons } from "../api";

type PokemonContextType = {
  data: any;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

type PokemonProviderProps = {
  children: React.ReactNode;
  search: string;
};

const PokemonContext = createContext<PokemonContextType>({
  data: undefined,
  isLoading: false,
  isError: false,
  error: undefined,
});

export const PokemonProvider: React.FC<PokemonProviderProps> = ({
  children,
  search,
}) => {
  const { data, isLoading, isError, error }: UseQueryResult<any, unknown> =
    useQuery(["pokemons", search], () => getPokemons(search));

  return (
    <PokemonContext.Provider value={{ data, isLoading, isError, error }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemons = (): PokemonContextType => useContext(PokemonContext);
