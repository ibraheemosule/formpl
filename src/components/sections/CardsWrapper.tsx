import React from "react";
import s from "../../assets/scss/sections/cards-wrapper.module.scss";
import Card from "../others/Card";

const CardsWrapper: React.FC = () => {
  return (
    <div className={s.cards_wrapper}>
      <h3>
        <span>all tdemplates</span>
        <span>2000 templates</span>
      </h3>

      <div className={s.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardsWrapper;
