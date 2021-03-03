import { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import News from "./Components/News";
import Fixture from "./Components/Fixture";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* Takes Fixture Id and displays match */}
            <Route
              exact
              path="/fixtures/:id"
              render={({ match }) => <Fixture id={match.params.id} />}
            />
          </Switch>
        </>
      </HashRouter>
    );
  }
}

export default App;
