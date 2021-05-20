import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TodayContext from "../contexts/TodayContext";
import Body from "../styles/Body";
import Title from "../styles/Title";
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
                <Subtitle>{percentage}</Subtitle>
            </Title>
        </Body>
    )
}

const Subtitle = styled.span`
`