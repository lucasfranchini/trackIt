import dayjs from "dayjs";
import Body from "../styles/Body";
import Title from "../styles/Title";

export default function Today(){
    //usando dia em portugues e no formato pedido
    require('dayjs/locale/pt-br');
    dayjs.extend(require('dayjs/plugin/updateLocale'));
    dayjs.updateLocale('pt-br', {weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]}); 
    const day = dayjs().locale('pt-br').format('dddd, DD/MM');
    return (
        <Body>
            <Title>
                <span>{day}</span>
            </Title>
        </Body>
    )
}
