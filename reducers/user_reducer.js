const initialState = {}

export const userReducer = (state=initialState,action)=>{
     console.log("reducer",action.type)
    switch(action.type){
        case 'SIGNUP_SUCCESS':
            return {
                ...action.payload,
                isLogedIN:true
            }
            break;
        case 'SIGNUP_FAILURE':
            return {
                ...action.payload,
                isLogedIN:false
            }
            break;
        case 'LOGIN_SUCCESS':
            console.log(action.payload)
            return {
                ...action.payload,
                isLogedIN:true
            }
            break;
        case 'LOGIN_FAILURE':
            return{
                ...action.payload,
                isLogedIN:false
            }
            break;

        case 'CHOOSE_LANG_SUCCESS':
            return{
                ...action.payload,
                isLanguageChosen:true
            }
            break;
        case 'CHOOSE_LANG_FAILURE' :
            return{
                ...action.payload,
                isLanguageChosen:false
            }
            break;
    }
    return state
}