import React from "react";

export interface IFilterBoxProps {
  title: string;
  sortItems: string[];
  filter: string;
  setFilter?: React.Dispatch<React.SetStateAction<string>>;
}

interface Data {
  category: string[];
  created: string;
  description: string;
  link: string;
  name: string;
}

interface State {
  initialData: Data[];
  data: Data[];
}

export interface ICardProps {
  template: Data;
}

export interface ISearchBoxProps {
  filter: string;
}
