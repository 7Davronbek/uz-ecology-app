import { UPDATE_TRADES } from "../types/type"

export const updateAuth = state => {
    return {
        type: UPDATE_TRADES,
        payload: state
    }
}

export const TRADESTEST = () => async (dispatch) => {
    try {
        console.log('test');
    } catch (err) {
        console.log(err);
    }
}