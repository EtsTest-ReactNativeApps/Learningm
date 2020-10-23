const initialState = {}

export const levelContentReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LEVELCONTENT_SUCCESS':
            return {
                ...action.payload,   
            }
            break;
        case 'LEVELCONTENT_FAILURE':
            return{
                ...action.payload,
            }
            break;
    }
    return state
}