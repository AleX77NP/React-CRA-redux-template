import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeTodo, selectTodos, addTodo, fetchTodos} from './todosSlice'
import {useState, useEffect} from 'react'

const Todos = () => {

    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()
    const [todoText, setTodoText] = useState('')

    return (
        <div className="todos">
            <h2>Todos</h2>
            <h4>Status: {JSON.stringify(todos.loading)}</h4>
            {
               todos.error !== null ? <h2>Error...</h2> : todos.loading ? <h1>Loading...</h1> : todos.data.length ? todos.data.map(todo => (
                    <div key={todo.id}>
                        <h2>{todo.title}</h2>
                    </div>
                )) : <h3>No data...</h3>
            }
            <hr />
            <label>Todo text:</label>
            <input type="text" onChange={e => setTodoText(e.target.value)}/>
            <p>{todoText}</p>
            <button onClick={() => dispatch(addTodo({id: todos.data.length +1, title: todoText}))}>Add todo</button>
            <br />
            <button onClick={() => dispatch(fetchTodos())}>Fetch todos</button>
        </div>
    )
}

export default Todos
