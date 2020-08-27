import produce from 'immer';

const initialState = {};

export default function cartReducer(state = initialState, action) {
    console.log(initialState)
    switch (action.type) {
        case 'ADD_ITEM': {
            //Immer
            return produce(state, (draftState) => {
                draftState[action.item.id] = {
                    ...action.item,
                    quantity: 1,
                }
            });
        }
        // Without Immer
        // return {
        //     ...state,
        //     [action.item.id]: {
        //         ...action.item,
        //         quantity: 1,
        //     }
        // }

        case 'REMOVE_ITEM': {
            return produce(state, (draftState) => {
                delete draftState[action.item];
            })
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

