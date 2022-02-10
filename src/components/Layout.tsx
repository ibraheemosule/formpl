import TopHeader from "./sections/TopHeader";
import CardsWrapper from "./sections/CardsWrapper";
import s from "../assets/scss/layout/layout.module.scss";
import Pagination from "./sections/Pagination";
import { useAppDispatch } from "../store/hooks";
import { useEffect } from "react";
import { templates } from "../store/reducers/dataReducer";
import axios from "axios";

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(templates());
  }, []);

  return (
    <main className={s.layout}>
      <div className={s.container}>
        <TopHeader />
        <CardsWrapper />
        <Pagination />
      </div>
    </main>
  );
};

export default Layout;
