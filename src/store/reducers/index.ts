import {combineReducers} from 'redux';
import { todoReducer } from './todoReducer';
import { userReduser } from './userReducer';

export const rootReducer = combineReducers({
    user: userReduser,
    todo: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>;