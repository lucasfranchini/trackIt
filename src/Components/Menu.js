import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function Menu({todayHabits,setTodayHabits}){
    const location = useLocation();
    const {user} = useContext(UserContext);
    const token = user===null ? "":user.token;
    const [percentage,setPercentage] = useState(100);
    useEffect(()=>{
        if(token!==""){
            const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",{headers:{Authorization: `Bearer ${token}`}});
            promise.then(answer=>setTodayHabits(answer.data));
            promise.catch(console.log);
        }   
    },[token,setTodayHabits]);
    useEffect(()=>{
        for(let i=0; i<todayHabits.length;i++){
            let newpercentage=0;
            if(todayHabits[i].done===false){
                newpercentage += 100/todayHabits.length;
            }
            if(i+1===todayHabits.length){
                setPercentage(newpercentage);
            }
        }
        if(todayHabits.length===0){
            setPercentage(100);
        }
    },[todayHabits]);
    
    console.log(todayHabits);
    if(location.pathname==="/" || location.pathname==="/cadastro") return null;
    return (
        <Body>
            <Content/>
            <Link to="/habitos">
                <Button>Hábitos</Button>
            </Link>
            <Link to="/hoje">
                <Circular>
                    <CircularProgressbar 
                        value={percentage} 
                        text={`Hoje`} 
                        styles={buildStyles({
                            pathColor:'#fff',
                            textColor: '#fff',
                            textSize: '25px',
                            trailColor: 'none'
                        })} 
                    />;
                </Circular>
            </Link>
            <Link to="/historico">
                <History>Histórico</History>
            </Link>
        </Body>
    );
}

const Body = styled.div`
    width: 100%;
    height: 101px;
    position: fixed;
    bottom: 0;
    left: 0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:transparent;
    a{
        z-index:1;
    }
`
const Content = styled.div`
    width:100%;
    height:70px;
    background:#fff;
    opacity:1;
    position:absolute;
    bottom:0;
    left:0;
`
const Circular = styled.div`
    width:91px;
    height:91px;
    background:#52B6FF;
    border-radius: 50%;
    padding: 6px;
`

const Button = styled.button`
    color:#52B6FF;
    font-size:18px;
    line-height:23px;
    text-align:center;
    border:none;
    background:inherit;
    position:absolute;
    top:50px;
    left:0;
`
const History = styled.button`
    color:#52B6FF;
    font-size:18px;
    line-height:23px;
    text-align:center;
    border:none;
    background:inherit;
    position:absolute;
    top:50px;
    right:0;
`