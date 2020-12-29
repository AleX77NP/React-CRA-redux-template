import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { of } from 'rxjs';
import {ajax} from 'rxjs/ajax'
import {map, catchError, take} from 'rxjs/operators'

const fetchAll = async () => {
    const sub$ = ajax.getJSON(`https://jsonplaceholder.typicode.com/todos`)
    return new Promise((resolve, reject) => {
        sub$.pipe(
            map(x => [...x, {id: 100000, title: '1000000. todo', completed:false, userId:100000}].filter(t => t.id > 100)),
            take(1),
        ).subscribe(data => resolve(data), err => reject(err))
    })
}

export const fetchTodos = createAsyncThunk(
    'user/todos',
    async () => {
    const res = await fetchAll();
    console.log(res)
    return res
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