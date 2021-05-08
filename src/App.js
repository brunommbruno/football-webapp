import { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import News from "./Components/News";
import Fixture from "./Components/Fixture";
import League from "./Components/League";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* Takes Fixture Id and displays corresponding match */}
            <Route
              exact
              path="/fixtures/:id"
              render={({ match }) => <Fixture id={match.params.id} />}
            />
            {/* Takes League Id and displays corresponding league */}
            <Route
              exact
              path="/league/:id"
              render={({ match }) => <League id={match.params.id} />}
            />
          </Switch>
        </>
      </HashRouter>
    );
  }
}

export default App;
