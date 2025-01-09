import React from 'react';
import Countdown from 'react-countdown';
import style from '@/styles/LandingPage.module.css'; // Separate CSS file for styling

const CountdownSection = () => {
  // Renderer function to customize the countdown
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className={style.countdownContainer}>
        <div className={style.countdownCircle}>
          <span className={style.countdownValue}>{days}</span>
          <span className={style.countdownLabel}>DAYS</span>
        </div>
        <div className={style.countdownCircle}>
          <span className={style.countdownValue}>{hours}</span>
          <span className={style.countdownLabel}>HOURS</span>
        </div>
        <div className={style.countdownCircle}>
          <span className={style.countdownValue}>{minutes}</span>
          <span className={style.countdownLabel}>MINUTES</span>
        </div>
        <div className={style.countdownCircle}>
          <span className={style.countdownValue}>{seconds}</span>
          <span className={style.countdownLabel}>SECONDS</span>
        </div>
      </div>
    );
  };

  return (
    <div className={style.countdownSection}>
      <h2>January 26, 2025</h2>
      <Countdown date={new Date('2025-01-26T00:00:00')} renderer={renderer} />
    </div>
  );
};

export default CountdownSection;
