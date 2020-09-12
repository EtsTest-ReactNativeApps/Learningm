import { combineReducers } from 'redux';
import {userReducer} from './user_reducer';


export const rootreducer = combineReducers({
    user:userReducer
})