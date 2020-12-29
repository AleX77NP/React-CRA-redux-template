import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk(
    'user/todos',
    async () => {
    console.log("fetching...")
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data = await res.json()
    console.log(data)
    return data;
    }
);

export const todosSlice  = createSlice({
    name: 'todos',
    initialState: {
        data: [],
        loading: false,
        error : null
    },
    reducers: {
        addTodo: (state, action) => {
            const {id, title} = action.payload
            state.data.push({id, title, completed: false, userId: 1})
        },
        removeTodo: (state, action) => {
            console.log(action.payload)
            state.data = state.data.filter((elem) => elem.id !== action.payload)
        }
    },
    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
            state.loading = true
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        [fetchTodos.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const {addTodo, removeTodo} = todosSlice.actions

export const selectTodos = state => state.todos

export default todosSlice.reducer