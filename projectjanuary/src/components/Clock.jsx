import { useState } from "react";
import styles from "./Clock.module.css";
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Pinterest from "../images/icon-pinterest.svg";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const updatedClock = () => {
    setCurrentTime(new Date());
  };

  setInterval(updatedClock, 1000);

  const hours = ("0" + currentTime.getHours()).slice(-2);
  const minutes = ("0" + currentTime.getMinutes()).slice(-2);
  const seconds = ("0" + currentTime.getSeconds()).slice(-2);

  return (
    <>
      <div className={styles.furtherBg}></div>
      <div className={styles.centerContainer}>
        <h1>Coming Soon.</h1>
        <div className={styles.mainClock}>
          <div className={styles.flipCardTimer}>
            <div className={styles.card}></div>
            <div className={styles.leftDot}></div>
            <div className={styles.rightDot}></div>
            <div className={styles.flipCardTimerText}>{hours}</div>
          </div>
          <div className={styles.flipCardTimer}>
            <div className={styles.card}></div>
            <div className={styles.leftDot}></div>
            <div className={styles.rightDot}></div>
            <div className={styles.flipCardTimerText}>{minutes}</div>
          </div>
          <div className={styles.flipCardTimer}>
            <div className={styles.card}></div>
            <div className={styles.leftDot}></div>
            <div className={styles.rightDot}></div>
            <div className={styles.flipCardTimerText}>{seconds}</div>
          </div>
        </div>
        <div className={styles.social}>
          <img src={Facebook} alt="Facebook"></img>
          <img src={Instagram} alt="Instagram"></img>
          <img src={Pinterest} alt="Pinterest"></img>
        </div>
      </div>
    </>
  );
};

export default Clock;
