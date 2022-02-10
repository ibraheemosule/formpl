import { useEffect } from "react";
import s from "../../assets/scss/sections/cards-wrapper.module.scss";
import Card from "../others/Card";
import { useAppSelector } from "../../store/hooks";
import loader from "../../assets/img/loader.gif";

const CardsWrapper: React.FC = () => {
  const mutableData = useAppSelector(state => state.data.paginated);
  const loading = useAppSelector(state => state.data.loading);
  const error = useAppSelector(state => state.data.error);

  return (
    <div className={s.cards_wrapper}>
      <div className={s.cards}>
        {mutableData.length ? (
          mutableData.map(item => <Card key={item.name} template={item} />)
        ) : (
          <div className={s.loader}>
            {loading && !error && <img src={loader} alt="loader" />}
            {!loading && error && <h2>{error}</h2>}
            {!loading && !error && !mutableData.length && (
              <h2>No Templates Found</h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardsWrapper;
