import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface LocationState {
  address: string | null;
}

const initialState: LocationState = {
  address: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    searchLocation(state, action: PayloadAction<LocationState>) {
      state.address = action.payload.address;
    },
  },
});

export default locationSlice;
