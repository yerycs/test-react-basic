import { call, put, all } from 'redux-saga/effects';
import { creators as DataActions } from "../Reducers/Data";
import ApiData from "Api/ApiData";

export function * dataRead() {
    try {
        const response = yield call(ApiData.dataRead);
        if(response.status === 200) {
            yield put(DataActions.dataReadSuccessResponse(response.data));
        }
    } catch(e) {
        yield put(DataActions.dataReadFailureResponse(e));
    }
}

export function * dataCreate({payload}) {
    try {
        const response = yield call(ApiData.dataCreate, payload);
        if(response.status === 201) {
            yield all([
                put(DataActions.dataCreateSuccessResponse(response.data)),
                put(DataActions.dataReadRequest())
            ]);
        }
    } catch(e) {
        yield put(DataActions.dataCreateFailureResponse(e));
    }
}
