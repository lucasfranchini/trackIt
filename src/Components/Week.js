import styled from "styled-components";

export default function Week({days}){
    const weekdays = ['D','S','T','Q','Q','S','S'];
    const selects =[false,false,false,false,false,false,false];
    days.forEach((d)=>selects[d]=true);   
    return (
        <Body>
            {weekdays.map((d,i)=><Day key={i} select={selects[i]}>{d}</Day>)}
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