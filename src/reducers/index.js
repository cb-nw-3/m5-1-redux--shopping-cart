import produce from "immer";

const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quandtity: 1,
        },
      };
    }
    case "REMOVE_ITEM": {
      // Solution without Immer
      // console.log(action, state);
      // const newState = { ...state };
      // delete newState[action.id];
      // return newState;
      return produce(state, (draftState) => {
        delete draftState[action.id];
      });
    }

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
