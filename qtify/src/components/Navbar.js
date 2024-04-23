import React from "react";
import logoImage from "../assets/logo.png";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import FeedbackButton from "./FeedbackButton";
import "../modules/Navbar.modules.css";

const Navbar = () => {
  return (
    <div className="navbar-toolbar">
      <Logo src={logoImage} alt="QTify Logo" />
      <SearchBar />
      <FeedbackButton text="Give Feedback" />
    </div>
  );
};

export default Navbar;
