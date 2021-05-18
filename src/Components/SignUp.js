import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/Logo.png";
import Input from "../styles/Input";
import { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import {validateEmail,validateURL} from "./Assets/Validate";

export default function SignUp(){
    const [body,setBody] = useState({
            email: "",
            name: "",
            image: "",
            password: ""
        }); 
    let history =  useHistory();
    const [load,setLoad] = useState(false);
    function register(){
        setLoad(true)
        if(!validateEmail(body.email))
        {
            alert("preencha o email corretamente");
            setLoad(false);
            return;
        }
        if(!validateURL(body.image)){
            alert("preencha o endereço da imagem corretamente");
            setLoad(false);
            return;
        }
        const promise =  axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",body);
        promise.then(()=>history.push("/"));
        promise.catch(()=>{
            alert("houve algum erro no seu registro, por favor tente novamente");
            setLoad(false);
        });
    }
    return (
        <Body>
            <Img src={logo} alt="TrackIt"/>
            <Input type="text" placeholder="email" onChange={e=>setBody({...body,email: e.target.value})} value={body.email} disabled={load}/>
            <Input type="password" placeholder="senha" onChange={e=>setBody({...body,password: e.target.value})} value={body.password} disabled={load}/>
            <Input type="text" placeholder="nome" onChange={e=>setBody({...body,name: e.target.value})} value={body.name} disabled={load}/>
            <Input type="text" placeholder="foto" onChange={e=>setBody({...body,image: e.target.value})} value={body.image} disabled={load}/>
            <Button disabled={load} onClick={register}>{load ? <Loader type="ThreeDots" color="#FFF" height={50} width={50}/>:"Cadastrar"}</Button>
            <Link to="/">
                <span>Já tem uma conta? Faça login!</span>
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
    opacity: ${props => props.disabled ? 0.7:1};
`