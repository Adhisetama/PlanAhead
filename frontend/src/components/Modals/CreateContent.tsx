"use client"
import React, {useState} from "react";

import axios from "axios";
import toast from "react-hot-toast";
import { useGlobalState } from "../../app/context/globalProvider";

import Button from "../Button/Button";
import styled from 'styled-components';
import { plus } from "../../app/utils/Icons";


function CreateContent() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [date, setDate] = useState("");
    const [date2, setDate2] = useState("");
    const [date3, setDate3] = useState("");

    const [repeatable, setRepeatable] = useState(false);
    const [important, setImportant] = useState(false);

    const { theme, allTasks, closeModal } = useGlobalState();

    const handleChange = (name: string) => (e: any) => {
      switch (name) {
        case "title":
          setTitle(e.target.value);
          break;
        case "description":
          setDescription(e.target.value);
          break;
        case "date":
          setDate(e.target.value);
          break;
        case "date2":
          setDate2(e.target.value);
          break;
        case "date3":
          setDate3(e.target.value);
          break;
        case "repeatable":
          setRepeatable(e.target.checked);
          break;
        case "important":
          setImportant(e.target.checked);
          break;
        default:
          break;
      }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const task = {
            title,
            description,
            date,
            date2,
            date3,
            repeatable,
            important,
        };

        try {
            const res = await axios.post("/api/tasks", task);

            if(res.data.error){
                toast.error(res.data.error);
            }

            if(!res.data.error){
                toast.success("Agenda created!!!");
                allTasks();
                closeModal();
            }

        }catch(error){
            toast.error("Something went wrong.");
            console.log(error);
        }
    }

    return ( 
    <CreateContentStyled onSubmit={handleSubmit} theme={theme}>
        <h1>Create an Agenda</h1>
        <div className="input-control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={title} name="title" onChange={handleChange("title")} placeholder="Title"/>
        </div>

        <div className="input-control">
            <label htmlFor="description">Description</label>
            <textarea id="description" value={description} name="description" onChange={handleChange("description")} placeholder="Description"></textarea>
        </div>

        <div className="input-control">
            <label htmlFor="date">Date</label>
            <input type="datetime-local" id="date" value={date} name="date" onChange={handleChange("date")}/>
        </div>

        <div className="input-control">
            <label htmlFor="date2">Backup Date 1</label>
            <input type="datetime-local" id="date2" value={date2} name="date2" onChange={handleChange("date2")}/>
        </div>

        <div className="input-control">
            <label htmlFor="date">Backup Date2</label>
            <input type="datetime-local" id="date3" value={date3} name="date3" onChange={handleChange("date3")}/>
        </div>

        <div className="input-control toggler">
            <label htmlFor="repeatable">Toggle Repeatable</label>
            <input type="checkbox" id="repeatable" value={repeatable.toString()} name="repeatable" onChange={handleChange("repeatable")}/>
        </div>

        {/* <div className="input-control toggler">
            <label htmlFor="important">Toggle Important</label>
            <input type="checkbox" id="important" value={important.toString()} name="important" onChange={handleChange("important")}/>
        </div> */}

        <div className="submit-btn flex justify-end">
            <Button 
            type="submit"
            name="Create Agenda"
            icon={plus}
            padding={"1rem 1rem"}
            borderRad={"0.8rem"}
            fw={"800"}
            fs={"1rem"}
            background={theme.colorOrange}
            />
        </div>
    </CreateContentStyled>
    );
}

const CreateContentStyled = styled.form`
> h1 {
    font-size: clamp(1.2rem, 5vw, 1.6rem);
    font-weight: 600;
  }

  
  border-radius: ${(props) => props.theme.borderRadiusMd2};
  color: ${(props) => props.theme.colorGrey1};

  .input-control {
    position: relative;
    margin: 0.5rem 0;
    font-weight: 500;

    label {
        margin-bottom: 0.5rem;
        display: inline-block;
        font-size: clamp(0.9rem, 5vw, 1.2rem);
  
        span {
          color: ${(props) => props.theme.colorGrey3};
        }
      }

    input,
    textarea {
      width: 100%;
      padding: 0.5rem;

      resize: none;
      background-color: ${(props) => props.theme.colorGreyDark};
      color: ${(props) => props.theme.colorGrey2};
      border-radius: 0.5rem;
    }

  }

  .toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    label {
      flex: 1;
    }

    input {
      width: initial;
    }
  }

`;

export default CreateContent;