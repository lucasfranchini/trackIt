import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/Logo.png";
import Input from "../styles/Input";
import { useState } from "react";
import axios from "axios";

export default function SignUp(){
    const [body,setBody] = useState({
            email: "",
            name: "",
            image: "",
            password: ""
        }); 
    let history =  useHistory();

    function validateURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }

    function register(){
        if(!body.email.includes("@") || !body.email.includes("."))
        {
            alert("preencha o email corretamente");
            return;
        }
        if(!validateURL(body.image)){
            alert("preencha o endereço da imagem corretamente");
            return;
        }
        const promise =  axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",body);
        promise.then(()=>history.push("/"));
        promise.catch(console.log);
    }
    return (
        <Body>
            <Img src={logo} alt="TrackIt"/>
            <Input type="text" placeholder="email" onChange={e=>setBody({...body,email: e.target.value})} value={body.email}/>
            <Input type="password" placeholder="senha" onChange={e=>setBody({...body,password: e.target.value})} value={body.password}/>
            <Input type="text" placeholder="nome" onChange={e=>setBody({...body,name: e.target.value})} value={body.name}/>
            <Input type="text" placeholder="foto" onChange={e=>setBody({...body,image: e.target.value})} value={body.image}/>
            <Button onClick={register}>Cadastrar</Button>
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
`