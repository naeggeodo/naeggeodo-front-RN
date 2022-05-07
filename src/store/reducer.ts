import {combineReducers} from 'redux';
import categoriesSlice from '../slices/categories';
import locationSlice from '../slices/location';

const rootReducer = combineReducers({
  location: locationSlice.reducer,
  categories: categoriesSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
