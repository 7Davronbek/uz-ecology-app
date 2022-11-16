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


// REGISTRATION USER
export const REGISTER = (e, phone, password, navigate) => async (dispatch) => {
    await axios.post(API_PATH + '/accounts/register/', { phone, role: Number(e), password })
        .then((res) => {
            if (res.status === 409) {
                return toast.success("Foydalanuvchi allaqachon mavjud!")
            }
            navigate('/verify-phone', { replace: true })
            toast.success("Iltimos, telefonni tasdiqlang!")

        })
        .catch((err) => {
            if (err.response.status === 409) {
                return toast.error("Foydalanuvchi allaqachon mavjud!")
            }
            toast.error("Internet Error!")
        })
}

// REGISTRATION VERIFY PHONE
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

// LOGIN USER
export const LOGIN = (phone, password, navigate) => async (dispatch) => {
    await axios.post(API_PATH + '/accounts/login/', { phone, password })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            toast.error("Ma'lumotlar noto'g'ri kiritilgan!")
        })
}