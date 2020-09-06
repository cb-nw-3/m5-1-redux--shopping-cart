const initialState = {};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            return {
                ...state,
                [action.item.id]: {
                    ...action.item,
                    // ok. So I tried to write this myself, and it absolutely didn't work.
                    // I copy-pasted it from the solution and it looked IDENTICAL, but now it works.
                    // Why?
                    quantity:
                        state[action.item.id] && state[action.item.id]["quantity"] ? state[action.item.id].quantity + 1 : 1,
                }
            }
        }
        case 'REMOVE_ITEM': {
            const newCart = { ...state };
            delete newCart[action.item];
            return newCart;
        }
        case 'UPDATE_QUANTITY': {
            console.log("update quantity action:", action.itemDetails);
            console.log(state);
            return {
                ...state,
                [action.itemDetails[0].id]: {
                    ...action.itemDetails[0],
                    quantity:
                        action.itemDetails[1],
                }
            }
        }
        default:
            return state;
    }
}

export const getStoreItemArray = state =>
    Object.values(state);