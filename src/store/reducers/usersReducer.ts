import { UsersAction } from "../types";

const initialState = {
    users: [
        { id: "1", firstName: 'Nika', lastName: 'Tar', email: 'nika@g.com'},
        { id: "2", firstName: 'Dima', lastName: 'Pan', email: 'pan@g.com'},
    ],
}

const usersReducer = (state = initialState , action) => {
        switch (action.type) {
            case UsersAction.ADD_USER:
                return onAddUser(state, action.payload)
            case UsersAction.DELETE_USER:
                return onDeleteUser(state, action.payload)
            default:
                return state;
        }

}

const onAddUser = (state, payload) => {
    return {
        ...state,
        users: [...state.users, payload.user],
    }
};

const onDeleteUser = (state, payload) => {
    const newUsers = state.users.filter((user) => {
        return user.id !== payload.id
    });
    return {
        ...state,
        users: [...newUsers],
    }
}

export default usersReducer;

