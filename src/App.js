import { Component } from "react";
import{
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

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
        </Switch>
        </>
      </HashRouter>
    )
  }


}

export default App;
