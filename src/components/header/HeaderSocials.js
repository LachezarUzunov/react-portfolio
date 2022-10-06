import React from "react";
import classes from "./Header.module.css";
import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className={classes.header__socials}>
      <a href="https://linedin.com" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://dribble.com" target="_blank">
        <FaDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
