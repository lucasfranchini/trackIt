import "../styles/reset.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login/>
        </Route>
        <Route path="/cadastro" exact>
          <SignUp/>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}