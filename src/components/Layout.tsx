import React from "react";
import TopHeader from "./sections/TopHeader";
import CardsWrapper from "./sections/cardsWrapper";
import s from "../assets/scss/layout/layout.module.scss";
import Pagination from "./sections/Pagination";

const Layout: React.FC = () => {
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
