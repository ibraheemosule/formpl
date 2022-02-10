import SearchBox from "../others/SearchBox";
import FilterBox from "../others/FilterBox";
import s from "../../assets/scss/sections/top-header.module.scss";
import infoIcon from "../../assets/img/info-icon.svg";
import { useEffect, useState } from "react";
import * as dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { filterByCategory } from "../../store/reducers/dataReducer";

const TopHeader: React.FC = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useAppDispatch();
  const fetchedData = useAppSelector(state => state.data.mutableData);
  const category = ["All", "Education", "E-commerce", "Health"];
  const order = ["ascending", "descending"];

  useEffect(() => {
    dispatch(filterByCategory(filter));
  }, [filter]);

  return (
    <div className={s.top_header}>
      <SearchBox filter={filter} />
      <div className={s.filter_section}>
        <span className={s.sort}>Sort By:</span>
        <FilterBox
          title={"category"}
          sortItems={category}
          filter={filter}
          setFilter={setFilter}
        />
        <FilterBox title={"order"} sortItems={order} filter={filter} />
        <FilterBox title={"date"} sortItems={order} filter={filter} />
      </div>

      <div className={s.top_header__info}>
        <div>
          <img src={infoIcon} />
        </div>
        <span>
          Tada! get started with a free template. Can't find what you are
          looking for? Search from the 1000+ templates
        </span>
      </div>
      <h3>
        <span>{filter === "All" ? "All Templates" : filter}</span>
        <span>{fetchedData.length} templates</span>
      </h3>
    </div>
  );
};

export default TopHeader;
