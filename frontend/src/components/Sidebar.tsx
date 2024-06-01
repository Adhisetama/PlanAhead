"use client"
import React from "react";
import styled from "styled-components";
import Link from 'next/link';
import menu from "../app/utils/menu";
import { useGlobalState } from "../app/context/globalProvider";
import {usePathname, useRouter} from "next/navigation";

function Sidebar() {
  const { theme } = useGlobalState();

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme}>
      <h1 className="planAhead-title">
        <p>PlanAhead!</p>
      </h1>

      <ul className="nav-items">
        {menu.map((item) => {
          const link = item.link;

          return (
            <li
              key={item.id}
              className={`nav-item ${pathname === link ? "active" : ""}`}
              onClick={() => {
                handleClick(link);
              }}
            >
              {item.icon}
              <Link href={link}>{item.title}</Link>
            </li>
          );
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

  font-weight: 500;

  align-items: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .planAhead-title{
    margin-top: 30px;
    font-weight: 1000;
    font-size: 24px;
    
  }

  .nav-item{
    position: relative;
    padding: 0.6rem 1rem 1rem 1rem;
    margin: 0.3rem 0;
    display: grid;
    grid-template-columns: 25px 1fr;
    cursor: pointer;

    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: ${(props) => props.theme.activeNavLinkHover};
      z-index: 1;
      transition: all 0.3s ease-in-out;
    }

    &::before {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background-color: ${(props) => props.theme.colorGreenDark};

      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }

    a {
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      z-index: 2;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }

    i {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colorOrange};
    }

    .active {
      background-color: ${(props) => props.theme.colorYellow};
      i,
      a {
        color: ${(props) => props.theme.colorIcons2};
      }
    }

  }

`;
export default Sidebar;