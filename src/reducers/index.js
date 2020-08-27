const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: 1,
        },
      };
    case "DELETE_ITEM":
      const stateCopy = { ...state };
      const { id } = action.id;
      delete stateCopy[id];
      return {
        ...stateCopy,
      };
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
