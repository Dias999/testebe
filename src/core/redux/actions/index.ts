import * as PokeActions from "./pokemon";
import { store } from "../store";
import { getType } from "typesafe-actions";

const dispatchAction = (type: any, payload?: any) => {
  return store.dispatch({ type: getType(type), payload });
};

export { PokeActions, dispatchAction as default };
