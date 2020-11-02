import { combineReducers } from 'redux';
import {userReducer} from './user_reducer';
import {levelReducer} from './level_reducer'
import { levelContentReducer } from './levelContent_reducer';
import { userProgressReducer } from './userProg_reducer';
import {feedBackReducer} from './feedback_reducer'
export const rootreducer = combineReducers({
    user:userReducer,
    levelsData:levelReducer,
    levelContent: levelContentReducer,
    userProgress: userProgressReducer,
    feedback:feedBackReducer
})