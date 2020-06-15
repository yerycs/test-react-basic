import { createActions, handleActions } from 'redux-actions';

const initState = {
    fetching: false,
    error: null,
    data: null
};

export const creators = createActions({
    DATA_READ_REQUEST: () => ({}),
    DATA_READ_SUCCESS_RESPONSE: (response) => ({response}),
    DATA_READ_FAILURE_RESPONSE: (response) => ({response}),
    DATA_CREATE_REQUEST: ({data}) => ({data}),
    DATA_CREATE_SUCCESS_RESPONSE: (response) => ({response}),
    DATA_CREATE_FAILURE_RESPONSE: (response) => ({response}),
});

const fetchingReducer = (state) => {
    return {...state, fetching: true, error: null};
};

const failureReducer = (state, {payload}) => {
    return {...state, fetching: false, error: payload}
};

const readDataReducer = (state, {payload}) => {
    return {...state, fetching: false, data: payload.response}
};

const createDataReducer = (state) => {
    return {...state, fetching: false}
};

export default handleActions (
    {
        DATA_READ_REQUEST: fetchingReducer,
        DATA_READ_SUCCESS_RESPONSE: readDataReducer,
        DATA_READ_FAILURE_RESPONSE: failureReducer,
        DATA_CREATE_REQUEST: fetchingReducer,
        DATA_CREATE_SUCCESS_RESPONSE: createDataReducer,
        DATA_CREATE_FAILURE_RESPONSE: failureReducer,
    },
    initState
);
