import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TodayContext from "../../contexts/TodayContext";
import UserContext from "../../contexts/UserContext";
import Body from "../../styles/PageBody";
import calculatePercentage from "../../Aux/calculatePercentage";
import TodayHabit from "./TodayHabit";

export default function Today(){
    const {today,setToday} =useContext(TodayContext);
    const {user} = useContext(UserContext);
    const token = user===null ? "":user.token;
    useEffect(()=>{
        if(token!==""){
            const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",{headers:{Authorization: `Bearer ${token}`}});
            promise.then(answer=>setToday(answer.data));
            promise.catch(console.log);
        }   
    },[token,setToday]);
    //usando dia em portugues e no formato pedido
    require('dayjs/locale/pt-br');
    dayjs.extend(require('dayjs/plugin/updateLocale'));
    dayjs.updateLocale('pt-br', {weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]}); 
    const day = dayjs().locale('pt-br').format('dddd, DD/MM');

    const [percentage,setPercentage] = useState(100);
    useEffect(()=>{calculatePercentage(setPercentage,today)},[today]);
    return (
        <Body>
            <Title>
                <span>{day}</span>
                <Subtitle percentage={percentage}>{percentage===0?'Nenhum hábito concluído ainda':`${Math.round(percentage)}% dos hábitos concluídos`}</Subtitle>
            </Title>
            {today.map(habit=><TodayHabit key={habit.id} habit={habit}/>)}
        </Body>
    )
}
const Title = styled.div`
    width:100%;
    padding-top:22px;
    font-size: 23px;
    line-height: 29px;
    color:#126BA5;
    margin-bottom:28px;
`
const Subtitle = styled.div`
    font-size:18px;
    line-height:23px;
    color: ${props=> props.percentage===0?'#bababa':'#8FC549'} ;
`