import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/hi" component={() => <h1>Hello</h1>} />
    </div>
  );
};
