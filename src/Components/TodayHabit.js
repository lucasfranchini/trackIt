import styled from "styled-components";
import { CheckmarkOutline } from 'react-ionicons';
import { useContext, useState } from "react";
import TodayContext from "../contexts/TodayContext";
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function TodayHabit({habit}){
    const {today,setToday} = useContext(TodayContext);
    const {user} =useContext(UserContext);
    const [oldHighestSequence] = useState(habit.highestSequence);
    function check(){
        if(habit.done){
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`,{},{headers:{Authorization: `Bearer ${user.token}`}});
            promise.then(a=>{
                const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",{headers:{Authorization: `Bearer ${user.token}`}});
                promise.then(answer=>setToday(answer.data));
                promise.catch(console.log);
            })
            promise.catch(console.log);
            
        }
        else{
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`,{},{headers:{Authorization: `Bearer ${user.token}`}});
            promise.then((a)=>{
                console.log(a)
                habit.done =true;
                habit.currentSequence ++;
                if(habit.currentSequence>habit.highestSequence) habit.highestSequence ++;
                setToday([...today])
            })
            promise.catch(console.log);
        }
    }
    console.log(oldHighestSequence);
    return(
        <Body>
            <Texts>
                <Name>{habit.name}</Name>
                <div>Sequência atual: <Current done={habit.done}>{habit.currentSequence} dias</Current></div>
                <div>Sequência recorde: <Highest equals={habit.currentSequence===habit.highestSequence && habit.done}>{habit.highestSequence} dias</Highest></div>
            </Texts>
            <Button done={habit.done}>
                <CheckmarkOutline color={'#ffffff'} height="60px" width="50px" onClick={check} />
            </Button>
        </Body>
    );
}

const Body = styled.div`
    width: 100%;
    padding: 13px 14px;
    margin-bottom: 10px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Texts = styled.div`
    margin-right: 35px;
    font-size: 12px;
    line-height: 16px;
`
const Name = styled.div`
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 7px;
`
const Current = styled.span`
    color: ${props => props.done ? '#8FC549':'#666666'};
`
const Highest = styled.span`
    color: ${props => props.equals ? '#8FC549':'#666666'};
`

const Button = styled.button`
    width:69px;
    height: 69px;
    flex-shrink: 0;
    border:none;
    border-radius: 5px;
    background: ${props => props.done ? '#8FC549':'#ebebeb'};
`