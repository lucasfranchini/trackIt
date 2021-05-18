import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./Logo.png";

export default function Login(){
    return (
        <Body>
            <img src={logo} alt="TrackIt"/>
            <Input type="text" placeholder="email"/>
            <Input type="password" placeholder="senha"/>
            <Button>Entrar</Button>
            <Link to="/cadastro">
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>
        </Body>
    );
}

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
const Input = styled.input`
    width:100%;
    height:45px;
    margin-bottom: 6px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px; 
    &::placeholder{
        color:#DBDBDB;
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