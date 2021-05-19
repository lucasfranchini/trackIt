import { useContext } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export default function Header(){
    const {user} = useContext(UserContext);
    const location = useLocation();
    if(location.pathname==="/" || location.pathname==="/cadastro") return null;
    
    return(
        <Body>
            <span>TrackIt</span>
            <Img src={user && user.image} alt="User"/>
        </Body>
    );
}
const Body = styled.div`
    width: 100%;
    height: 70px;
    background:#126BA5;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    font-size:39px;
    font-family:playball;
    color:#fff;
    padding: 0 18px;
`
const Img =  styled.img`
    width:51px;
    height:51px;
    border-radius:50%
`