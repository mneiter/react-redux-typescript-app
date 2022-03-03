import {combineReducers} from 'redux';
import { userReduser } from './userReducer';

export const rootReducer = combineReducers({
    users: userReduser,
})