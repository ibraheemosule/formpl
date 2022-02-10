import { useEffect, useState } from "react";
import s from "../../assets/scss/sections/pagination.module.scss";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { paginateData } from "../../store/reducers/dataReducer";
import { Paginate } from "../../ts-types";

const Pagination: React.FC = () => {
  const [number, setNumber] = useState(1);
  const data = useAppSelector(state => state.data.mutableData);
  const paginatedData = useAppSelector(state => state.data.paginated);
  const dispatch = useAppDispatch();
  const numOfPages = Math.ceil(data.length / 15);

  const pagination = ({ arr, pageSize, pageNumber }: Paginate) => {
    const start = pageSize * (pageNumber - 1);
    const end = pageSize * pageNumber;
    return {
      *[Symbol.iterator]() {
        for (let i = start; i < arr.length && i < end; i++) {
          yield arr[i];
        }
      },
    };
  };

  const increment = () => {
    if (number < numOfPages) setNumber(number => number + 1);
    console.log(number);
  };

  const decrement = () => {
    if (number > 1) setNumber(number => number - 1);
    console.log(number);
  };

  useEffect(() => {
    const pag = pagination({
      arr: [...data],
      pageSize: 15,
      pageNumber: number,
    });
    dispatch(paginateData([...pag]));
    console.log(paginatedData);
  }, [data, number]);

  useEffect(() => {
    setNumber(1);
  }, [data]);

  return (
    <div className={s.pagination}>
      <button disabled={number > 1 ? false : true} onClick={decrement}>
        Previous
      </button>
      <div>
        <span>{number}</span> of {numOfPages}
      </div>
      <button disabled={number < numOfPages ? false : true} onClick={increment}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
