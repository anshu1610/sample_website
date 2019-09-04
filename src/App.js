import React from 'react';
import ReactDOM from "react-dom";
import Core from "./components/Home/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = "/" component = {Core} />
        <Route exact path = "/login" component={Login}/>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
