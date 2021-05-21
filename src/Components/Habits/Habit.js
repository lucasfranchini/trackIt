import styled from "styled-components";
import { TrashOutline } from 'react-ionicons';
import Week from "../Aux/Week";

export default function Habit({habit,deleteHabit}){
    
    return (
        <Body>
            <span>{habit.name}</span>
            <Trash onClick={()=>deleteHabit(habit)}><TrashOutline color={'#666666'} height="18px" width="15px"/></Trash>
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
const Trash = styled.div`
    position:absolute;
    top:20px;
    right:10px;
`