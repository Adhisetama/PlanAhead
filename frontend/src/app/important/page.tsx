"use client"
import React from 'react'
import Tasks from "../../components/Tasks";
import { useGlobalState } from "../context/globalProvider";

export default function important() {
  const {tasks} = useGlobalState();
  // const importantTask = tasks.filter(priority => priority.HIGH);
  const importantTask = tasks.filter(task => task.priority === "HIGH");

  return <Tasks title="High Priority" tasks={importantTask} />;
}