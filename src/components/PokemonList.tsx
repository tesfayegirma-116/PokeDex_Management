import axios from "axios";
import React, { useState } from "react";
import { usePokemons } from "../hooks/usePokemons";
import {
  Button,
  Grid,
  TextField,
  Typography,
  LinearProgress,
  Container,
} from "@mui/material";
import PokemonCard from "./PokemonCard";
import FavioriteList from "./FavioriteList";

const PokemonList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);

  const { data, isLoading, isError, error } = usePokemons() as any;

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    if (searchTerm === "") {
      setPokemonList([]);
    }
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );
      const pokemon = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.front_default,
      };
      setPokemonList([pokemon]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (searchTerm === "") {
      setPokemonList([]);
    }
  }, [searchTerm]);

  const handleFavoriteClick = (pokemon) => {
    if (favorites.includes(pokemon)) {
      setFavorites(favorites.filter((p) => p !== pokemon));
    } else {
      setFavorites([...favorites, pokemon]);
    }
  };

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteClick = (pokemon) => {
    if (window.confirm(`Are you sure you want to delete ${pokemon.name}?`)) {
      setFavorites(favorites.filter((p) => p !== pokemon));
    }
  };

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <>
      <Grid container spacing={12} sx={{ mt: 2, mb: 2 }}>
        <Container style={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{ color: "brown", fontFamily: "poppins" }}
          >
            Pokémon
          </Typography>
          <Typography variant="h6" component="h4" sx={{ fontStyle: "italic" }}>
            Gotta Catch 'Em All!
          </Typography>
        </Container>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <form onSubmit={handleSearchSubmit} noValidate autoComplete="off">
              <TextField
                label="Search Pokemon by Name"
                variant="outlined"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                sx={{ width: "90%", mb: 2 }}
              />
              <Button type="submit" variant="contained" sx={{ ml: 2 }}>
                Search
              </Button>
            </form>
          </Container>
        </Grid>
        {filteredPokemon.map((pokemon) => (
          <PokemonCard
            handleFavoriteClick={handleFavoriteClick}
            pokemon={pokemon}
            favorites={favorites}
          />
        ))}
        {favorites.length > 0 && (
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Favorites List ({favorites?.length})
            </Typography>
          </Grid>
        )}
        {favorites.map((pokemon) => (
          <FavioriteList
            handleFavoriteClick={handleFavoriteClick}
            pokemon={pokemon}
            handleDeleteClick={handleDeleteClick}
            favorites={favorites}
          />
        ))}
      </Grid>
    </>
  );
};

export default PokemonList;
