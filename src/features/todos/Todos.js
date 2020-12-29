import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeTodo, selectTodos, addTodo} from './todosSlice'
import {useState} from 'react'

const Todos = () => {

    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()
    const [todoText, setTodoText] = useState('')

    return (
        <div className="todos">
            <h2>Todos</h2>
            {
                todos.map(todo => (
                    <div key={todo.id}>
                    <h5>{todo.id}</h5>
                    <h3>{todo.text}</h3>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                    </div>
                ))
            }
            <hr />
            <label>Todo text:</label>
            <input type="text" onChange={e => setTodoText(e.target.value)}/>
            <p>{todoText}</p>
            <button onClick={() => dispatch(addTodo({id: todos.length +1, text: todoText}))}>Add todo</button>
        </div>
    )
}

export default Todos
