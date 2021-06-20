import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import App from "./App";
import { Sample1, Sample2 } from "./pages/Sample1";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <Layout>
        <Route exact path="/" component={App}></Route>
        <Route path="/pages/sample1" component={Sample1}></Route>
        <Route path="/pages/sample2" component={Sample2}></Route>
      </Layout>
    </Router>
  </StrictMode>,
  rootElement
);
