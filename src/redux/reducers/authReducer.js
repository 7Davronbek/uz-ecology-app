import { ECO_USER_TOKEN } from "../../tools/constants"
import { UPDATE_LOGIN } from "../types/type"

const initialStore = {
    isLoading: false,
    error: false,
    // user: [],
    userPhone: '',
    userPassword: '',
    userType: '',
    userToken: localStorage.getItem(ECO_USER_TOKEN) || ''
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