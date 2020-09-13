
import { takeEvery} from "redux-saga/effects";
import {signUpHandler,logInHandler} from './userSaga'

export function* sagas(){
    // yield takeEvery('SIGNUP_REQUEST',signUpHandler);
    yield takeEvery('LOGIN_REQUEST',logInHandler);
}