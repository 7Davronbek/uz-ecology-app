import { UPDATE_LOGIN } from "../types/type"

const initialStore = {
    isLoading: false,
    error: false,
    user: [],
    userPhone: '',
    userPassword: '',
    userType: ''
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