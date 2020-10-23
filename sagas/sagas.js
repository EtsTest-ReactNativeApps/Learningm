
import {all,fork,takeEvery} from "redux-saga/effects";
import {signUpHandler,logInHandler,logOutHandler,languageChooseHandler} from './userSaga';
import {getLevelHandler,getLevelContentHandler} from './levelSaga';

function* userSignup(){
    yield takeEvery('SIGNUP_REQUEST',signUpHandler);
}
function* languageSaga(){
    yield takeEvery('LANGUAGE_REQUEST',languageChooseHandler)
}

function* userLogin(){
    yield takeEvery('LOGIN_REQUEST',logInHandler);
}
function* userLogout(){
    yield takeEvery('LOGOUT_REQUEST',logOutHandler);
}
function* levelSaga(){
    yield takeEvery('LEVEL_REQUEST',getLevelHandler);
}
function* levelContentSaga(){
    yield takeEvery('LEVELCONTENT_REQUEST',getLevelContentHandler);
}
export function* sagas(){
    yield all([
        fork(userSignup),
        fork(userLogin),
        fork(userLogout),
        fork(languageSaga),
        fork(levelSaga),
        fork(levelContentSaga)
    ])
}