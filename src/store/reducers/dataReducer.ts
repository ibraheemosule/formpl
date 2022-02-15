import { IState, IData } from "../../ts-types";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import dayjs from "dayjs";

interface IFetched {
  data: IData[];
  [key: string]: any;
}

export const templates = createAsyncThunk("data/templates", async () => {
  const fetchTemplates: IFetched = await axios.get(
    "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
  );
  return fetchTemplates.data.map(val => ({
    ...val,
    created: dayjs(val.created).format("YY, MM, DD, HH, MM, SSS"),
  }));
});

const initialState: IState = {
  fetchedData: [],
  data: [],
  mutableData: [],
  loading: false,
  paginated: [],
  error: "",
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
        val.name.startsWith(action.payload)
      );
    },
    filterByCategory(state, action: PayloadAction<string>) {
      if (action.payload === "All")
        state.mutableData = state.data = state.fetchedData;
      else {
        state.mutableData =
          state.data =
          state.data =
            state.fetchedData.filter(val =>
              val.category.includes(action.payload)
            );
      }
    },
    paginateData(state, action: PayloadAction<IData[]>) {
      state.paginated = action.payload;
    },
    updateLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(templates.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    }),
      builder.addCase(templates.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = "";
        state.fetchedData = state.data = state.mutableData = payload;
      }),
      builder.addCase(templates.rejected, state => {
        state.loading = false;
        state.error = "Unable To Fetch Templates";
      });
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
  paginateData,
} = dataSlice.actions;

export default dataSlice.reducer;
