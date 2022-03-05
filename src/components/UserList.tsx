import React, { useEffect } from 'react'
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';


const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useAction()

    useEffect(() =>{        
        fetchUsers()
    }, []);

    if(loading)
    {
        return <h1>data is loading ...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    
    return (
        <div>
            {users.map((user) => (
                    <div
                        key={user.id}>
                       <h2>{user.name}</h2>
                    </div>
                    ))}
        </div>
  )
}

export default UserList