export const selectCurrentUser = (state) => {
    return state.authReducer.currentUser;
}

export const selectAuthError = (state) => {
    return state.authReducer.error;
}