import "../styles/reset.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Habits from "./Habits";
import Header from "./Header";
import Menu from "./Menu";
import UserContext from "../contexts/UserContext";

export default function App() {
  const [user,setUser] = useState(null);
  return (
    <UserContext.Provider value={{user,setUser}}>
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
    </UserContext.Provider>
  );
}