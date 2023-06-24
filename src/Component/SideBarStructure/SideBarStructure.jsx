import "./SideBarStructure.css";

import { SideBar } from "../SideBar/SideBar";

export function SideBarStructure({ children }) {
  return (
    <div className="PageStructureContainer">
      <div className="LeftMenubarContainer">
        <SideBar />
      </div>
      <div className="PostListAndSortByContainer">{children}</div>
    </div>
  );
}
