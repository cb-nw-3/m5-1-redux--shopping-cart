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

    case "REMOVE_ITEM":
      return produce(state, (draftState) => {
        delete draftState[action.id.item.id];
      });

    case "UPDATE_QUANTITY":
      return produce(state, (draftState) => {
        draftState[action.id].quantity = Number(action.input);
      });

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
