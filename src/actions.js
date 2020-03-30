import {
    CHANGE_SEARCH_FIELD,
    REQUEST_DATA_PENDING,
    REQUEST_DATA_SUCCESS,
    REQUEST_DATA_FAILED
} from './constants.js';
export const setSearchField = (text) => {
    console.log("text : ", text)
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }

}

export const requestData = (dispatch) => {
    dispatch({type : REQUEST_DATA_PENDING});
    fetch('https://jsondata').then(response => response.json())
    .then(data => dispatch({type:REQUEST_DATA_SUCCESS, payload:data}))
    .catch(error => dispatch({type:REQUEST_DATA_FAILED, payload: error}))
}