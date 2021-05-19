import styled from "styled-components";
import Input from "../styles/Input";
import Week from "./Week";

export default function NewHabit(){
    return (
        <Body>
            <Input placeholder="nome do hábito" type="text"/>
            <Week days={[1,3]}/>
        </Body>
    );
}

const Body =styled.div`
    width:100%;
    background:#fff;
    padding:18px;
`