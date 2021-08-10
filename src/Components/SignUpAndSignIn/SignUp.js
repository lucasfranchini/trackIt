import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../../Assets/Logo.png";
import Input from "../../styles/Input";
import { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function SignUp() {
  const [body, setBody] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  let history = useHistory();
  const [load, setLoad] = useState(false);
  function register(e) {
    e.preventDefault();
    setLoad(true);
    const promise = axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/auth/sign-up`,
      body
    );
    promise.then(() => history.push("/"));
    promise.catch(() => {
      alert("houve algum erro no seu registro, por favor tente novamente");
      setLoad(false);
    });
  }
  return (
    <Body>
      <Img src={logo} alt="TrackIt" />
      <form onSubmit={register}>
        <Input
          type="email"
          placeholder="email"
          onChange={(e) => setBody({ ...body, email: e.target.value })}
          value={body.email}
          disabled={load}
          required
        />
        <Input
          type="password"
          placeholder="senha"
          onChange={(e) => setBody({ ...body, password: e.target.value })}
          value={body.password}
          disabled={load}
          required
        />
        <Input
          type="text"
          placeholder="nome"
          onChange={(e) => setBody({ ...body, name: e.target.value })}
          value={body.name}
          disabled={load}
          required
        />
        <Input
          type="url"
          placeholder="foto"
          onChange={(e) => setBody({ ...body, image: e.target.value })}
          value={body.image}
          disabled={load}
          required
        />
        <Button disabled={load} type="submit">
          {load ? (
            <Loader type="ThreeDots" color="#FFF" height={50} width={50} />
          ) : (
            "Cadastrar"
          )}
        </Button>
      </form>
      <Link to="/">
        <span>Já tem uma conta? Faça login!</span>
      </Link>
    </Body>
  );
}

const Img = styled.img`
  margin-bottom: 25px;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 68px 36px;
  color: #52b6ff;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  a:visited {
    color: #52b6ff;
  }
`;
const Button = styled.button`
  width: 100%;
  height: 45px;
  background: #52b6ff;
  border-radius: 5px;
  color: #fff;
  border: none;
  font-size: 20px;
  margin-bottom: 25px;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
`;
