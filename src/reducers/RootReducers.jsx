import { combineReducers } from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./POkemonMultipleReducer";

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon : PokemonMultipleReducer
});

export default RootReducer;
