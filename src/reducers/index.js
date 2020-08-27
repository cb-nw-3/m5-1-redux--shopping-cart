import produce from "immer";

const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      console.log("state", state);
      return produce(state, (draftState) => {
        draftState[action.item.id] = action.item;
        !draftState[action.item.id].quantity
          ? (draftState[action.item.id].quantity = 1)
          : draftState[action.item.id].quantity++;
      });
    default:
      return state;
  }
}
