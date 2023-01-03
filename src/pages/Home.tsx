/////////// IMPORTS
///
// import classes from './Home.module.css'
import { useCallback, useId, useMemo, useState } from "react"
import { Button } from "../components/button/Button"
import { CodeSplitting } from "../components/code splitting/CodeSplitting"
import { DebounceAndThrottle } from "../components/DebounceAndThrottle"
import { NestedList } from "../components/multilevel dropdown menu/NestedList"
import { ReactWithTs } from "../components/react with ts/ReactWithTs"
import { TryContext } from "../components/TryContext"
import { UnderstandingUseReducer } from "../components/UnderstandingUseReducer"
import { UseRTK } from "../components/UseRTK"
import { Wrapper } from "../components/Wrapper"
import { multiDropdownData } from "../DummyData"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Home = () => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const [counter, setCounter] = useState(0)
  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// IF CASES
  ///

  ///
  /////////// FUNCTIONS & EVENTS
  ///
  function computeSum(n: number) { //heavy calculation
    let sum = 0
    for (let i = 0; i < n; i++) {
      sum += i
    }
    return sum
  }
  // try to remove useMemo and see the lag after clicking the Custom Button
  const result = useMemo(() => computeSum(1000000000), [])

  ///
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <DebounceAndThrottle />
        <UnderstandingUseReducer />
        <ReactWithTs />
        <CodeSplitting />

        <Wrapper>
          <NestedList data={multiDropdownData} />
        </Wrapper>

        <TryContext />

        <Wrapper>
          <h4>useMemo, useCallback, memo</h4>
          <Button
            small
            onClick={useCallback(() => setCounter((prev) => prev + 1), [])}
          >
            Custom Button
          </Button>
          <p>Counter: {counter}</p>
          <p>This number has to do with useMemo: {result}</p>
        </Wrapper>
        <UseRTK/>

      </div>
    </>
  )
}
