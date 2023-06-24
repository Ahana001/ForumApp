import {
  AiFillHome,
  AiOutlineHome,
  AiFillCompass,
  AiOutlineCompass,
} from "react-icons/ai";
import { BsBookmarksFill, BsBookmark } from "react-icons/bs";
import { RiUser3Line, RiUser3Fill } from "react-icons/ri";

export const menubarList = [
  {
    path: "/",
    label: "home",
    selectedIcon: <AiFillHome />,
    icon: <AiOutlineHome />,
  },
  {
    path: "/explore",
    label: "explore",
    selectedIcon: <AiFillCompass />,
    icon: <AiOutlineCompass />,
  },
  {
    path: "/bookmarks",
    label: "bookmark",
    selectedIcon: <BsBookmarksFill />,
    icon: <BsBookmark />,
  },
  {
    path: "/profile",
    label: "Profile",
    selectedIcon: <RiUser3Fill />,
    icon: <RiUser3Line />,
  },
];
