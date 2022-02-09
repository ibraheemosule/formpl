import s from "../../assets/scss/others/search-box.module.scss";
import searchIcon from "../../assets/img/search-outline.svg";
import { ISearchBoxProps } from "../../ts-types";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { filterBySearch } from "../../store/reducers/dataReducer";

const SearchBox: React.FC<ISearchBoxProps> = ({ filter }) => {
  const [value, setValue] = useState<string>("");
  const [valueLength, setValueLength] = useState<number>(0);
  const dispatch = useAppDispatch();

  const search: React.ChangeEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    setValueLength(value.length);
    dispatch(filterBySearch(value));
  };

  const searchFunction = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    if (valueLength > value.length) dispatch(filterBySearch(e.target.value));
  };

  useEffect(() => setValue(""), [filter]);
  return (
    <form onSubmit={search} className={s.search_box}>
      <input value={value} type="text" onChange={e => searchFunction(e)} />
      <button type="submit">
        <img src={searchIcon} alt="search icon" />
      </button>
    </form>
  );
};

export default SearchBox;
