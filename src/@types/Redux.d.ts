declare module Redux {
  type Favorites = {
    [key: string]: Pokemon.Pokemon;
  };

  type PokemonRedux = {
    favorites: Favorites;
  };

  type RootState = {
    pokemon: PokemonRedux;
  };
}
