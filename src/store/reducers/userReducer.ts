import { UserAction, UserAvtionType, UserState } from "../../types/todo";

const initialUser: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReduser = (state = initialUser, action: UserAction): UserState => {
    switch (action.type) {
        case UserAvtionType.FETCH_USERS:
            return {loading: true, error: null, users: []};
        case UserAvtionType.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload};
        case UserAvtionType.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []};
        default:
            return state;
    }
}