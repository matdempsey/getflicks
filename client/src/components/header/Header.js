import Logo from "../logo/Logo";
import SideMenu from "../side-menu/SideMenu";
import Search from "../search/Search";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div id="header-container">
      <div id="header-left">
        <SideMenu />
        <Logo />
      </div>

      <div id="header-centre">
        <Search />
      </div>

      <div id="header-right">
        <ul id="nav">
          <li className="nav-list-item small-text">
            <Link to="/watchlist">Watchlist (0)</Link>
          </li>
          <li className="nav-list-item small-text">
            <Link to="/sign-in">Sign-in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
