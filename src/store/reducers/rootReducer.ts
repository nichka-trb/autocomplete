import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    usersReducer,
    authReducer,
})

export default rootReducer;