import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TodayContext from "../contexts/TodayContext";
import Body from "../styles/Body";
import calculatePercentage from "./calculatePercentage";

export default function Today(){
    const {today,setToday} =useContext(TodayContext);
    //usando dia em portugues e no formato pedido
    require('dayjs/locale/pt-br');
    dayjs.extend(require('dayjs/plugin/updateLocale'));
    dayjs.updateLocale('pt-br', {weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]}); 
    const day = dayjs().locale('pt-br').format('dddd, DD/MM');
    //calculando porcentagem
    const [percentage,setPercentage] = useState(100);
    useEffect(()=>{calculatePercentage(setPercentage,today)},[today]);
    return (
        <Body>
            <Title>
                <span>{day}</span>
                <Subtitle percentage={percentage}>{percentage===0?'Nenhum hábito concluído ainda':`${percentage}% dos hábitos concluídos`}</Subtitle>
            </Title>
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