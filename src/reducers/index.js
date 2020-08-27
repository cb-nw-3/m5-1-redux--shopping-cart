import produce from "immer";

const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return !state[action.item.id]
        ? produce(state, (draftState) => {
            draftState[action.item.id] = action.item;
            draftState[action.item.id].quantity = 1;
          })
        : produce(state, (draftState) => {
            draftState[action.item.id].quantity++;
          });
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
