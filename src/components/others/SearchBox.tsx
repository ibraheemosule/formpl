import React from "react";
import s from "../../assets/scss/others/search-box.module.scss";
import searchIcon from "../../assets/img/search-outline.svg";

const SearchBox: React.FC = () => {
  const search: React.ChangeEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={search} className={s.search_box}>
      <input type="text" />
      <button type="submit">
        <img src={searchIcon} alt="search icon" />
      </button>
    </form>
  );
};

export default SearchBox;
