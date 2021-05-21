import styled from "styled-components";
import { TrashOutline } from 'react-ionicons';
import Week from "../Aux/Week";

export default function Habit({habit,deleteHabit,done,days}){
    
    return (
        <Body done={done}>
            <span>{habit.name}</span>
            {deleteHabit!==null && <Trash onClick={()=>deleteHabit(habit)}><TrashOutline color={'#666666'} height="18px" width="15px"/></Trash>}
            <Week habit={habit} changeable={false} days={days}/>
        </Body>
    );
}

const Body =styled.div`
    width:100%;
    background:${props =>props.done===null? "#ffffff":props.done===true?"#8CC654":"#EA5766"};
    padding:18px;
    margin-bottom:10px;
    position: relative;
    border-radius: 5px;
    
`
const Trash = styled.div`
    position:absolute;
    top:20px;
    right:10px;
`