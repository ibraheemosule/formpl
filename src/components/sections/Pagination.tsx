import React from "react";
import s from "../../assets/scss/sections/pagination.module.scss";

const Pagination: React.FC = () => {
  return (
    <div className={s.pagination}>
      <button>Previous</button>
      <div>
        <span>1</span> of 14
      </div>
      <button>Next</button>
    </div>
  );
};

export default Pagination;
