/////////// IMPORTS
///
import { FormEvent, Reducer, useReducer, useState } from "react"
import { Todo_TP } from "../sharedValuesAndFunctions"
import { Wrapper } from "./Wrapper"
///
/////////// Types
///
type barAction_TP = {
  type: "plus" | "minus"
  val: number
}

type barState_TP = {
  width: number
}
/////////// HELPER VARIABLES & FUNCTIONS
///
const initialState: barState_TP = { width: 20 }

const reducer = (state: barState_TP, action: barAction_TP) => {
  const { width: barWidth } = state
  const { type: actionType, val: comingVal } = action
  switch (actionType) {
    case "plus":
      return { ...state, width: barWidth + comingVal }
    case "minus":
      if (barWidth <= comingVal) return state
      return { ...state, width: barWidth - comingVal }
    default:
      return state
  }
}

// TODO
type Action_TP = { type: "TOGGLE"; id: string } | { type: "ADD"; val: string }

// const todos: Todo_TP[] = [
//   { text: "todo 1", id: crypto.randomUUID(), completed: false },
//   { text: "todo 2", id: crypto.randomUUID(), completed: false },
//   { text: "todo 3", id: crypto.randomUUID(), completed: true },
//   { text: "todo 4", id: crypto.randomUUID(), completed: false },
// ]

const reducerFunctionality = (
  state: Todo_TP[],
  action: Action_TP
): Todo_TP[] => {
  const { type: actionType } = action
  switch (actionType) {
    case "ADD":
      return [
        ...state,
        { text: action.val, id: crypto.randomUUID(), completed: false },
      ]
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

///
export const UnderstandingUseReducer = () => {
  /////////// STATES
  ///
  const [bar, barDispatcher] = useReducer(reducer, initialState)

  // TODO
  const [todosState, todosStateDispatch] = useReducer(reducerFunctionality, [])
  const [inputValue, setInputValue] = useState("")

  //  FUNCTIONS
  // TODO
  const toggleComplation = (todoId: Todo_TP["id"]) =>
    todosStateDispatch({ type: "TOGGLE", id: todoId })

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedValue = inputValue.trim()
    trimmedValue && todosStateDispatch({ type: "ADD", val: trimmedValue })
    setInputValue("")
  }

  const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }
  ///
  return (
    <Wrapper>
      <h4>UnderstandingUseReducer</h4>
      <div
        style={{ background: "teal", height: "30px", width: bar.width }}
      ></div>
      <div style={{ marginTop: "3rem" }}>
        <button onClick={() => barDispatcher({ type: "plus", val: 20 })}>
          Increase bar size
        </button>
        <button onClick={() => barDispatcher({ type: "minus", val: 20 })}>
          Decrease bar size
        </button>
      </div>
      <br />
      {/* TODO */}
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
        {!todosState.length && <p>No Todos</p>}
        {todosState.map((todo) => (
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
              color: "#333",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
