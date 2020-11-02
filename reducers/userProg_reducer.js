const initialState = {}

export const userProgressReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'UPDATEUSERPROG_SUCCESS':
            return {
                ...action.payload,
            }
            break;
        case 'UPDATEUSERPROG_FAILURE':
            return {
                ...action.payload,
            }
            break;
        case 'SETUSERPROG_SUCCESS':
            return {
                ...action.payload
            }
            break;
        case 'SETUSERPROG_FAILURE':
            return {
                ...action.payload
            }
            break;
        case 'LOGOUT_SUCCESS':
            console.log("action in user progress reducer")
            return {
                ...action.payload
            }
            break;
        case 'LOGOUT_FAILURE':
            return{
                ...action.payload
            }
    }
    
    return state
}


