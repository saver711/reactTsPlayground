import { createSlice } from '@reduxjs/toolkit'
import { Todo_TP } from '../../sharedValuesAndFunctions'

// TYPES
type addTodoAction = {type?: string, payload: Todo_TP}
type toggleTodoAction = {type?: string, payload: Todo_TP['id']}

const initialState: Todo_TP[] = []

const todoSlice = createSlice({
    name: 'todo-slice',
    initialState,
    reducers:{
        addTodo(state, action: addTodoAction){
            state.push(action.payload)
        },
        toggleTodo(state, action: toggleTodoAction){
            const targetedTodo = state.find(todo=> todo.id === action.payload)
            if (!targetedTodo) return
            targetedTodo.completed = !targetedTodo.completed
        }
    }
})

export const todoActions = todoSlice.actions
export const todoReducer = todoSlice.reducer