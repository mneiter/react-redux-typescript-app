import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    console.log({users, error, loading});
    
    return (
        <div>UserList</div>
  )
}

export default UserList