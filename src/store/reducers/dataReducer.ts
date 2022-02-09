import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Data {
  category: string[];
  created: string;
  description: string;
  link: string;
  name: string;
}

interface State {
  fetchedData: Data[];
  data: Data[];
  mutableData: Data[];
  loading: boolean;
}

const initialState: State = {
  fetchedData: [
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.600041",
      description: "commodo consequat. culpa Lorem nulla",
      link: "https://formpl.us/templates",
      name: "dolore Excepteur eiusmod",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.596025",
      description: "velit minim ullamco magna occaecat",
      link: "https://formpl.us/templates",
      name: "pariatur. proident, minim",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.477763",
      description: "Lorem nulla deserunt voluptate aliqua.",
      link: "https://formpl.us/templates",
      name: "amet, reprehenderit consectetur",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.496979",
      description: "tempor nostrud officia amet, eiusmod",
      link: "https://formpl.us/templates",
      name: "voluptate pariatur. incididunt",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.553794",
      description: "reprehenderit laboris voluptate Excepteur dolor",
      link: "https://formpl.us/templates",
      name: "irure fugiat cillum",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.583184",
      description: "incididunt Excepteur adipiscing cupidatat exercitation",
      link: "https://formpl.us/templates",
      name: "laborum. nostrud voluptate",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.526019",
      description: "adipiscing ipsum consectetur cupidatat commodo",
      link: "https://formpl.us/templates",
      name: "exercitation nostrud consequat.",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.527949",
      description: "minim Lorem ipsum incididunt pariatur.",
      link: "https://formpl.us/templates",
      name: "proident, laborum. laboris",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.592443",
      description: "adipiscing Excepteur voluptate dolore magna",
      link: "https://formpl.us/templates",
      name: "fugiat officia Excepteur",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.573357",
      description: "velit cupidatat consectetur amet, ullamco",
      link: "https://formpl.us/templates",
      name: "consectetur nulla Lorem",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.735161",
      description: "velit deserunt nostrud nulla elit,",
      link: "https://formpl.us/templates",
      name: "ipsum irure eiusmod",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.499207",
      description: "culpa minim laborum. nostrud ullamco",
      link: "https://formpl.us/templates",
      name: "aliquip dolor officia",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.472819",
      description: "culpa fugiat labore commodo cillum",
      link: "https://formpl.us/templates",
      name: "dolor cupidatat mollit",
    },
    {
      category: ["E-commerce", "Education"],
      created: "2022-02-08T12:37:20.208146",
      description: "exercitation culpa velit deserunt proident,",
      link: "https://formpl.us/templates",
      name: "occaecat nulla",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.528064",
      description: "laboris elit, cupidatat Lorem ullamco",
      link: "https://formpl.us/templates",
      name: "culpa ipsum dolore",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.483890",
      description: "deserunt ullamco pariatur. dolore exercitation",
      link: "https://formpl.us/templates",
      name: "consequat. cillum mollit",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.718047",
      description: "minim proident, exercitation elit, laboris",
      link: "https://formpl.us/templates",
      name: "nulla cillum elit,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.655252",
      description: "officia laboris aliquip ipsum velit",
      link: "https://formpl.us/templates",
      name: "velit consequat. officia",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.700604",
      description: "aliqua. velit Excepteur veniam, cillum",
      link: "https://formpl.us/templates",
      name: "irure laborum. elit,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.571936",
      description: "proident, nulla commodo aliquip tempor",
      link: "https://formpl.us/templates",
      name: "pariatur. aliqua. occaecat",
    },
    {
      category: ["Education", "Health"],
      created: "2022-02-08T12:37:20.202112",
      description: "laborum. culpa eiusmod officia reprehenderit",
      link: "https://formpl.us/templates",
      name: "fugiat nulla",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.494010",
      description: "occaecat consectetur magna elit, aliqua.",
      link: "https://formpl.us/templates",
      name: "magna deserunt commodo",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.674024",
      description: "culpa Excepteur cupidatat reprehenderit amet,",
      link: "https://formpl.us/templates",
      name: "eiusmod velit laborum.",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.555132",
      description: "aliquip laborum. nostrud aliqua. tempor",
      link: "https://formpl.us/templates",
      name: "labore amet, incididunt",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.683441",
      description: "dolore pariatur. reprehenderit exercitation consectetur",
      link: "https://formpl.us/templates",
      name: "mollit eiusmod Excepteur",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.585357",
      description: "Excepteur mollit voluptate consectetur laborum.",
      link: "https://formpl.us/templates",
      name: "cillum voluptate amet,",
    },
  ],
  data: [
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.600041",
      description: "commodo consequat. culpa Lorem nulla",
      link: "https://formpl.us/templates",
      name: "dolore Excepteur eiusmod",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.596025",
      description: "velit minim ullamco magna occaecat",
      link: "https://formpl.us/templates",
      name: "pariatur. proident, minim",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.477763",
      description: "Lorem nulla deserunt voluptate aliqua.",
      link: "https://formpl.us/templates",
      name: "amet, reprehenderit consectetur",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.496979",
      description: "tempor nostrud officia amet, eiusmod",
      link: "https://formpl.us/templates",
      name: "voluptate pariatur. incididunt",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.553794",
      description: "reprehenderit laboris voluptate Excepteur dolor",
      link: "https://formpl.us/templates",
      name: "irure fugiat cillum",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.583184",
      description: "incididunt Excepteur adipiscing cupidatat exercitation",
      link: "https://formpl.us/templates",
      name: "laborum. nostrud voluptate",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.526019",
      description: "adipiscing ipsum consectetur cupidatat commodo",
      link: "https://formpl.us/templates",
      name: "exercitation nostrud consequat.",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.527949",
      description: "minim Lorem ipsum incididunt pariatur.",
      link: "https://formpl.us/templates",
      name: "proident, laborum. laboris",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.592443",
      description: "adipiscing Excepteur voluptate dolore magna",
      link: "https://formpl.us/templates",
      name: "fugiat officia Excepteur",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.573357",
      description: "velit cupidatat consectetur amet, ullamco",
      link: "https://formpl.us/templates",
      name: "consectetur nulla Lorem",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.735161",
      description: "velit deserunt nostrud nulla elit,",
      link: "https://formpl.us/templates",
      name: "ipsum irure eiusmod",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.499207",
      description: "culpa minim laborum. nostrud ullamco",
      link: "https://formpl.us/templates",
      name: "aliquip dolor officia",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.472819",
      description: "culpa fugiat labore commodo cillum",
      link: "https://formpl.us/templates",
      name: "dolor cupidatat mollit",
    },
    {
      category: ["E-commerce", "Education"],
      created: "2022-02-08T12:37:20.208146",
      description: "exercitation culpa velit deserunt proident,",
      link: "https://formpl.us/templates",
      name: "occaecat nulla",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.528064",
      description: "laboris elit, cupidatat Lorem ullamco",
      link: "https://formpl.us/templates",
      name: "culpa ipsum dolore",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.483890",
      description: "deserunt ullamco pariatur. dolore exercitation",
      link: "https://formpl.us/templates",
      name: "consequat. cillum mollit",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.718047",
      description: "minim proident, exercitation elit, laboris",
      link: "https://formpl.us/templates",
      name: "nulla cillum elit,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.655252",
      description: "officia laboris aliquip ipsum velit",
      link: "https://formpl.us/templates",
      name: "velit consequat. officia",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.700604",
      description: "aliqua. velit Excepteur veniam, cillum",
      link: "https://formpl.us/templates",
      name: "irure laborum. elit,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.571936",
      description: "proident, nulla commodo aliquip tempor",
      link: "https://formpl.us/templates",
      name: "pariatur. aliqua. occaecat",
    },
    {
      category: ["Education", "Health"],
      created: "2022-02-08T12:37:20.202112",
      description: "laborum. culpa eiusmod officia reprehenderit",
      link: "https://formpl.us/templates",
      name: "fugiat nulla",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.494010",
      description: "occaecat consectetur magna elit, aliqua.",
      link: "https://formpl.us/templates",
      name: "magna deserunt commodo",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.674024",
      description: "culpa Excepteur cupidatat reprehenderit amet,",
      link: "https://formpl.us/templates",
      name: "eiusmod velit laborum.",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.555132",
      description: "aliquip laborum. nostrud aliqua. tempor",
      link: "https://formpl.us/templates",
      name: "labore amet, incididunt",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.683441",
      description: "dolore pariatur. reprehenderit exercitation consectetur",
      link: "https://formpl.us/templates",
      name: "mollit eiusmod Excepteur",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.585357",
      description: "Excepteur mollit voluptate consectetur laborum.",
      link: "https://formpl.us/templates",
      name: "cillum voluptate amet,",
    },
  ],
  mutableData: [
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.600041",
      description: "commodo consequat. culpa Lorem nulla",
      link: "https://formpl.us/templates",
      name: "dolore Excepteur eiusmod",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.596025",
      description: "velit minim ullamco magna occaecat",
      link: "https://formpl.us/templates",
      name: "pariatur. proident, minim",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.477763",
      description: "Lorem nulla deserunt voluptate aliqua.",
      link: "https://formpl.us/templates",
      name: "amet, reprehenderit consectetur",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.496979",
      description: "tempor nostrud officia amet, eiusmod",
      link: "https://formpl.us/templates",
      name: "voluptate pariatur. incididunt",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.553794",
      description: "reprehenderit laboris voluptate Excepteur dolor",
      link: "https://formpl.us/templates",
      name: "irure fugiat cillum",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.583184",
      description: "incididunt Excepteur adipiscing cupidatat exercitation",
      link: "https://formpl.us/templates",
      name: "laborum. nostrud voluptate",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.526019",
      description: "adipiscing ipsum consectetur cupidatat commodo",
      link: "https://formpl.us/templates",
      name: "exercitation nostrud consequat.",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.527949",
      description: "minim Lorem ipsum incididunt pariatur.",
      link: "https://formpl.us/templates",
      name: "proident, laborum. laboris",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.592443",
      description: "adipiscing Excepteur voluptate dolore magna",
      link: "https://formpl.us/templates",
      name: "fugiat officia Excepteur",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.573357",
      description: "velit cupidatat consectetur amet, ullamco",
      link: "https://formpl.us/templates",
      name: "consectetur nulla Lorem",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.735161",
      description: "velit deserunt nostrud nulla elit,",
      link: "https://formpl.us/templates",
      name: "ipsum irure eiusmod",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.499207",
      description: "culpa minim laborum. nostrud ullamco",
      link: "https://formpl.us/templates",
      name: "aliquip dolor officia",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.472819",
      description: "culpa fugiat labore commodo cillum",
      link: "https://formpl.us/templates",
      name: "dolor cupidatat mollit",
    },
    {
      category: ["E-commerce", "Education"],
      created: "2022-02-08T12:37:20.208146",
      description: "exercitation culpa velit deserunt proident,",
      link: "https://formpl.us/templates",
      name: "occaecat nulla",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.528064",
      description: "laboris elit, cupidatat Lorem ullamco",
      link: "https://formpl.us/templates",
      name: "culpa ipsum dolore",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.483890",
      description: "deserunt ullamco pariatur. dolore exercitation",
      link: "https://formpl.us/templates",
      name: "consequat. cillum mollit",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.718047",
      description: "minim proident, exercitation elit, laboris",
      link: "https://formpl.us/templates",
      name: "nulla cillum elit,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.655252",
      description: "officia laboris aliquip ipsum velit",
      link: "https://formpl.us/templates",
      name: "velit consequat. officia",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.700604",
      description: "aliqua. velit Excepteur veniam, cillum",
      link: "https://formpl.us/templates",
      name: "irure laborum. elit,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.571936",
      description: "proident, nulla commodo aliquip tempor",
      link: "https://formpl.us/templates",
      name: "pariatur. aliqua. occaecat",
    },
    {
      category: ["Education", "Health"],
      created: "2022-02-08T12:37:20.202112",
      description: "laborum. culpa eiusmod officia reprehenderit",
      link: "https://formpl.us/templates",
      name: "fugiat nulla",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.494010",
      description: "occaecat consectetur magna elit, aliqua.",
      link: "https://formpl.us/templates",
      name: "magna deserunt commodo",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.674024",
      description: "culpa Excepteur cupidatat reprehenderit amet,",
      link: "https://formpl.us/templates",
      name: "eiusmod velit laborum.",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.555132",
      description: "aliquip laborum. nostrud aliqua. tempor",
      link: "https://formpl.us/templates",
      name: "labore amet, incididunt",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.683441",
      description: "dolore pariatur. reprehenderit exercitation consectetur",
      link: "https://formpl.us/templates",
      name: "mollit eiusmod Excepteur",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2022-02-08T12:37:20.585357",
      description: "Excepteur mollit voluptate consectetur laborum.",
      link: "https://formpl.us/templates",
      name: "cillum voluptate amet,",
    },
  ],
  loading: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    sortNameUp(state) {
      state.mutableData = state.mutableData.sort((a, b) =>
        b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1
      );
    },
    sortNameDown(state) {
      state.mutableData = state.mutableData.sort((a, b) =>
        b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1
      );
    },
    sortDateUp(state) {
      state.mutableData = state.mutableData.sort((a, b) =>
        b.created.toLowerCase() < a.created.toLowerCase() ? 1 : -1
      );
    },
    sortDateDown(state) {
      state.mutableData = state.mutableData.sort((a, b) =>
        b.created.toLowerCase() < a.created.toLowerCase() ? 1 : -1
      );
    },
    filterBySearch(state, action: PayloadAction<string>) {
      state.mutableData = state.data.filter(val =>
        val.name.includes(action.payload)
      );
    },
    filterByCategory(state, action: PayloadAction<string>) {
      if (action.payload === "All") state.mutableData = state.fetchedData;
      else {
        state.mutableData = state.fetchedData.filter(val =>
          val.category.includes(action.payload)
        );
      }
    },
    updateLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const {
  sortNameUp,
  sortNameDown,
  sortDateDown,
  sortDateUp,
  filterBySearch,
  filterByCategory,
  updateLoading,
} = dataSlice.actions;
export default dataSlice.reducer;
