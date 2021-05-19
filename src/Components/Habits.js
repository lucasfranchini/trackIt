import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import NewHabit from "./NewHabit";

export default function Habits(){
    const {user,setUser} = useContext(UserContext);
    const [newHabit,setNewHabit] = useState(false);

    useEffect(()=>{
        if(user !== null){
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{headers:{Authorization: `Bearer ${user.token}`}})
        promise.then(answer=>setUser({...user,habits:answer.data}))
        promise.catch((e)=>console.log(e.reponse));
    }},[]); // eslint-disable-line react-hooks/exhaustive-deps

    if(user===null) return null;
    if(user.habits===undefined) user.habits = [];

    
    return (
        <Body>
            <Titulo>
                <span>Meus hábitos</span>
                <Button onClick={()=>setNewHabit(true)}>+</Button>
            </Titulo>
            {newHabit && <NewHabit setNewHabit={setNewHabit}/>}
            {user.habits.length===0 && <div>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>}
        </Body>
    );
}
const Body = styled.div`
    width:100%;
    padding:70px 18px;
    height:100vh;
    background:#e5e5e5;
    color: #666666;
    font-size:18px;
    line-height:23px;
`
const Titulo = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-top:22px;
    font-size: 23px;
    line-height: 29px;
    color:#126BA5;
    margin-bottom:28px;
`
const Button = styled.button`
    width: 40px;
    height: 35px;
    background:#52B6FF;
    border:none;
    border-radius: 5px;
    color:#fff;
    font-size: 27px;
    line-height:33px;
    text-indent: 1px;
`
