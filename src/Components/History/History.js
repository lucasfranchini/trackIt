import Calendar from "react-calendar";
import styled from "styled-components";
import Body from "../../styles/PageBody";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import Day from "./Day";
import Habit from "../Aux/Habit";
import dayjs from "dayjs";

export default function History() {
  const { user } = useContext(UserContext);
  const [habits, setHabits] = useState([]);
  const [shownHabits, setShownHabits] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/habits/history/daily`,
      { headers: { Authorization: `Bearer ${user.token}` } }
    );
    promise.then((answer) => setHabits(answer.data));
    promise.catch((e) => alert("houve um erro ao pegar seus habitos"));
  }, [user.token, setHabits]);

  function showHabit(value) {
    let newShownHabits = [];
    habits.forEach((d) => {
      if (d.day === dayjs(value).format("DD/MM/YYYY")) {
        newShownHabits = d.habits;
      }
    });
    setShownHabits(newShownHabits);
  }

  return (
    <Body>
      <Title>Histórico</Title>
      <Calendario>
        <Calendar
          onClickDay={(value) => showHabit(value)}
          className="calendar"
          calendarType="US"
          locale="pt-br"
          formatDay={(locale, date) => <Day date={date} habits={habits} />}
        />
      </Calendario>
      {shownHabits.map((habit) => (
        <Habit
          key={habit.historyId}
          habit={habit}
          deleteHabit={null}
          done={habit.done}
          days={[habit.weekDay]}
        />
      ))}
    </Body>
  );
}

const Title = styled.div`
  width: 100%;
  padding-top: 22px;
  font-size: 23px;
  line-height: 29px;
  color: #126ba5;
  margin-bottom: 28px;
`;
const Calendario = styled.div`
  margin-bottom: 10px;
  button:enabled:focus:hover {
    background-color: white;
    color: black;
  }
  button:enabled:not(:focus) {
    background-color: white;
    color: black;
  }
`;
