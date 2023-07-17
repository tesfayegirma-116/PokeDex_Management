import { Card, CardContent, Grid, Typography, IconButton } from "@mui/material";
import { Delete, Favorite } from "@mui/icons-material";

export default function FavoriteList({
  handleFavoriteClick,
  pokemon,
  handleDeleteClick,
  favorites,
}) {
  return (
    <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
      <Card
        variant="outlined"
        sx={{
          height: "100%",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <IconButton
            onClick={() => handleFavoriteClick(pokemon)}
            color={favorites.includes(pokemon) ? "secondary" : "default"}
          >
            <Favorite />
          </IconButton>
          <IconButton onClick={() => handleDeleteClick(pokemon)}>
            <Delete />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
}
