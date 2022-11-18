import { UPDATE_TRADES } from "../types/type"

const initialStore = {
    isLoading: false,
    error: false,
}

export const tradesReducer = (state = initialStore, action) => {
    switch (action.type) {

        case UPDATE_TRADES:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}