import React from "react";
import logoImage from "../assets/logo.png";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import FeedbackButton from "./FeedbackButton";
import styles from "../modules/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarToolbar}>
      <Logo src={logoImage} alt="QTify Logo" />
      <SearchBar />
      <FeedbackButton text="Give Feedback" />
    </div>
  );
};

export default Navbar;
