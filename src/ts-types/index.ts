export interface IFilterBoxProps {
  title: string;
  sortItems: string[];
  filter: string;
  setFilter?: React.Dispatch<React.SetStateAction<string>>;
}

export interface IData {
  category: string[];
  created: string;
  description: string;
  link: string;
  name: string;
}

export interface IState {
  fetchedData: IData[];
  data: IData[];
  mutableData: IData[];
  loading: boolean;
  paginated: IData[];
  error: string;
}

export interface ICardProps {
  template: IData;
}

export interface ISearchBoxProps {
  filter: string;
}

export interface Paginate {
  arr: any[];
  pageSize: number;
  pageNumber: number;
}
