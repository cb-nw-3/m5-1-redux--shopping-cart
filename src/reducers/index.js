const initialState = {};

// in component we call a dispatch that is given an action and then reducer executes that action
export const getStoreItemArray = (state) => Object.values(state);
// but we want to select the state as an _array_ of items, so that we can map through them in our React component.
//so we can update cart
//getStoreItemArray gets put into cart
// keep selector functions _colocated_ with the reducers.
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
//Here we updated our reducer to handle this action. Remember, _actions describe a change_, but they aren't opinionated about what should happen as a result.
///All the `...` might be confusing, so to clarify: Redux works with _immutable state_. That means we aren't allowed to mutate the state object, we have to produce a brand new object.
