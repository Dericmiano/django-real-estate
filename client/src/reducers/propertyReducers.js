import {PROPERT_LIST_FAIL, PROPERT_LIST_SUCCESS, PROPERT_LIST_REQUEST} from '../actions/types'

export const propertiesListReducer = (state = {properties:[]}, action) =>{
    switch(action.type){
        case PROPERT_LIST_REQUEST:
            return {loading: true, properties:[]}
        case PROPERT_LIST_SUCCESS:
            return {
                loading: false,
                payload: properties.action.payload.results
            };
        case PROPERT_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}