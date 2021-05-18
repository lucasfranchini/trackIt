import "./reset.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}