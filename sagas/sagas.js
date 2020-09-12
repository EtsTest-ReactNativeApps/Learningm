
import { takeEvery} from "redux-saga/effects";
import {signUpHandler} from './userSaga'

export function* sagas(){
    yield takeEvery('SIGNUP_REQUEST',signUpHandler);
}