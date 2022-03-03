import {combineReducers} from 'redux';
import { userReduser } from './userReducer';

export const rootReducer = combineReducers({
    user: userReduser,
})

export type RootState = ReturnType<typeof rootReducer>;