import styled from "styled-components";
import dayjs from "dayjs";

export default function Day({date,habits}){
    let complete = null;
    const today = dayjs(date).format('DD/MM/YYYY')===dayjs().format('DD/MM/YYYY')
    habits.forEach(d=>{
        if(d.day===dayjs(date).format('DD/MM/YYYY')){
            complete = (d.habits.reduce((acc,h)=> acc && h.done,true))
        }
    });
    return(
        <Body complete={complete} today={today}>
            {dayjs(date).format('DD')}
        </Body>
    );
}

const Body = styled.span`
    background: ${props=> props.today? "#ffff81" :props.complete===null? "":props.complete===true?"#8CC654":"#EA5766"};
    width: 100%;
    height: 100%;
    padding: 9px;
    border-radius: ${props => props.today?"0":"50%"};
    @media(max-width:362px){
        padding: 5px;
    }
`