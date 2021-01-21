import { Component } from "react";
import{
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

import Navbar from "./Components/Navbar";

class App extends Component{

  render(){
    return(
      <HashRouter basename='/'>
        <>
        <Navbar />
        <Switch>
          <Route exact path="/">
          </Route>
        </Switch>
        </>
      </HashRouter>
    )
  }


}

export default App;
