import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActionCreators from '../store/action-creators/user'

export const useAction = () =>{
    const disputch = useDispatch()
    return bindActionCreators(UserActionCreators, disputch);
}