import "../styles/reset.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Habits from "./Habits";
import Header from "./Header";
import Menu from "./Menu";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Login/>
        </Route>
        <Route path="/cadastro" exact>
          <SignUp/>
        </Route>
        <Route path="/habitos" exact>
          <Habits/>
        </Route>
      </Switch>
      <Menu/>
    </BrowserRouter>
    </>
  );
}