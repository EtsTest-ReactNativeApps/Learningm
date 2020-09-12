import {call, put, select} from "redux-saga/effects";
import ApiUser from '../apis/index';


export function* signUpHandler(action){
    try{
        const user = yield call(ApiUser.signUp,action)
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