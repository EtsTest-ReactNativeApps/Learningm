
import {all,fork,takeEvery} from "redux-saga/effects";
import {signUpHandler,logInHandler,languageChooseHandler} from './userSaga'

function* userSignup(){
    yield takeEvery('SIGNUP_REQUEST',signUpHandler);
}
function* languageSaga(){
    yield takeEvery('LANGUAGE_REQUEST',languageChooseHandler)
}

function* userLogin(){
    yield takeEvery('LOGIN_REQUEST',logInHandler);
}
export function* sagas(){
    yield all([
        fork(userSignup),
        fork(userLogin),
        fork(languageSaga),
    ])
}