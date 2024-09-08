import React, { useState } from "react";
import classes from "./HeroSection.module.css";
import banner from "../../images/banner.png";

import { FaPersonWalking } from "react-icons/fa6";
import { FiArrowRightCircle } from "react-icons/fi";

const HeroSection = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };
  return (
    <section className={classes.wrapper}>
      <img src={banner} alt="#" className={classes.img} />
      <div className={classes.infoContainer}>
        {" "}
        <h1 className={classes.heading}>Public Art Walk</h1>
        <div
          onClick={toggleSwitch}
          className={[classes.switch, isToggled && classes.toggled].join(" ")}
        >
          <FiArrowRightCircle className={classes.arrow} />
          <FaPersonWalking className={classes.walk} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
