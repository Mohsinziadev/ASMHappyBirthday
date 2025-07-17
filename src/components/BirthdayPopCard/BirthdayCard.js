import React from "react";
import "./BirthdayCard.css";

const BirthdayCard = () => {
  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy p-1 rounded-sm m-2">
          HAPPY BIRTHDAY my cute kaka!
        </h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY Love!</h3>
        <p>Dear kaka,</p>
        <p className="pt-0 -mt-4">
          Happy Birthday, my kaka! I hope your day is overflowing with laughter,
          love, and everything your heart desires. May all your wishes come true
          today and always — because someone as beautiful as you deserves
          nothing less.
        </p>
      </div>
    </div>
  );
};

export default BirthdayCard;
