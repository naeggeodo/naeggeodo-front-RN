import {
  createDraftSafeSelector,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {RootState} from '../store/reducer';

export type OrderType =
  | '1시간 이내'
  | '최대한 빨리'
  | '상관없음(인원이 모집되는대로)'
  | '선택하지 않음'
  | '';

export interface OrderStates {
  orderType: OrderType;
  storeName: string;
  storeLink: string;
  tags: string[];
  maxCount: number;
}

const initialState: OrderStates = {
  orderType: '',
  storeName: '',
  storeLink: 'http://',
  tags: [
    '버거킹',
    '떡복기',
    '햄버거',
    '피자',
    '안녕하세요오오오오오오오오오오오오오오오오오오오오',
  ],
  maxCount: 1,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    selectOrderType: (state, action: PayloadAction<OrderType>) => {
      state.orderType = action.payload;
    },
    typeStoreName: (state, action: PayloadAction<string>) => {
      state.storeName = action.payload;
    },
    typeStoreLink: (state, action: PayloadAction<string>) => {
      state.storeLink = action.payload;
    },
    minusMaxCount: state => {
      if (state.maxCount <= 1) return;
      else state.maxCount -= 1;
    },
    plusMaxCount: state => {
      if (state.maxCount >= 5) return;
      else state.maxCount += 1;
    },
  },
});

const selfSelector = (state: RootState) => state.order;
export const orderTypeSelector = createDraftSafeSelector(
  selfSelector,
  state => state.orderType,
);
export const storeNameSelector = createDraftSafeSelector(
  selfSelector,
  state => state.storeName,
);
export const storeLinkSelector = createDraftSafeSelector(
  selfSelector,
  state => state.storeLink,
);
export const maxCountSelector = createSelector(
  selfSelector,
  state => state.maxCount,
);
export const tagsSelector = createSelector(selfSelector, state => state.tags);

export default orderSlice;
