import React, { useEffect } from 'react'
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: React.FC = () => {
    const {todos, error, loading, page, limit} = useTypedSelector(state => state.todo)
    const {fetchTodo, setTodoPage} = useAction()

    useEffect(() =>{        
        fetchTodo()
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
            {todos.map((todo) => (
                    <div
                        key={todo.id}>
                       <h3>{todo.id} - {todo.title}</h3>
                    </div>
                    ))}
        </div>
  )
}

export default TodoList