import {call, put} from "redux-saga/effects";
import ApiUser from '../apis/index';

export function* getLevelHandler(action){
    try{
        const levels = yield call(ApiUser.fetchLevels, action);
        
        if(levels.data.STS =="200"){
            yield put({
                type:'LEVELREQUEST_SUCCESS',
                payload:levels.data
            });
        }
        else{
            yield put({
                type:'LEVELREQUEST_FAILURE',
                payload:levels.data
            });
        }

    }catch(err){
        yield put({
            type:'LEVELREQUEST_FAILURE',
            payload:err
        })
    }
}

export function* getLevelContentHandler(action){
    try{
        const levelsContents = yield call(ApiUser.fetchLevelContents,action);
        if(levelsContents.data.STS =="200"){
            yield put({
                type:'LEVELCONTENT_SUCCESS',
                payload:levelsContents.data
            });
        }
        else{
            yield put({
                type:'LEVELCONTENT_FAILURE',
                payload:levelsContents.data
            });
        }

    }catch(err){
        yield put({
            type:'LEVELCONTENT_FAILURE',
            payload:err
        })
    }
}