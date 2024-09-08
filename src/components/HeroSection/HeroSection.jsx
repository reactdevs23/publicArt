import React, { useState } from "react";
import classes from "./HeroSection.module.css";

import { FaPersonWalking } from "react-icons/fa6";
import { FiArrowRightCircle } from "react-icons/fi";
import { img1, img2, img3, img4, img5, img6, img7 } from "../../images";

const HeroSection = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };
  return (
    <section className={classes.wrapper}>
      <img src={img1} alt="#" className={classes.img1} />
      <img src={img2} alt="#" className={classes.img2} />
      <img src={img3} alt="#" className={classes.img3} />
      <img src={img4} alt="#" className={classes.img4} />
      <img src={img5} alt="#" className={classes.img5} />
      <img src={img6} alt="#" className={classes.img6} />
      <img src={img7} alt="#" className={classes.img7} />
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
