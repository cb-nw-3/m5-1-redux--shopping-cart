const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      console.log(`${action.item.title} was added to the cart!`);

      //In order to update the quantity, the item must exist in the state AND
      //must have a quantity prop
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
      const newItems = { ...state };
      console.log(
        `${newItems[action.id].title} has been removed from the cart!`
      );
      // console.log(newItems);
      delete newItems[action.id];
      return newItems;
    }

    case "UPDATE_QUANTITY": {
      console.log(`Quantity has been updated`);
      console.log(action);
      const { id, quantity } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          quantity: Number(quantity), //was being stored as string, saving as number
        },
      };
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);

//this store state will represent the cart's subtotal
//the reducer function will start with the first indexed item in the cart
//and continually add until there are no more items to be added.
export const getTotal = (state) =>
  getStoreItemArray(state).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
