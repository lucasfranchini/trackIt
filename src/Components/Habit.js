import styled from "styled-components";
import Week from "./Week";

export default function Habit({habit}){
    return (
        <Body>
            <span>{habit.name}</span>
            <Week habit={habit} changeable={false}/>
        </Body>
    );
}

const Body =styled.div`
    width:100%;
    background:#fff;
    padding:18px;
    margin-bottom:10px;
    position: relative;
`