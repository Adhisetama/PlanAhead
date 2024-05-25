"use client"
import React from 'react'
import { useGlobalState } from "../app/context/globalProvider";
import styled from 'styled-components';
import CreateContent from './Modals/CreateContent';
import TaskItem from "../components/TaskItem";

import { plus } from "../app/utils/Icons";

import theme from "../app/context/theme"

interface Props {
    title: string;
    tasks: any[];
}

function Tasks({ title, tasks }: Props) {
    const { theme } = useGlobalState();

    // const tasks = [
    //     { title: 'Task 1', description: 'This is the first task.' },
    //     { title: 'Task 2', description: 'This is the second task.' },
    //     { title: 'Task 3', description: 'This is the third task.' },
    //     // Add more tasks as needed
    // ];

  return (
    <TaskStyled theme={theme}>
      {/* <CreateContent/> */}
      <h1>{title}</h1>
      <div className="tasks grid">
      {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.isCompleted}
            id={task.id}
          />
        ))}
        <button className="create-task">
          {plus}
          Add New Task
        </button>
      </div>
    </TaskStyled>

    //     <TaskStyled theme={theme}>
    //     {tasks.map((task, index) => (
    //         <TaskCard key={index} theme={theme}>
    //             <h3>{task.title}</h3>
    //             <p>{task.description}</p>
    //         </TaskCard>
    //     ))}
    // </TaskStyled>
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

    
    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 3rem;
      height: 0.2rem;
      background-color: ${(props) => props.theme.colorPrimaryGreen};
      border-radius: 0.5rem;
    }
    
    .create-task {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
  
      height: 16rem;
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

// const TaskCard = styled.div`
//     background-color: ${(props) => props.theme.cardBg};
//     border: 1px solid ${(props) => props.theme.cardBorderColor};
//     border-radius: 0.5rem;
//     padding: 1rem;
//     margin-bottom: 1rem;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

//     h3 {
//         margin: 0;
//         font-size: 1.5rem;
//         color: ${(props) => props.theme.textColor};
//     }

//     p {
//         margin: 0.5rem 0 0;
//         color: ${(props) => props.theme.textColorSecondary};
//     }
// `;

export default Tasks