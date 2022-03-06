import { TodoAction, TodoActionType, TodoState } from "../../types/todo";

const initialTodo: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}

export const todoReducer = (state = initialTodo , action: TodoAction): TodoState => {
    
  switch (action.type) {
    case TodoActionType.FETCH_TODOS:
        return {...state, loading: true}
    case TodoActionType.FETCH_TODOS_SUCCESS:
        return {...state, loading: false, todos: action.payload}
    case TodoActionType.FETCH_TODOS_ERROR:
        return {...state, loading: false, error: action.payload}
    case TodoActionType.SET_TODOS_PAGE:
        return {...state, page: action.payload}
    default:
        return state;
  }
}
