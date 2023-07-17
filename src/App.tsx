import { CssBaseline, Container } from "@mui/material";
import { PokemonProvider } from "./hooks/usePokemons";
import PokemonList from "./components/PokemonList.tsx";

function App() {
  return (
    <PokemonProvider search="">
      <CssBaseline />
      <Container maxWidth="lg">
        <PokemonList />
      </Container>
    </PokemonProvider>
  );
}

export default App;
