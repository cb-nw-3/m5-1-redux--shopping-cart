const initialState = {};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            return {
                ...state,
                [action.item.id]: {
                    ...action.item,
                    quantity: 1,
                }
            }
        }
        default:
            return state;
    }
}

export const getStoreItemArray = state => Object.values(state);
export const getTotal = state =>
    getStoreItemArray(state).reduce(
        (total, item) => total + item.price * item.quantity,
        //initial value
        0
    );

