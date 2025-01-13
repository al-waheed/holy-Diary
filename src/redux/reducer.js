import { v4 as uuidv4 } from "uuid";
import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "./actions";

const initialState = {
  diaryItems: [],
};

const diaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const id = state.diaryItems.length > 0 ? uuidv4() : 1;
      let item = {
        id,
        title: action.payload.title,
        date: action.payload.date,
        text: action.payload.text,
      };
      return {
        ...state,
        diaryItems: [item, ...state.diaryItems].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        ),
      };

    case DELETE_ITEM:
      let deleteItem = state.diaryItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        diaryItems: deleteItem,
      };
    case EDIT_ITEM:
      const updatedItems = state.diaryItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, ...action.payload.updatedData }
          : item
      );
      return {
        ...state,
        diaryItems: updatedItems,
      };
    default:
      return state;
  }
};

export default diaryReducer;
