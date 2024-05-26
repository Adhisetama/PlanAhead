"use client"

import React from "react";
import { edit, trash } from "../app/utils/Icons";
import { useGlobalState } from "../app/context/globalProvider";
import styled from "styled-components";
import formatDate from "../app/utils/formatDate/formatDate"
import theme from "../app/context/theme"

interface Props {
    title: string;
    description: string;
    date: string;
    date2: string;
    date3: string
    isRepeatable: boolean;
    id: string;
}

function TaskItem({ title, description, date, date2, date3, isRepeatable, id }: Props) {
    const { theme, deleteTask} = useGlobalState();

  return (
    <TaskItemStyled theme={theme}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>

      {isRepeatable ? (
        <p className="repeatable">Repeatable</p>
      ) : (
        <p className="nonRepeatable">Non Repeatable</p>
      )}

      <div className="task-footer">
        <p className="date">{formatDate(date)}</p>

        <button
          className="delete"
          onClick={() => {
            deleteTask(id);
          }}
        >
          {trash}
        </button>
      </div>
    </TaskItemStyled>
  );
}

const TaskItemStyled = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;
  padding: 1.5rem;

  flex-direction: column;
  justify-content: space-between;

  border-radius: 1rem;
  background-color: ${(props) => props.theme.borderColor2};
  box-shadow: ${(props) => props.theme.shadow7};
  border: 2px solid ${(props) => props.theme.borderColor2};

  height: 16rem;
  width: 350px;
  gap: 0.8rem;

  .title{
    font-size: 28px;
  }

  .description{
    color: ${(props) => props.theme.colorTextSecondary};
    font-size: 20px;
  }

  .repeatable,
  .nonRepeatable {
    color: ${(props) => props.theme.colorGrey3};
    border-radius: 30px;
    margin-top: 2rem;

    font-size: 16px;
    text-decoration: underline;
  }

  .repeatable {
    color: ${(props) => props.theme.colorPrimaryGreen} !important;
  }

  .delete{
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }
  
  > h1 {
    font-size: 1.5rem;
    font-weight: 1000;
  }

  button {
    border: none;
    outline: none;
    i {
      font-size: 1.8rem;
      color: ${(props) => props.theme.colorDanger};
    }
  }

  .task-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  .date{
    background: ${(props) => props.theme.colorOrange} !important;
    border-radius: 15px;
    font-weight: 500;
    padding: 0.5rem 1rem;
  }
  
`;

export default TaskItem