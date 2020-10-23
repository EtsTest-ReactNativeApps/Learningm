import {
    SIGNUP_REQUEST,
    LOGIN_REQUEST,
    LOGOUT_REQUEST,
    LANGUAGE_REQUEST,
    LEVEL_REQUEST,
    LEVELCONTENT_REQUEST
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


export {
    signUpRequest,
    logInRequest,
    logOutRequest,
    languageRequest,
    levelRequest,
    levelContentRequest
}