import produce from "immer";

const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: 1,
        },
      };
    }
    case "REMOVE_ITEM": {
      return produce(state, (draftState) => {
        delete draftState[action.id];
      });
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
