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
  storeLink: '',
  tags: [],
  maxCount: 1,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    selectOrderType: (state, action: PayloadAction<OrderType>) => {
      state.orderType = action.payload;
    },
  },
});

const selfSelector = (state: RootState) => state.order;
export const orderTypeSelector = createDraftSafeSelector(
  selfSelector,
  state => state.orderType,
);

export default orderSlice;
