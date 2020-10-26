import {
    SIGNUP_REQUEST,
    LOGIN_REQUEST,
    LOGOUT_REQUEST,
    LANGUAGE_REQUEST,
    LEVEL_REQUEST,
    LEVELCONTENT_REQUEST,
    USERPROGRESS_REQUEST,
    UPDATEUSERPROGESS_REQST
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
    type:LOGOUT_REQUEST,
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
const getUserProgressRequest = (data) => ({
    type: USERPROGRESS_REQUEST,
    payload:data
})
const updateUserProgess = (data) => ({
    type: UPDATEUSERPROGESS_REQST,
    payload:data
})
export {
    signUpRequest,
    logInRequest,
    logOutRequest,
    languageRequest,
    levelRequest,
    levelContentRequest,
    getUserProgressRequest,
    updateUserProgess
}