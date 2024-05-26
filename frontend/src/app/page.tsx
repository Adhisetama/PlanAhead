"use client"
import { Main } from "next/document";
import Image from "next/image";

import React from "react";
import Tasks from "../components/Tasks";
import { useGlobalState } from "./context/globalProvider";
import styled from 'styled-components';

// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import Hero from "@/components/hero";

export default function Home() {
const {tasks} = useGlobalState()

    return <Tasks title="Your Agenda" tasks={tasks}/>
  }

