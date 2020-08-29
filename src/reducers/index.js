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
    case "REMOVE_ITEM": {
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    }
    case "UPDATE_QUANTITY": {
      const { id, quantity } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          quantity: Number(quantity),
        },
      };
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);

export const getTotal = (state) =>
  getStoreItemArray(state).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
