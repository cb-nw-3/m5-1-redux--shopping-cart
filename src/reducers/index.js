const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity:
            state[action.item.id] && state[action.item.id].quantity
              ? parseInt(state[action.item.id].quantity) + 1
              : 1,
        },
      };
    case "DELETE_ITEM":
      const stateCopy = { ...state };
      const { id } = action.id;
      console.log(id);
      delete stateCopy[id];
      return id == undefined ? {} : { ...stateCopy };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          quantity: parseInt(action.newQuantity),
        },
      };
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => {
  return Object.values(state);
};
