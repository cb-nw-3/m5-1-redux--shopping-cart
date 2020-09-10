const initialState = {};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            return {
                ...state,
                [action.item.id]: {
                    ...action.item,
                    quantity: 1,
                },
            };
        }
        case 'REMOVE_ITEM': {
            const stateCopy = { ...state };
            delete stateCopy[action.itemId];

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
