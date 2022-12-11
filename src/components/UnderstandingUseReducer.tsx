/////////// IMPORTS
///
import { Reducer, useReducer } from "react"
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
      throw new Error("what's going on?")
  }
}
///
export const UnderstandingUseReducer = () => {
  /////////// STATES
  ///
  const [bar, barDispatcher] = useReducer(reducer, initialState)
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
    </Wrapper>
  )
}
