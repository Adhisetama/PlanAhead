"use client"

import React, { useState, useEffect } from "react";
import { edit, trash } from "../app/utils/Icons";
import { useGlobalState } from "../app/context/globalProvider";
import styled from "styled-components";
import formatDate from "../app/utils/formatDate/formatDate"
import { TaskData } from "./Tasks"

interface TaskItemProps extends TaskData {}

const TaskItem: React.FC<TaskItemProps> = ({
  title,
  description,
  date,
  date2,
  date3,
  isCompleted,
  isRepeatable,
  id,
}) => {
  const { theme, deleteTask, toggleTaskCompletion } = useGlobalState();
  const [completed, setCompleted] = useState(isCompleted);
  
  useEffect(() => {
    setCompleted(isCompleted);
  }, [isCompleted]);

  const handleToggle = async () => {
    try {
      const newCompleted = !completed;
      await toggleTaskCompletion(id, newCompleted); // Toggle in the backend
      setCompleted(newCompleted); // Update state locally
    } catch (error) {
      console.error("Error toggling task completion:", error);
    }
  };
  return (
    <TaskItemStyled theme={theme}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>

      <div className="task-footer">
        <p className="date">{formatDate(date)}</p>
        <button className="delete" onClick={() => deleteTask(id)}>
          {trash}
        </button>
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleToggle}
          />
          <span className="checkmark"></span>
        </label>
      </div>
    </TaskItemStyled>
  );
};

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

  .title {
    font-size: 28px;
  }

  .description {
    color: ${(props) => props.theme.colorTextSecondary};
    font-size: 20px;
  }

  .task-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .date {
    background: ${(props) => props.theme.colorOrange} !important;
    border-radius: 15px;
    font-weight: 500;
    padding: 0.5rem 1rem;
  }

  .delete {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 5px;
  }

  .checkbox-container input:checked ~ .checkmark {
    background-color: ${(props) => props.theme.colorPrimaryGreen};
  }
`;

export default TaskItem;