import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Habit from "./Habit";
import NewHabit from "./NewHabit";

export default function Habits(){
    const {user} = useContext(UserContext);
    const [newHabit,setNewHabit] = useState(false);
    const [habits,setHabits] = useState([])
    const token = user===null ? "":user.token;
    useEffect(()=>{
        if(token !== ""){
            const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{headers:{Authorization: `Bearer ${token}`}})
            promise.then(answer=>setHabits(answer.data));
            promise.catch((e)=>console.log(e.response));
        }
    },[token,setHabits]);
    if(user===null) return null;
    console.log(habits);
    return (
        <Body>
            <Titulo>
                <span>Meus hábitos</span>
                <Button onClick={()=>setNewHabit(true)}>+</Button>
            </Titulo>
            {newHabit && <NewHabit setNewHabit={setNewHabit}/>}
            { habits.length===0 && <div>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>}
            { habits.length!==0 && habits.map(habit=><Habit key={habit.id}/>)}
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
