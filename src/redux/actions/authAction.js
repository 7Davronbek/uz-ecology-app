import { UPDATE_LOGIN } from "../types/type"

export const updateAuth = state => {
    return {
        type: UPDATE_LOGIN,
        payload: state
    }
}

export const TEST = () => async (dispatch) => {
    try {
        console.log('test');
    } catch (err) {
        console.log(err);
    }
}