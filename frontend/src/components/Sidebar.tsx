"use client"
import React from "react";
import styled from "styled-components";
import Link from 'next/link';
import { useGlobalState } from "../app/context/globalProvider";

import Image from "next/image";

import menu from "../app/utils/menu";
import {usePathname, useRouter} from "next/navigation";

function Sidebar() {
  const { theme } = useGlobalState();
  // console.log(theme);

  const router = useRouter();
  const pathname = usePathname();
  

  const handleClick = (link: string) => {
    router.push(link);
  }

  return (
    <SidebarStyled theme={theme}>
      <h1>
        <p>nama orang</p>
      </h1>

    <ul className="nav-items">
        {menu.map((item) => {

          const link = item.link;

            return <li className={`nav-item ${pathname === link ? "active": ""}`} 
            onClick={() => {
              handleClick(link);
            }}>
                {item.icon}
                <Link href= {link}>
                    {item.title}
                </Link>
            </li>
        })}
    </ul>
        <div></div>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .nav-items{
    position: relative;
    padding: 1rem 1rem 1rem 2rem;
    margin: 1rem 0;
    gap: 1rem;

`;
export default Sidebar;