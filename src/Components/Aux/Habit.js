import styled from "styled-components";
import { TrashOutline } from 'react-ionicons';
import Week from "./Week";

export default function Habit({habit,deleteHabit,done,days}){
    
    return (
        <Body done={done}>
            <span>{habit.name}</span>
            {deleteHabit!==null && <Trash onClick={()=>deleteHabit(habit)}><TrashOutline color={'#666666'} height="18px" width="15px"/></Trash>}
            <Week habit={habit} changeable={false} days={days} done={done}/>
        </Body>
    );
}

const Body =styled.div`
    width:100%;
    background:#ffffff;
    padding:18px;
    margin-bottom:10px;
    position: relative;
    border-radius: 5px;
    color: ${props =>props.done===null? "#666666":props.done===true?"#8CC654":"#EA5766"};
    
`
const Trash = styled.div`
    position:absolute;
    top:20px;
    right:10px;
`