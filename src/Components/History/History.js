import Calendar from "react-calendar";
import styled from "styled-components";
import Body from "../../styles/PageBody";
import 'react-calendar/dist/Calendar.css';
import "./calendar.css";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import Day from "./Day";

export default function History(){
    const {user} = useContext(UserContext);
    const [habits,setHabits] = useState([]);
    
    useEffect(()=>{
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",{headers:{Authorization: `Bearer ${user.token}`}});
        promise.then(answer=>setHabits(answer.data));
        promise.catch(console.log);
    },[user.token,setHabits]);
    
    console.log(habits)
    return (
        <Body>
            <Title>Histórico</Title>
            <Calendar className="calendar" calendarType="US" locale="pt-br" formatDay={(locale,date)=><Day date={date} habits={habits}/>}/>
        </Body>
    );

}

const Title = styled.div`
    width:100%;
    padding-top:22px;
    font-size: 23px;
    line-height: 29px;
    color:#126BA5;
    margin-bottom:28px;   
`