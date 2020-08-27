import { produce } from "immer";
const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      //console.log(state[action.item.id]);
      let newQuantity = 1;
      if (state[action.item.id]) {
        newQuantity = state[action.item.id].quantity + 1;
      }

      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: newQuantity,
        },
      };
    }
    case "REMOVE_ITEM": {
      //console.log(action.itemId);
      return produce(state, (draftState) => {
        delete draftState[action.itemId];
      });
    }
    case "UPDATE_QUANTITY": {
      if (action.quantity === 0) {
        return produce(state, (draftState) => {
          delete draftState[action.itemId];
        });
      }
      return produce(state, (draftState) => {
        draftState[action.itemId].quantity = Number(action.quantity);
      });
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
