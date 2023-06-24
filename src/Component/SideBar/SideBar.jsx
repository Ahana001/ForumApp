import "./SideBar.css";

import { useContext } from "react";
import { AvtarWithBorder } from "../AvtarWithBorder/AvtarWithBorder";
import { menubarList } from "./constant";
import { DataContext } from "../../Context/DataContext";
import { useLocation } from "react-router-dom";

export function SideBar() {
  const { state } = useContext(DataContext);
  const location = useLocation();

  return (
    <div className="LeftMenubarWrapper">
      <ul className="MenuBarList">
        {menubarList.map(({ label, selectedIcon, icon, path }) => {
          return (
            <li key={label}>
              <div className="MenuBarListItem">
                <span className="MenuBarIcon">
                  {location.pathname === path ? selectedIcon : icon}
                </span>
                <span className="MenuBarText">{label}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="UserProfileContainer">
        <div className="UserInfoContainer">
          <div>
            <AvtarWithBorder url={state.user.picUrl} size={4} />
            <div className="UserInfo">
              <span>{state.user.name}</span>
              <span>@{state.user.username}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
