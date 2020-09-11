import {takeEvery} from 'redux-saga/effects';
import {CREATE_USER, GET_USER} from './actions';

function* handler(){
    yield takeEvery(GET_USER,getAllUserInfo);
}

function getAllUserInfo(action){
    try{

    }catch(err){

    }
}

export {handler}