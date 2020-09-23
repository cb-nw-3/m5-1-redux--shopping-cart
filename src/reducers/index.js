const initialState= {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity:
          // ternary verfies the item is in the cart and then that the quantity is above 0
          // Number() is here because the state was a string otherwise. 
            state[action.item.id] 
              && state[action.item.id].quantity
              ? Number(state[action.item.id].quantity) + 1
              : 1,
        }
      }
    }

    case 'REMOVE_ITEM': {
      const cartCopy = { ...state};
      delete cartCopy[action.itemId];
      return cartCopy;
    }

    case 'UPDATE_QUANTITY': {
      const { itemId, newQuantity } = action;
      return {
        ...state,
        [itemId]: {
          ...state[itemId],
          quantity: newQuantity,
        },
      }
    }

    default:
      return state;
  }
}

export const getStoreItemArray = state => Object.values(state);