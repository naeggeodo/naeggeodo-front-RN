import {combineReducers} from 'redux';
import categoriesSlice from '../slices/categories';
import chatRoomSlice from '../slices/chatRoom';
import locationSlice from '../slices/location';

const rootReducer = combineReducers({
  location: locationSlice.reducer,
  categories: categoriesSlice.reducer,
  chatRooms: chatRoomSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
