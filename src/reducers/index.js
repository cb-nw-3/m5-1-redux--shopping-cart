import produce from "immer";

const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      if (state[action.item.id] !== undefined) {
        return {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: parseInt(state[action.item.id].quantity) + 1,
          },
        };
      } else {
        return {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: 1,
          },
        };
      }
    }
    case "REMOVE_ITEM": {
      return produce(state, (draftState) => {
        delete draftState[action.id];
      });
    }

    case "UPDATE_QUANTITY": {
      return produce(state, (draftState) => {
        draftState[action.id].quantity = action.newQuantity;
      });
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => {
  return Object.values(state);
};
