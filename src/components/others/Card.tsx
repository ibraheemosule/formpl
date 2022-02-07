import React from "react";
import s from "../../assets/scss/others/card.module.scss";

const Card: React.FC = () => {
  return (
    <div className={s.card}>
      <h2 className={s.card__title}>Alumni Membership Form Template</h2>
      <p className={s.card__body}>
        Engage your alumni network better with this alumni registration form
        template. Embed this in your website ...
      </p>
      <div className={s.card__footer}>
        <button>use template</button>
      </div>
    </div>
  );
};

export default Card;
