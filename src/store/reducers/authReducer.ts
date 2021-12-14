import { AuthAction } from "../types";

const initialState = {
    currentUser: null,
    authorizedUsers: [
        { 
            id: "1", 
            firstName: "Nika", 
            secondName: "Tarbeeva", 
            email: "nikareact@g.com", 
            password: "1234567"
        }
    ],
    error: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthAction.LOGIN: 
            return onLoginUser(state, action.payload)
        case AuthAction.LOGOUT:
            return onLogoutUser(state)
        default: 
            return state;
    }
}

const onLoginUser = (state, payload) => {
   const { user } = payload;
   const checkUser = state.authorizedUsers.find((u) => { 
    return u.password === user.password && u.email === user.email;
    });
    return {
        ...state,
        currentUser: checkUser ?  {
            ...checkUser
        } : null,
        error: checkUser ? null : 'Check your email and password',
    }
}

const onLogoutUser = (state) => {
    return {
        ...state,
        currentUser: null,
    }
}

export default authReducer;