import { PokeActions } from "../actions";
import { createReducer } from "typesafe-actions";

const { addFavorite, removeFavorite } = PokeActions;

const initialState: any = {
  favorites: {},
};

const reducer = createReducer(initialState)
  .handleAction(addFavorite, (state, { payload: data }) => ({
    ...state,
    favorites: { ...state.favorites, [data.id]: data },
  }))
  .handleAction(removeFavorite, (state, { payload: data }) => {
    let newFavorites = { ...state.favorites };

    delete newFavorites[data.id];

    return {
      ...state,
      favorites: newFavorites,
    };
  });

export default reducer;
