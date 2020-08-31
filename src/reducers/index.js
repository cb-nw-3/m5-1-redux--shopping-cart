const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity:
            state[action.item.id] && state[action.item.id].quantity
              ? state[action.item.id].quantity + 1
              : 1,
        },
      };
    }
    case "UPDATE_QUANTITY": {
      const { itemId, newQuantity } = action;
      return {
        ...state,
        [itemId]: {
          ...state[itemId],
          quantity: newQuantity,
        },
      };
    }
    case "REMOVE_ITEM": {
      const stateCopy = { ...state };

      delete stateCopy[action.item.id];

      return stateCopy;
    }

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);

export const getSubtotal = (state) =>
  getStoreItemArray(state).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
