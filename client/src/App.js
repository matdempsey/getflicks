import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";

//TODO: react router

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default App;
