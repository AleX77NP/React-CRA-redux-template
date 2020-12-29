import {createSlice} from '@reduxjs/toolkit'

export const todosSlice  = createSlice({
    name: 'todos',
    initialState: {
        data: [
            {id:1, text: "first todo"},
            {id:2, text: "second todo"},
            {id:3, text: "third todo"}

        ]
    },
    reducers: {
        addTodo: (state, action) => {
            const {id, text} = action.payload
            state.data.push({id, text})
        },
        removeTodo: (state, action) => {
            console.log(action.payload)
            state.data = state.data.filter((elem) => elem.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todosSlice.actions

export const selectTodos = state => state.todos.data

export default todosSlice.reducer