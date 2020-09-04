const initialState = {};

export default function cartreducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      console.log("ADD_ITEM");

      console.log(Object.keys(state));
      let new_quantity;
      if (Object.keys(state).includes(action.item.id)) {
        console.log("contains already " + action.item.id);
        new_quantity = state[action.item.id].quantity + 1;

        console.log(state[action.item.id].quantity);
      } else {
        new_quantity = 1;
      }
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: new_quantity,
        },
      };
    }

    case "REMOVE_ITEM": {
      const stateCopy = { ...state }; // New object we CAN mutate

      delete stateCopy[action.item.id];
      return stateCopy;
    }

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
