import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Tag = {
  msg: string;
  idx: number;
};

export interface SearchState {
  tags: Tag[];
}

const initialState: SearchState = {
  tags: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getTagList(state, action) {
      state.tags = action.payload.tags;
    },
  },
});

export default searchSlice;
