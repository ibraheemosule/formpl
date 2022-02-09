import s from "../../assets/scss/others/card.module.scss";
import { ICardProps } from "../../ts-types";

const Card: React.FC<ICardProps> = ({ template }) => {
  return (
    <div className={s.card}>
      <h2 className={s.card__title}>{template.name}</h2>
      <p className={s.card__body}>{template.description}</p>
      {template.created}
      <div className={s.card__footer}>
        <button>
          <a href={template.link}>use template</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
