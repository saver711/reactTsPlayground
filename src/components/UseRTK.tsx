/////////// IMPORTS
///
// import styles from './UseRTK.module.css'
import { useDispatch, useSelector } from "react-redux"
import {RootState} from '../store/store'
///
/////////// Types
///

import { FormEvent, useState } from "react"
import { Todo_TP } from "../sharedValuesAndFunctions"
import { todoActions } from "../store/slices/todoSlice"
import { Wrapper } from "./Wrapper"

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const UseRTK = () => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const dispatch = useDispatch()
  const todos = useSelector((state: RootState) => state.todoReducer)
  
  ///
  /////////// STATES
  ///
  const [inputValue, setInputValue] = useState("")
  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// IF CASES
  ///

  ///
  /////////// FUNCTIONS & EVENTS
  ///
  const toggleComplation = (todoId: Todo_TP["id"]) => dispatch(todoActions.toggleTodo(todoId))

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedValue = inputValue.trim()
    trimmedValue &&
      dispatch(
        todoActions.addTodo({
          completed: false,
          id: crypto.randomUUID(),
          text: trimmedValue,
        })
      )
  }

    const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value)
    }
  ///
  return (
    <Wrapper>
      <h4>Using RTK</h4>
      <form onSubmit={addTodo} action="">
        <input
          title="x"
          value={inputValue}
          onChange={inputChangeHandler}
          type="text"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {!todos.length && <p>No Todos</p>}
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={toggleComplation.bind(null, todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              backgroundColor: "#ddd",
              marginBottom: 10,
              padding: "3px 6px",
              borderRadius: 3,
              color: '#333'
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
