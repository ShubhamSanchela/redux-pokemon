import "./App.css"
import { Redirect, Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import Pokemon from "./containers/Pokemon";
import PokemonList from "./containers/PokemonList";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
