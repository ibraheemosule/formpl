import { useEffect } from "react";
import s from "../../assets/scss/sections/cards-wrapper.module.scss";
import Card from "../others/Card";
import { useAppSelector } from "../../store/hooks";

const CardsWrapper: React.FC = () => {
  const mutableData = useAppSelector(state => state.data.mutableData);
  const loading = useAppSelector(state => state.data.loading);

  return (
    <div className={s.cards_wrapper}>
      <div className={s.cards}>
        {mutableData.map(item => (
          <Card key={item.name} template={item} />
        ))}
      </div>
    </div>
  );
};

export default CardsWrapper;
