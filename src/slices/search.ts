import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ChatRoomResponse} from './chatRoom';

export type Tag = {
  msg: string;
  idx: number;
};

export interface SearchState {
  tags: Tag[];
  chatRoomResponses: ChatRoomResponse[];
}

const initialState: SearchState = {
  tags: [],
  chatRoomResponses: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getTagList(state, action) {
      state.tags = action.payload.tags;
    },
    getChatRooms(state, action) {
      state.chatRoomResponses = action.payload.chatRoom;
    },
    getChatRoomsByTag(state, action) {
      state.chatRoomResponses = action.payload.chatRoom;
    },
  },
});

export default searchSlice;
