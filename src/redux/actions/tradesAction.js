import { UPDATE_TRADES } from "../types/type"
import axios from 'axios';
import { API_PATH } from "../../tools/constants";
import { CONFIG } from './../../tools/constants';

export const updateTrades = state => {
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

// GET ALL REPORTS
export const ALLREPORTS = () => async (dispatch) => {
    try {
        dispatch(updateTrades({isLoading: true}))
        await axios.get(API_PATH + '/reports/docs/', CONFIG)
            .then((res) => {
                dispatch(updateTrades({isLoading: false, allReports: res.data}))
            })
            .catch(err => {
                console.log(err);
                dispatch(updateTrades({isLoading: false}))
            })
            .finally(() => {
                dispatch(updateTrades({isLoading: false}))
            })
    } catch (err) {
        console.log(err);
    }
}

