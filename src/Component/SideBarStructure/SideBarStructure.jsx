import "./SideBarStructure.css";

import { SideBar } from "../SideBar/SideBar";
import { NavBar } from "../Navbar/NavBar";

export function SideBarStructure({ children }) {
  return (
    <>
      <NavBar />
      <div className="PageStructureContainer">
        <div className="LeftMenubarContainer">
          <SideBar />
        </div>
        <div className="PostListAndSortByContainer">{children}</div>
      </div>
    </>
  );
}
