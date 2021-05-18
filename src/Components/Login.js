import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/Logo.png";
import Input from "../styles/Input";
import { useState } from "react";
import axios from "axios";

export default function Login(){
    const [body,setBody] = useState({
        email: "" ,
        password: ""
    });
    const history = useHistory();

    function signIn(){
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",body);
        promise.then(()=>history.push("/habitos"));
        promise.catch(console.log);
    }
    
    return (
        <Body>
            <Img src={logo} alt="TrackIt"/>
            <Input type="text" placeholder="email" onChange={e=>setBody({...body,email: e.target.value})} value={body.email}/>
            <Input type="password" placeholder="senha" onChange={e=>setBody({...body,password: e.target.value})} value={body.password}/>
            <Button onClick={signIn}>Entrar</Button>
            <Link to="/cadastro">
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>
        </Body>
    );
}

const Img = styled.img`
    margin-bottom:25px;
`

const Body = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    width: 100%;
    padding: 68px 36px;
    color:#52B6FF;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    a:visited {
        color: #52B6FF;
        }

`
const Button = styled.button`
    width: 100%;
    height:45px;
    background: #52B6FF;
    border-radius: 5px;
    color: #fff;
    border: none;
    font-size: 20px;
    margin-bottom: 25px;
`