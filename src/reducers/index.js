const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      console.log(action.item);
      console.log(`${action.item.title} was added to the cart!`);
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: 1,
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
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
