import "./NavBar.css";

import { useLocation } from "react-router-dom";

export function NavBar() {
  const location = useLocation();
  if (location.pathname === "/404") {
    return null;
  }
  return (
    <div className="NavBarContainer">
      <h2>MyForum </h2>
    </div>
  );
}
