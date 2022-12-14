import axios from "axios";
import { toast } from "react-toastify";
import { API_PATH, CONFIG, ECO_USER_TOKEN, ECO_USER_TYPE } from "../../tools/constants";
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
export const REGISTER = (role, phone, password, navigate) => async (dispatch) => {
    const formData = new FormData()
    formData.append('phone', phone)
    formData.append('role', role)
    formData.append('password', password)
    await axios.post(API_PATH + '/accounts/register/', formData, CONFIG)
        .then((res) => {
            if (res.status === 409) {
                return toast.success("Foydalanuvchi allaqachon mavjud!")
            }
            localStorage.setItem(ECO_USER_TYPE, role)
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
    await axios.post(API_PATH + '/accounts/verify-register/', { phone, code, password, role: localStorage.getItem(ECO_USER_TYPE) })
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
    dispatch(updateAuth({ loginLoading: true }))
    if (phone.length < 9 || password.length < 4) {
        toast.error("Ma'lumotlar to'liq kiritilmagan.")
        dispatch(updateAuth({ loginLoading: false }))
    } else {
        await axios.post(API_PATH + '/accounts/login/', { phone, password })
            .then((res) => {
                dispatch(updateAuth({ loginLoading: false }))
                toast.success("Success!")
                dispatch(updateAuth({ userType: res.data.role, userToken: res.data.token }))
                localStorage.setItem(ECO_USER_TOKEN, res.data.token)
                localStorage.setItem(ECO_USER_TYPE, res.data.role)
                navigate('/control-panel', { replace: true })
                window.location.reload();
            })
            .catch((err) => {
                if (err.response.status === 406) {
                    return toast.error("Noto'g'ri parol!")
                }
                if (err.response.status === 404) {
                    return toast.error("Foydalanuvchi topilmadi!")
                }
                toast.error("Ma'lumotlar noto'g'ri kiritilgan!")
                dispatch(updateAuth({ loginLoading: false }))
            })
            .finally(() => {
                dispatch(updateAuth({ loginLoading: false }))
            })
    }
}