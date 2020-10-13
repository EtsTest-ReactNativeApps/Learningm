import {
    SIGNUP_REQUEST,
    LOGIN_REQUEST,
    UPDATE_REQUEST,
    DELETE_REQUEST,
    LANGUAGE_REQUEST
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

// const updateRequest = (data) =>({
//     type:UPDATE_REQUEST,
//     payload:data
// });

// const  deleteRequest = (data) =>({
//     type:DELETE_REQUEST,
//     payload:data
// });


export {
    signUpRequest,
    logInRequest,
    languageRequest
    // updateRequest,
    // deleteRequest
}