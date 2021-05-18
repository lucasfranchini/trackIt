import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./Logo.png";
import Input from "./Input";
import { useState } from "react";

export default function SignUp(){
    const [body,setBody] = useState(
        {
            email: "",
            name: "",
            image: "",
            password: ""
        }
    ); 
    
    
    return (
        <Body>
            <Img src={logo} alt="TrackIt"/>
            <Input type="text" placeholder="email" onChange={e=>setBody({...body,email: e.target.value})} value={body.email}/>
            <Input type="password" placeholder="senha" onChange={e=>setBody({...body,password: e.target.value})} value={body.password}/>
            <Input type="text" placeholder="nome" onChange={e=>setBody({...body,name: e.target.value})} value={body.name}/>
            <Input type="text" placeholder="foto" onChange={e=>setBody({...body,image: e.target.value})} value={body.image}/>
            <Button onClick={()=>console.log(body)}>Cadastrar</Button>
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