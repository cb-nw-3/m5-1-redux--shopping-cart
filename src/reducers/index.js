const initialState = {};
export const getStoreItemArray = (state) => Object.values(state);
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
      // New object we CAN mutate
      const stateCopy = { ...state };
      delete stateCopy[action.itemId];
      return stateCopy;
    }

    default:
      return state;
  }
}
