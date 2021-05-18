import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Menu(){
    
    let location = useLocation();
    if(location.pathname==="/" || location.pathname==="/cadastro") return (<></>);
    return (
        <Body>
            <Content/>
            <Link to="/habitos">
                <Button>Hábitos</Button>
            </Link>
            <Link to="/hoje">
                <Circular>
                    <CircularProgressbar 
                        value={50} 
                        text={`Hoje`} 
                        styles={buildStyles({
                            pathColor:'#fff',
                            textColor: '#fff',
                            textSize: '25px',
                            trailColor: 'none'
                        })} 
                    />;
                </Circular>
            </Link>
            <Link to="/historico">
                <Button>Histórico</Button>
            </Link>
        </Body>
    );
}

const Body = styled.div`
    width: 100%;
    height: 101px;
    position: fixed;
    bottom: 0;
    left: 0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:transparent;
    a{
        z-index:1;
    }
`
const Content = styled.div`
    width:100%;
    height:70px;
    background:#fff;
    opacity:1;
    position:absolute;
    bottom:0;
    left:0;
`
const Circular = styled.div`
    width:91px;
    height:91px;
    background:#52B6FF;
    border-radius: 50%;
    padding: 6px;
`

const Button = styled.button`
    color:#52B6FF;
    font-size:18px;
    line-height:23px;
    text-align:center;
    border:none;
    background:inherit;
    margin-top:30px
`