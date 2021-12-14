import { v1 as uuidv1 } from 'uuid';
import { UsersAction } from '../types';


export const addUser = (newUser) => {
    const id = uuidv1();
    const user = {
        ...newUser,
        id,
    }
    return {
        type: UsersAction.ADD_USER,
        payload: { user },
    }
};

export const deleteUser = (id) => {
    return {
        type: UsersAction.DELETE_USER,
        payload: { id },
    }
};
