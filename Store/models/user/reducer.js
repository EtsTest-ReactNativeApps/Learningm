import {GET_USER_INFO_REQUEST,POST_USER_INFO_REQUEST} from "./action";

const initialState={
    id:null,
    firstName:null,
    lastName:null,
    email:null,
    password:null
}

const reducer = (state =initialState,action)=>{
    switch(action.type){
        case CREATE_USER:{
            const {id,firstName,lastName,email,password} =action.payload;
            return {
               id,
               firstName,
               lastName,
               email,
               password
            };
        }

        default :
            return state
    }
}

export {reducer};