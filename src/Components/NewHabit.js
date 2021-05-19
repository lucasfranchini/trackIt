import { useState } from "react";
import styled from "styled-components";
import Input from "../styles/Input";
import Week from "./Week";

export default function NewHabit(){
    const [habit,setHabit] = useState({
        name: "",
        days:[]
    });
    
    return (
        <Body>
            <Input placeholder="nome do hábito" type="text"/>
            <Week habit={habit} setHabit={setHabit}/>
        </Body>
    );
}

const Body =styled.div`
    width:100%;
    background:#fff;
    padding:18px;
`