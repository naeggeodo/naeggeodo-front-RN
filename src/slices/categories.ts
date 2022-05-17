import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type FoodCategory =
  | 'ALL'
  | 'CHICKEN'
  | 'JAPANESE'
  | 'CHINESE'
  | 'KOREAN'
  | 'SNACKS'
  | 'STEW'
  | 'PIZZA'
  | 'WESTERN'
  | 'GRILLED_MEAT'
  | 'PORK_FEET'
  | 'DESSERT'
  | 'FASTFOOD'
  | 'HAMBURGER';

export interface FoodCategoryResponse {
  idx: number;
  category: FoodCategory;
}

export const convertEngCategoryToKor = (foodCategory: FoodCategory) => {
  switch (foodCategory) {
    case 'ALL':
      return '전체';
    case 'CHICKEN':
      return '치킨';
    case 'CHINESE':
      return '중식';
    case 'DESSERT':
      return '디저트';
    case 'FASTFOOD':
      return '패스트푸드';
    case 'GRILLED_MEAT':
      return '구이/고기';
    case 'JAPANESE':
      return '일식';
    case 'KOREAN':
      return '한식';
    case 'PIZZA':
      return '피자';
    case 'PORK_FEET':
      return '족발';
    case 'SNACKS':
      return '분식';
    case 'STEW':
      return '찌개';
    case 'WESTERN':
      return '양식';
    case 'HAMBURGER':
      return '햄버거';
  }
};

export interface CategoriesState {
  foodCategories: FoodCategoryResponse[];
}

const initialState: CategoriesState = {
  foodCategories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getFoodCategories(state, action: PayloadAction<CategoriesState>) {
      state.foodCategories = action.payload.foodCategories;
    },
  },
});

export default categoriesSlice;
