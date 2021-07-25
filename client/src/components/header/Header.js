import Logo from "../logo/Logo";
import SideMenu from "../side-menu/SideMenu";
import Search from "../search/Search";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div id="header">
      <SideMenu />
      <Logo />

      <Search />

      <div id="nav-container">
        <ul id="nav">
          <li className="nav-list-item small-text">
            <Link to="/watchlist">Watchlist</Link>
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
