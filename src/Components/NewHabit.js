import { useState } from "react";
import styled from "styled-components";
import Input from "../styles/Input";
import Week from "./Week";

export default function NewHabit(){
    const [habit,setHabit] = useState({
        name: "",
        days:[]
    });
    return (
        <Body>
            <Input placeholder="nome do hábito" type="email" value={habit.name} onChange={e=>setHabit({...habit,name: e.target.value})}/>
            <Week habit={habit} setHabit={setHabit}/>
            <Buttons>
                <Cancelar>Cancelar</Cancelar>
                <Salvar>Salvar</Salvar>
            </Buttons>
        </Body>
    );
}

const Body =styled.div`
    width:100%;
    background:#fff;
    padding:18px;
`
const Buttons = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
    margin-top:30px;
`
const Cancelar = styled.button`
    width: 84px;
    height: 35px;
    color:#52B6FF;
    font-size:16px;
    line-height:20px;
    text-align:center;
    border:none;
    background:inherit;
    margin-right:23px;
`

const Salvar = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    color: #fff;
    border: none;
    font-size:16px;
    line-height:20px;
    opacity: ${props => props.disabled ? 0.7:1};
`