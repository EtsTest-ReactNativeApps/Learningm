import {
    SIGNUP_REQUEST,
    LOGIN_REQUEST,
    RESETUSER_REQ,
    RESETLEVEL_REQ,
    RESETLEVELCONTENT,
    LANGUAGE_REQUEST,
    LEVEL_REQUEST,
    LEVELCONTENT_REQUEST,
    SETUSERPROGRESS,
    UPDATEUSERPROG_REQUEST
} from '../constants/constants';

const signUpRequest = (auth) =>({
    type:SIGNUP_REQUEST,
    payload:auth
});
const languageRequest=(data) =>({
    type:LANGUAGE_REQUEST,
    payload:data
})

const logInRequest = (auth) =>({
    type:LOGIN_REQUEST,
    payload:auth
});

const logOutRequest =(data) =>({
    type:RESETUSER_REQ,
    payload:data
})
const resetLevelReq =(data) =>({
    type:RESETLEVEL_REQ,
    payload:data
})
const resetLevelContent =(data) =>({
    type:RESETLEVELCONTENT,
    payload:data
})

const levelRequest =(data) =>({
    type:LEVEL_REQUEST,
    payload:data
})

const levelContentRequest =(data) =>({
    type:LEVELCONTENT_REQUEST,
    payload:data
})
const setUserProgressRequest = (data) => ({
    type: SETUSERPROGRESS,
    payload:data
})
const updateUserProgess = (data) => ({
    type: UPDATEUSERPROG_REQUEST,
    payload:data
})
export {
    signUpRequest,
    logInRequest,
    logOutRequest,
    resetLevelReq,
    resetLevelContent,
    languageRequest,
    levelRequest,
    levelContentRequest,
    setUserProgressRequest,
    updateUserProgess
}