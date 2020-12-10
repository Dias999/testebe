declare module Pokemon {
  type NameAndUrl = {
    name: string;
    url: string;
  };

  type PokemonSprites = {
    front_default: string;
    front_shiny: string | null;
    front_female: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_shiny: string | null;
    back_female: string | null;
    back_shiny_female: string | null;
  };

  type PokemonStat = {
    stat: NameAndUrl;
    effort: number;
    base_stat: number;
  };

  type PokemonType = {
    slot: number;
    type: NameAndUrl;
  };

  type Pokemon = {
    name: string;
    id: number;
    sprites: PokemonSprites;
    stats: PokemonStat[];
    types: PokemonType[];
  };
}

declare module PokemonInfo {
  type Props = {
    data: Pokemon.Pokemon;
  };
}

declare module Form {
  type Props = {
    getPokemon: (name: string) => void;
    clearAll: () => void;
    loading: boolean;
  };

  type SearchForm = {
    name: string;
  };

  type SearchFormErrors = {
    name?: string;
  };
}

declare module FavoritesList {
  type Props = {
    favorites: Redux.Favorites;
  };
}

declare module Input {
  type Props = {
    type: "text";
    name: string;
    value: string;
    placeholder: string;
    ariaLabel: string;
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    handleBlur?: any;
    error?: any;
  };
}
