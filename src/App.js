import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from "./components/Form";
import Header from "./components/Header";
import Tab from './components/Tab'


function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Form} />
            <Route path="/tab" exact component={Tab} />
          </Switch>
        </div>
      </BrowserRouter>
      {/* <Form /> */}
      {/* <div className="container">
        <div className="row">
          <div className="col col-md-4 offset-md-4">
            <Form />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;


