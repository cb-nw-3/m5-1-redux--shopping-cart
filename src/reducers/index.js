const initialState = {};

export default function cartReducer(state = initialState, action) {
    // const stateCopy = {...state}
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

        case 'REMOVE_ITEM': {
            const stateCopy = {...state}    
            delete stateCopy[action.item.id]
            console.log(action.item)
            console.log(stateCopy)
            return {
                ...stateCopy
            }
        }

        default:
            return state;
    }
}

export const getStoreItemArray = state =>
    Object.values(state);