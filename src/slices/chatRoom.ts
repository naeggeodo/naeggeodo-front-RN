import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FoodCategory} from './categories';

export type State = 'CREATE' | 'PROGRESS' | 'END' | 'FULL';

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
  state: State;
  title: string;
  user_id: string;
  link: string;
}

export interface ChatRoomInfoResponse {
  user_id: string;
  imgPath: string;
  currentCount: number;
  buildingCode: string;
  id: number;
  state: State;
  place: string;
  title: string;
  category: FoodCategory;
  maxCount: number;
  createDate: string;
}

export interface ChatRoomState {
  chatRoom: ChatRoomResponse[];
  chatRoomInfo: null | ChatRoomInfoResponse;
}

const initialState: ChatRoomState = {
  chatRoom: [],
  chatRoomInfo: null,
};

const chatRoomSlice = createSlice({
  name: 'chatRoom',
  initialState,
  reducers: {
    getChatRooms(state, action) {
      state.chatRoom = action.payload.chatRoom;
    },
    getChatRoomInfo(state, action) {
      state.chatRoomInfo = action.payload;
    },
  },
});

export default chatRoomSlice;
