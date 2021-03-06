const initialState = {
    currentUser: null,
    currentUserFavorites: []
}

export const user = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
        case 'USER_STATE_CHANGE':
            return {
                ...state,
                currentUser: action.currentUser,
            }
        case 'USER_GET_FAVORITES':
            return {
                ...state,
                currentUserFavorites: [...state.currentUserFavorites, action.currentUserFavorites],
            }
        case 'USER_ADD_FAVORITES':
            return {
                ...state,
                currentUserFavorites: [...state.currentUserFavorites, action.addedItem]
            }
        case 'USER_DELETE_FAVORITES':
            return {
                ...state,
                currentUserFavorites: [...state.currentUserFavorites.slice(0, action.i), ...state.currentUserFavorites.slice(action.i +1)]
            }
        case 'USER_LOG_OUT':
            return {
                ...state,
                currentUser: null,
                currentUserFavorites: []
            }
    }
}