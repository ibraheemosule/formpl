import { useEffect, useRef, useState } from "react";
import s from "../../assets/scss/others/filter-box.module.scss";
import arrowDownIcon from "../../assets/img/chevron-down-outline.svg";
import { IFilterBoxProps } from "../../ts-types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  sortDateDown,
  sortNameDown,
  sortNameUp,
  sortDateUp,
} from "../../store/reducers/dataReducer";

const FilterBox: React.FC<IFilterBoxProps> = props => {
  const { title, sortItems, filter, setFilter } = props;
  const dispatch = useAppDispatch();
  const [sort, setSort] = useState<String>("");
  const [dropdownToggle, setDropdownToggle] = useState<boolean>(false);
  const dropdown = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (title === "order")
      switch (sort) {
        case "ascending":
          dispatch(sortNameUp());
          break;
        case "descending":
          dispatch(sortNameDown());
          break;
        default:
          return;
      }

    if (title === "date")
      switch (sort) {
        case "ascending":
          dispatch(sortDateUp());
          break;
        case "descending":
          dispatch(sortDateDown());
          break;
        default:
          return;
      }

    if (title === "category" && setFilter)
      switch (sort) {
        case "E-commerce":
          setFilter("E-commerce");
          break;
        case "Health":
          setFilter("Health");
          break;
        case "Education":
          setFilter("Education");
          break;
        default:
          setFilter("All");
      }
  }, [sort]);

  useEffect(() => (title !== "category" ? setSort("") : undefined), [filter]);

  const sortValue = (e: any) => {
    setSort(e.target.outerText);
    dropdown.current?.blur();
  };

  return (
    <button className={s.filter_box} ref={dropdown}>
      <span className={s.float}>{title}</span>
      <div className={s.wrapper}>
        {title === "category" && <span>{sort || sortItems[0]}</span>}
        {title === "order" && <span>{sort || "default"}</span>}
        {title === "date" && <span>{sort || "default"}</span>}
        <img src={arrowDownIcon} alt="search icon" />
      </div>

      <ul className={s.dropdown}>
        {sortItems.map((item, i) => (
          <li key={i} onClick={(e: any) => sortValue(e)}>
            {item}
          </li>
        ))}
      </ul>
    </button>
  );
};

export default FilterBox;
