import axios from "axios";
import { toast } from "react-toastify";
import { API_PATH, CONFIG } from "../../tools/constants";
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