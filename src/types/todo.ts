
export enum TodoActionType{
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_TODOS_PAGE = "SET_TODOS_PAGE"
}
interface FetchTodoAction {
    type: TodoActionType.FETCH_TODOS
}
interface FetchTodoSuccessAction {
    type: TodoActionType.FETCH_TODOS_SUCCESS
    payload: any[]
}
interface FetchTodoErrorAction {
    type: TodoActionType.FETCH_TODOS_ERROR
    payload: string
}
interface SetTodoPageAction {
    type: TodoActionType.SET_TODOS_PAGE
    payload: number
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPageAction

export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}