
import {all,fork,take,takeEvery} from "redux-saga/effects";
import {signUpHandler,logInHandler,logOutHandler,languageChooseHandler} from './userSaga';
import { getLevelHandler, getLevelContentHandler,resetLevelContentHandler,resetLevelHandler } from './levelSaga';
import {updateProgressHandler,setUserProgressHandler,feedBackHandler} from './userProgressSaga'

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
    yield takeEvery('RESETUSER_REQ',logOutHandler);
}
function* levelReset() {
    yield takeEvery('RESETLEVEL_REQ', resetLevelHandler);
}
function* levelContentReset() {
    yield takeEvery('RESETLEVELCONTENT', resetLevelContentHandler);
}
function* levelSaga(){
    yield takeEvery('LEVEL_REQUEST',getLevelHandler);
}
function* levelContentSaga(){
    yield takeEvery('LEVELCONTENT_REQUEST',getLevelContentHandler);
}
function* updateProgress() {
    yield takeEvery('UPDATEUSERPROG_REQUEST', updateProgressHandler);
}
function* feedbcakSaga() {
    yield takeEvery('FEEDBACK_SUBMIT', feedBackHandler);
}

function* setProgressSaga() {
    yield takeEvery('SETUSERPROGRESS', setUserProgressHandler);
}
export function* sagas(){
    yield all([
        fork(userSignup),
        fork(userLogin),
        fork(userLogout),
        fork(levelReset),
        fork(levelContentReset),
        fork(languageSaga),
        fork(levelSaga),
        fork(levelContentSaga),
        fork(setProgressSaga),
        fork(updateProgress),
        fork(feedbcakSaga),
    ])
}