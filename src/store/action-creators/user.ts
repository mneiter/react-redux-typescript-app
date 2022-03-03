import { Dispatch } from 'redux'
import axios from 'axios' 
import { UserAction, UserAvtionType } from '../../types/todo'


export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({type: UserAvtionType.FETCH_USERS})
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({type: UserAvtionType.FETCH_USERS_SUCCESS, payload: response.data})
    } catch (e) {
        dispatch({
            type: UserAvtionType.FETCH_USERS_ERROR, 
            payload: 'An error occurred while trying to get users.'
        })
    }
  }
}
  