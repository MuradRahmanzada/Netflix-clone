import React, { useState } from "react";
import "./Navbar.scss";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/Notifications";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import Avatar from "@material-ui/core/Avatar/Avatar";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span className="navbar_link">Home</span>
          <span className="navbar_link">Series</span>
          <span className="navbar_link">Movies</span>
          <span className="navbar_link">New and Popular</span>
          <span className="navbar_link">My List</span>
        </div>

        <div className="right">
          <SearchIcon />
          <span>KID</span>
          <NotificationIcon className="icon" />
          <Avatar />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span className="signupSpan">
                <Link to="/signup">Logout</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
