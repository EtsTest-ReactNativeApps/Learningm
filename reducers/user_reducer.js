const initialState ={}

export const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'SIGNUP_SUCCESS':
            return {
                ...action.payload,
                isLogedIn:true
            }
            break;
        case 'SIGNUP_FAILURE':
            return {
                ...action.payload,
            }
            break;
    }
    return state
}