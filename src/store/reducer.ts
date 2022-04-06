import {combineReducers} from 'redux';
import locationSlice from '../slices/location';

const rootReducer = combineReducers({
  location: locationSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
