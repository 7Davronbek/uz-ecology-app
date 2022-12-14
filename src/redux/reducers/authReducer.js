import { ECO_USER_TOKEN, ECO_USER_TYPE } from "../../tools/constants"
import { UPDATE_LOGIN } from "../types/type"

const initialStore = {
    isLoading: false,
    error: false,
    // user: [],
    userPhone: '',
    userPassword: '',
    userType: localStorage.getItem(ECO_USER_TYPE) || '',
    userToken: localStorage.getItem(ECO_USER_TOKEN) || '',
    loginLoading: false,
}

export const authReducer = (state = initialStore, action) => {
    switch (action.type) {

        case UPDATE_LOGIN:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}