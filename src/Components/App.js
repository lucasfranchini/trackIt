import "../styles/reset.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./SignUpAndSignIn/Login";
import SignUp from "./SignUpAndSignIn/SignUp";
import Habits from "./Habits/Habits";
import Header from "./HeaderAndMenu/Header";
import Menu from "./HeaderAndMenu/Menu";
import Today from "./Today/Today";
import UserContext from "../contexts/UserContext";
import TodayContext from "../contexts/TodayContext";
import History from "./History/History";

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [today, setToday] = useState([]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <TodayContext.Provider value={{ today, setToday }}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/cadastro" exact>
              <SignUp />
            </Route>
            <Route path="/habitos" exact>
              <Habits />
            </Route>
            <Route path="/hoje" exact>
              <Today />
            </Route>
            <Route path="/historico" exact>
              <History />
            </Route>
          </Switch>
          <Menu />
        </BrowserRouter>
      </TodayContext.Provider>
    </UserContext.Provider>
  );
}
