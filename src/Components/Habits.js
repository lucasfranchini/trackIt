import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Habit from "./Habit";
import NewHabit from "./NewHabit";
import TodayContext from "../contexts/TodayContext";

export default function Habits(){
    const {user} = useContext(UserContext);
    const [newHabit,setNewHabit] = useState(false);
    const [habits,setHabits] = useState([])
    const token = user===null ? "":user.token;
    const {today,setToday} = useContext(TodayContext);
    const [habit,setHabit] = useState({
        name: "",
        days:[]
    });

    useEffect(()=>{
        if(token !== ""){
            const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{headers:{Authorization: `Bearer ${token}`}})
            promise.then(answer=>setHabits(answer.data));
            promise.catch((e)=>console.log(e.response));
        }
    },[token,setHabits]);

    if(user===null) return null;

    function deleteHabit(habit){
        if(window.confirm("tem certeza que deseja deletar esse habito?")){
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`,{headers:{Authorization: `Bearer ${token}`}});
            promise.then(()=>{
                setHabits(habits.filter(h=>habit.id!==h.id));
                setToday(today.filter(h=>habit.id!==h.id));
            });
            promise.catch(console.log);
        }
    }

    function addHabit(habit){
        setHabits([...habits,habit]);
        setNewHabit(false);
        setHabit({
            name: "",
            days:[]
        });
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",{headers:{Authorization: `Bearer ${token}`}});
        promise.then(answer=>setToday(answer.data));
        promise.catch(console.log);
    }

    return (

        <Body>
            <Titulo>
                <span>Meus hábitos</span>
                <Button onClick={()=>setNewHabit(true)}>+</Button>
            </Titulo>
            {newHabit && <NewHabit addHabit={addHabit} setNewHabit={setNewHabit} habit={habit} setHabit={setHabit}/>}
            { habits.length===0 && <div>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>}
            { habits.length!==0 && habits.map(habit=><Habit key={habit.id} habit={habit} deleteHabit={deleteHabit}/>)}
        </Body>
    );
}

const Body = styled.div`
    width:100%;
    height:100vh;
    padding:70px 18px;
    background:#e5e5e5;
    color: #666666;
    font-size:18px;
    line-height:23px;
    overflow: scroll;
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
