import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FoodCategory} from './categories';

export interface ChatRoomResponse {
  buildingCode: string;
  category: FoodCategory;
  createDate: string;
  currentCount: number;
  id: number;
  idx: number;
  imgPath: string;
  maxCount: number;
  place: string;
  state: 'CREATE' | 'PROGRESS' | 'END' | 'FULL';
  title: string;
  user_id: string;
}

export interface ChatRoomState {
  chatRooms: ChatRoomResponse[];
}

const initialState: ChatRoomState = {
  chatRooms: [],
};

const chatRoomSlice = createSlice({
  name: 'chatRoom',
  initialState,
  reducers: {
    getChatRooms(state, action: PayloadAction<ChatRoomState>) {
      state.chatRooms = action.payload.chatRooms;
    },
  },
});

export default chatRoomSlice;
