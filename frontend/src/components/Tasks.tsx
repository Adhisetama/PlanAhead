"use client"
import React from 'react'
import styled from 'styled-components';
import CreateContent from './Modals/CreateContent';
import TaskItem from "../components/TaskItem";
import Modal from "./Modals/Modal";

import { useGlobalState } from "../app/context/globalProvider";
import { plus } from "../app/utils/Icons";
import { Priority } from '@prisma/client';

export interface TaskData {
  title: string;
  description: string;
  date: string;
  date2: string;
  date3: string;
  isCompleted: boolean;
  isRepeatable: boolean;
  priority: Priority;
  id: string;
}


interface Props {
    title: string;
    tasks: TaskData[];
}

function Tasks({ title, tasks }: Props) {
    const { theme, openModal, modal } = useGlobalState();

  return (
    <TaskStyled theme={theme}>
      {modal && <Modal content={<CreateContent/>} />}

      <h1>{title}</h1>
      <div className="tasks grid">
      {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            date2={task.date2}
            date3={task.date3}
            isCompleted={task.isCompleted}
            isRepeatable={task.isRepeatable}
            priority={task.priority}
            id={task.id}
          />
        ))}
        <button className="create-task" onClick={openModal}>
          {plus}
          Add New Agenda
        </button>
      </div>
    </TaskStyled>
  );
};


const TaskStyled = styled.div`
    padding: 2rem;
    width: 100%;
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;
    height: 100%;


    overflow-y: auto;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }

    >h1{
      font-size: clamp(1.5rem, 2vw, 2rem);
      font-weight: 800;
      position: relative;
    }
    
    .create-task {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
  
      height: 16rem;
      width: 350px;

      margin: 1rem;

      color: ${(props) => props.theme.colorGrey2};
      font-weight: 600;
      cursor: pointer;
      border-radius: 1rem;
      border: 3px dashed ${(props) => props.theme.colorGrey5};
      transition: all 0.3s ease;

      &:hover {
        background-color: ${(props) => props.theme.colorGrey5};
        color: ${(props) => props.theme.colorGrey0};
      }

      i {
        font-size: 1.5rem;
        margin-right: 0.2rem;
      }

    }
`;


export default Tasks
