import { useState } from "react";
import styled from "styled-components";

export default function Week({habit,setHabit,changeable}){
    const weekdays = ['D','S','T','Q','Q','S','S'];
    const [selects,setSelects] =useState([false,false,false,false,false,false,false]);
    habit.days.forEach((d)=>selects[d]=true);   

    function changeSelect(i){
        if(changeable){
            if(selects[i]===true) {
                selects[i]=false;
                setSelects([...selects]);
                habit.days =habit.days.filter((d)=> d!==i);
                setHabit({...habit});
                
            }
            else if(selects[i]===false) {
                selects[i]=true;
                setSelects([...selects]);
                habit.days.push(i);
                setHabit({...habit});
            }
        }
    }
    return (
        <Body>
            {weekdays.map((d,i)=><Day key={i} select={selects[i]} onClick={()=>changeSelect(i)}>{d}</Day>)}
        </Body>
    );
}

const Body = styled.div`
    width:100%;
    height: 30px;
    display: flex;
`
const Day = styled.div`
    width:30PX;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 4px;
    display:flex;
    justify-content:center;
    align-items:center;
    color: ${props => props.select===false ? '#DBDBDB':'#ffffff'};
    background: ${props => props.select===false ? '#ffffff':'#CFCFCF'};
`