import axios from 'axios'
import {PROPERT_LIST_FAIL, PROPERT_LIST_SUCCESS, PROPERT_LIST_REQUEST} from './types'

export const listProperties = ()=> async (dispatch)=>{
    try {
        dispatch({
            type: PROPERT_LIST_REQUEST,
        })
        const {data} = await axios.get("/api/v1/properties/all/")
        dispatch({
            type: PROPERT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PROPERT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error
        })
    }
}