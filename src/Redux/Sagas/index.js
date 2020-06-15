import { takeLatest, all } from 'redux-saga/effects';
import { dataRead, dataCreate } from './DataSaga';

export default function * root () {
    yield all([
        takeLatest('DATA_READ_REQUEST', dataRead),
        takeLatest('DATA_CREATE_REQUEST', dataCreate),
    ]);
}
