export const feedBackReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FEEDBACK_SUCCESS':
            return {
                ...action.payload
            }
            break;
        case 'FEEDBACK_FAILURE':
            return {
                ...action.payload
            }
            break;
    }
    return state
}