import {call, put} from "redux-saga/effects";
import ApiUser from '../apis/index';

export function* getUserProgressHandler(action) {
    try {
        yield put({
            type:'USERPROGRESS_SUCCESS',
            payload:action.payload
        });
    } catch (err) {
        yield put({
            type:'USERPROGRESS_FAILURE',
            payload:err
        });
    }
}

export function* updateUserProgress(action) {
    try {
        yield put({
            type: 'UPDATEUSERPROGRESS_SUCCESS',
            payload: action.payload
        });
    } catch (err) {
        yield put({
            type: 'UPDATEUSERPROGRESS_FAILURE',
            payload: err
        });
    }
}