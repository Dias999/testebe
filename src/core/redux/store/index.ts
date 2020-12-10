import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

const persistConfig = {
  key: "pokemon",
  storage,
  // blacklist: ["pokemon"],
};

const composer = composeWithDevTools({});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, composer());

const persistor = persistStore(store);

export { store, persistor };
