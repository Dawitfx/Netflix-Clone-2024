// import React from 'react'
import "./Header.css";
import NetflixLogo from "../../assets/images/Netflix_Logo_RGB.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="header_container">
        <div className="header_left">
          <li>
            <img src={NetflixLogo} alt="Netflix Logo" width="100" />
          </li>
          <li>Home</li>
          <li>Tvshows</li>
          <li>Moves</li>
          <li>Latest</li>
          <li>mylist</li>
          <li>Browse by language</li>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownCircleIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
