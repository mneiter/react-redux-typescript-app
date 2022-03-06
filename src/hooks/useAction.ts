import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreators from '../store/action-creators'

export const useAction = () =>{
    const disputch = useDispatch()
    return bindActionCreators(ActionCreators, disputch);
}