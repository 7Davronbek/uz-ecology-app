import axios from "axios";
import { toast } from "react-toastify";
import { API_PATH } from "../../tools/constants";
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



export const REGISTER = (e, phone, password, navigate) => async (dispatch) => {
    await axios.post(API_PATH + '/accounts/register/', { phone, role: Number(e), password })
        .then((res) => {
            navigate('/verify-phone', { replace: true })
            toast.success("Iltimos, telefonni tasdiqlang!")

        })
        .catch((err) => {
            toast.error("Internet Error!")
        })
}

export const PHONEVERIFY = (code, phone, password, navigate) => async (dispatch) => {
    await axios.post(API_PATH + '/accounts/verify-register/', { phone, code, password })
        .then((res) => {
            toast.success("Telefon raqami tasdiqlandi!")
            navigate('/login', { replace: true })
        })
        .catch((err) => {
            toast.error("Ma'lumotlar noto'g'ri kiritilgan!")
        })
}