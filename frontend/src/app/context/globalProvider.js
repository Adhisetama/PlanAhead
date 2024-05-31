"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import themes from "./theme"
import axios from "axios";
import toast from "react-hot-toast";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState(0);
    const theme = themes[selectedTheme];
    const [isLoading, setIsLoading] = useState(false);

    const [tasks, setTasks] = useState([]);

    const [modal, setModal] = useState(false);

    const openModal = (key) => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    const allTasks = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get("/api/tasks");
            // console.log(res.data)
            setTasks(res.data);
            setIsLoading(false);
        }catch (error) {
            console.log(error);
        }
    };

    const deleteTask = async (id) => {
        try {
            const res = await axios.delete(`/api/tasks/${id}`);
            toast.success("Task Deleted!");

            allTasks();
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong");
        }
    }

    const toggleTaskCompletion = async (id, isCompleted) => {
        try {
          const res = await axios.put(`/api/tasks/${id}`, { isCompleted });
          toast.success("Task Updated!");
          allTasks();
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      };
    React.useEffect(() => {
        allTasks();
    }, []);


    return(
        <GlobalContext.Provider 
        value={{
            theme,
            tasks,
            openModal,
            closeModal,
            modal,
            allTasks,
            deleteTask,
            toggleTaskCompletion,
            isLoading,
        }}>
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
