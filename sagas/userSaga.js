import {call, put} from "redux-saga/effects";
import ApiUser from '../apis/index';


export function* signUpHandler(action){
    try{
        // console.log("action in usersaga ==>>",action)
        const user = yield call(ApiUser.signUp,action)
        console.log("user data",user)
        yield put({
            type:'SIGNUP_SUCCESS',
            payload:user.data
        });
    }catch(err){
        yield put({
            type:'SIGNUP_FAILURE',
            payload:err
        })
    }
}


export function* logInHandler(action){
    try{
        // console.log("action in sagaa",action)
        const user = yield call(ApiUser.fetchUser,action)
        console.log("user data",user)
        yield put({
            type:'LOGIN_SUCCESS',
            payload:user.data
        })
    }catch(err){
        yield put({
            type:'LOGIN_FAILURE',
            payload:err
        })
    }
}