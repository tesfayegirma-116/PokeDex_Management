import React from "react";
import { Button, Container, Grid, TextField } from "@mui/material";

export default function SearchComponent({
  handleSearchSubmit,
  searchTerm,
  event,
  setSearchTerm,
}) {
  return (
    <Grid item xs={12}>
      <Container maxWidth="lg">
        <form onSubmit={handleSearchSubmit} noValidate autoComplete="off">
          <TextField
            label="Search Pokemon by Name"
            variant="outlined"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            sx={{
              width: "90%",
              mb: 2,
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              ml: 2,
            }}
          >
            Search
          </Button>
        </form>
      </Container>
    </Grid>
  );
}
