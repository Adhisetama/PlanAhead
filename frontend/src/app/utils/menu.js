import { list, check, todo, home } from "./Icons";

const menu = [
  {
    id: 1,
    title: "All Agenda",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Important!",
    icon: list,
    link: "/important",
  },
  {
    id: 3,
    title: "Repeatable",
    icon: check,
    link: "/repeatable",
  },
  {
    id: 4,
    title: "Completed!",
    icon: todo,
    link: "/completed",
  },
];

export default menu;