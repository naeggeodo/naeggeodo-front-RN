import {combineReducers} from 'redux';
import categoriesSlice from '../slices/categories';
import chatRoomSlice from '../slices/chatRoom';
import locationSlice from '../slices/location';
import orderSlice from '../slices/order';

const rootReducer = combineReducers({
  location: locationSlice.reducer,
  categories: categoriesSlice.reducer,
  chatRoom: chatRoomSlice.reducer,
  order: orderSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
