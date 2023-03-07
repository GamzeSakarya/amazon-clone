import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckoutScreen from "./Screens/CheckoutScreen";
import HomeScreen from "./Screens/HomeScreen";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <CheckoutScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
