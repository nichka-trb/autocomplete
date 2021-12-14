import { AuthAction } from "../types"

export const loginUser = (user) => {
    return {
        type: AuthAction.LOGIN,
        payload: { user },
    }
}

export const logoutUser = () => {
    return {
        type: AuthAction.LOGOUT,
    }
}