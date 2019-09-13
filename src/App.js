import React from 'react';
import ReactDOM from "react-dom";
import Core from "./components/Home/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Route exact path="/" component={Core} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
