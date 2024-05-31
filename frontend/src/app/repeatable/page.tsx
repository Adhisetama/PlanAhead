"use client"
import React from 'react'
import Tasks from "../../components/Tasks";
import { useGlobalState } from "../context/globalProvider";
import styled from 'styled-components';

export default function RepeatableTasks() {
  const {tasks} = useGlobalState();
  const repeatableTasks = tasks.filter(task => task.isRepeatable);

  return <Tasks title="Repeatable Tasks" tasks={repeatableTasks} />;
}