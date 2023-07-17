import { Favorite } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

export default function PokemonCard({
  handleFavoriteClick,
  pokemon,
  favorites,
}) {
  return (
    <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              style={{
                width: 100,
                height: 100,
              }}
            />
          </Box>
          <IconButton
            onClick={() => handleFavoriteClick(pokemon)}
            color={favorites.includes(pokemon) ? "secondary" : "default"}
          >
            <Favorite />
          </IconButton>

          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <IconButton
            onClick={() => handleFavoriteClick(pokemon)}
            color={favorites.includes(pokemon) ? "secondary" : "default"}
          ></IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
}
