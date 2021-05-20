import "../styles/reset.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Habits from "./Habits";
import Header from "./Header";
import Menu from "./Menu";
import Today from "./Today";
import UserContext from "../contexts/UserContext";
import TodayContext from "../contexts/TodayContext";


export default function App() {
  const [user,setUser] = useState(null);
  const [today,setToday] = useState([]);
  return (
    <UserContext.Provider value={{user,setUser}}>
      <TodayContext.Provider value={{today,setToday}}>
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
            <Route path="/hoje" exact>
              <Today/>
            </Route>
          </Switch>
          <Menu/>
        </BrowserRouter>
      </TodayContext.Provider>
    </UserContext.Provider>
  );
}