import { createStandardAction } from "typesafe-actions";

export const addFavorite = createStandardAction("@@pokemon/ADD_FAVORITE")();
export const removeFavorite = createStandardAction(
  "@@pokemon/REMOVE_FAVORITE"
)();
