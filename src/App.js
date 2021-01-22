import { Component } from "react";
import{
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import News from "./Components/News";

class App extends Component{

  render(){
    return(
      <HashRouter basename='/'>
        <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
        </Switch>
        </>
      </HashRouter>
    )
  }


}

export default App;
