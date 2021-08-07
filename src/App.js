import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home } from "./Pages/Home"
import Hooks from "./Pages/Hooks"
import Components from "./Pages/Components"
import { NavBar } from "./Components/NavBar";
import Methods from "./Pages/Components/methods/Methods";
import ClassCom from "./Pages/Components/ClassCom";
import FuncCom from "./Pages/Components/FuncCom";
import State_Props from "./Pages/State&Props";


function App() {
  return (

    < >
      <NavBar />
      <div className="container pt-4">
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/hooks/'} component={Hooks} />
          <Route path={'/components/'} exact component={Components} />
          <Route path={'/components/class/methods/'} exact component={() => <Methods />} />
          <Route path={'/components/class/'} exact component={ClassCom} />
          <Route path={'/components/func/'} exact component={FuncCom} />
          <Route path={'/state_props/'} exact component={State_Props} />
        </Switch>
      </div>
    </>

  );
}

export default App;
