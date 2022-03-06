export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

export enum UserAvtionType{
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

interface FetchUserAction {
    type: UserAvtionType.FETCH_USERS;
}
interface FetchUserSuccessAction {
    type: UserAvtionType.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUserErrorAction {
    type: UserAvtionType.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction
