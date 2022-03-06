import React, { useEffect } from 'react'
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: React.FC = () => {
    const { todos, error, loading, page, limit } = useTypedSelector(state => state.todo)
    const { fetchTodo, setTodoPage } = useAction()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodo(page, limit)
    }, [page]);

    if (loading) {
        return <h1>data is loading ...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <div style={{ display: "flex" }}>
                {pages.map((p) => (
                    <div onClick={() => setTodoPage(p)}
                        style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: 10 }}
                        key={p}>
                        {p}
                    </div>
                ))}
            </div>

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