import React from "react";
import classes from "./Header.module.css";
import CV from "../../assets/cv.pdf";

const CallToActions = () => {
  return (
    <div className={classes.cta}>
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CallToActions;
