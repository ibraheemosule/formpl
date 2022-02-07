import SearchBox from "../others/SearchBox";
import FilterBox from "../others/FilterBox";
import s from "../../assets/scss/sections/top-header.module.scss";
import infoIcon from "../../assets/img/info-icon.svg";

const TopHeader: React.FC = () => {
  return (
    <div className={s.top_header}>
      <SearchBox />
      <div className={s.filter_section}>
        <span className={s.sort}>Sort By:</span>
        <FilterBox />
        <FilterBox />
        <FilterBox />
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
    </div>
  );
};

export default TopHeader;
