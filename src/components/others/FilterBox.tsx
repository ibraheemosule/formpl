import React, { useEffect, useState } from "react";
import s from "../../assets/scss/others/filter-box.module.scss";
import arrowDownIcon from "../../assets/img/chevron-down-outline.svg";
import { useRef } from "react";

const FilterBox: React.FC = () => {
  const [sort, setSort] = useState<String>("default");

  useEffect(() => console.log(sort), [sort]);

  return (
    <button className={s.filter_box}>
      <span className={s.float}>Default</span>
      <div className={s.wrapper}>
        <span>Default</span>
        <img src={arrowDownIcon} alt="search icon" />
      </div>

      <ul className={s.dropdown}>
        <li onClick={(e: any) => setSort(e.target.outerText)}>one</li>
        <li onClick={(e: any) => setSort(e.target.outerText)}>two</li>
      </ul>
    </button>
  );
};

export default FilterBox;
