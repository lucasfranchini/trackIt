import styled from "styled-components";
import Body from "../../styles/PageBody";

export default function History(){
    return (
        <Body>
            <Title>Histórico</Title>
            <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
        </Body>
    );

}

const Title = styled.div`
    width:100%;
    padding-top:22px;
    font-size: 23px;
    line-height: 29px;
    color:#126BA5;
    margin-bottom:28px;
`