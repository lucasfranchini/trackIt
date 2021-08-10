import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import Input from "../../styles/Input";
import Week from "../Aux/Week";
import Loader from "react-loader-spinner";

export default function NewHabit({addHabit,setNewHabit,setHabit,habit}){
    const {user} = useContext(UserContext);
    const [load,setLoad] = useState(false);
    function createHabit(){
        setLoad(true);
        const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/habits`,habit,{headers:{Authorization: `Bearer ${user.token}`}});
        promise.then(answer=>addHabit(answer.data));
        promise.catch(()=>{
            setLoad(false);
            alert("Houve um erro ao tentar criar um habito");
        });
    }
    function cancel(){
        setNewHabit(false);
        setHabit({...habit});
    }
    return (
        <Body>
            <Input placeholder="nome do hábito" type="email" value={habit.name} onChange={e=>setHabit({...habit,name: e.target.value})} disabled={load}/>
            <Week habit={habit} setHabit={setHabit} changeable={true} days={habit.days} done={null}/>
            <Buttons >
                <Cancelar disabled={load} onClick={cancel}>Cancelar</Cancelar>
                <Salvar disabled={load} onClick={createHabit}>{load ? <Loader type="ThreeDots" color="#FFF" height={50} width={50} radius={0}/>:"Salvar"}</Salvar>
            </Buttons>
        </Body>
    );
}

const Body =styled.div`
    width:100%;
    background:#fff;
    padding:18px;
    margin-bottom:30px;
`
const Buttons = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
    margin-top:30px;
`
const Cancelar = styled.button`
    width: 84px;
    height: 35px;
    color:#52B6FF;
    font-size:16px;
    line-height:20px;
    text-align:center;
    border:none;
    background:inherit;
    margin-right:23px;
    opacity: ${props => props.disabled ? 0.7:1};
`

const Salvar = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    color: #fff;
    border: none;
    font-size:16px;
    line-height:20px;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    opacity: ${props => props.disabled ? 0.7:1};
`