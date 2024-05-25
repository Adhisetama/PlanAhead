"use client"

import React from "react";
import { edit, trash } from "../app/utils/Icons";
import { useGlobalState } from "../app/context/globalProvider";
import styled from "styled-components";
import menu from "../app/utils/menu";

interface Props {
    title: string;
    description: string;
    date: string;
    isCompleted: boolean;
    id: string;
}

function TaskItem({ title, description, date, isCompleted, id }: Props) {
    const { theme, deleteTask, updateTask } = useGlobalState();
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p className='date'>{date}</p>
      <div className="task-footer">
      {isCompleted ? (
      <button className='completed'>Completed</button>) : (<button>"Not Complete!</button>)}
      <button className='edit'>
        {edit}
      </button>
      <button className='delete'>{trash}</button>
      </div>
    </div>
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
  
`;

export default TaskItem