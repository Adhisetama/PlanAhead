"use client"

import React from "react";
import { edit, trash } from "../app/utils/Icons";
import { useGlobalState } from "../app/context/globalProvider";
import styled from "styled-components";
import formatDate from "../app/utils/formatDate"
import theme from "../app/context/theme"

interface Props {
    title: string;
    description: string;
    date: string;
    isCompleted: boolean;
    id: string;
}

function TaskItem({ title, description, date, isCompleted, id }: Props) {
    const { theme, deleteTask} = useGlobalState();
  return (
    <TaskItemStyled theme={theme}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p className='date'>
        {formatDate(date)}
      </p>
      <div className="task-footer">
      {isCompleted ? (
      <button className='completed'>Completed</button>) : (<button className="incomplete">"Not Complete!"</button>)}
      <button className='delete' onClick={() => {
        deleteTask(id);
      }}>{trash}</button>
      </div>
    </TaskItemStyled>
  );
}

const TaskItemStyled = styled.div`
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.borderColor2};
  box-shadow: ${(props) => props.theme.shadow7};
  border: 2px solid ${(props) => props.theme.borderColor2};

  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .date{
    margin-top: auto;
  }

  > h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .task-footer {
    display: flex;
    gap: 10px;

    button {
      border: none;
      outline: none;
      cursor: pointer;

      i {
        font-size: 1.4rem;
        color: ${(props) => props.theme.colorGrey2};
      }
    }

    .edit {
      margin-left: auto;
    }

    .completed,
    .incomplete {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: ${(props) => props.theme.colorDanger};
      border-radius: 30px;
    }

    .completed {
      background: ${(props) => props.theme.colorOrange} !important;
    }
  
`;

export default TaskItem