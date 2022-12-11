/////////// IMPORTS
///
// import classes from './DebounceAndThrottle.module.css'
import { ChangeEvent, useState } from "react"
import { Wrapper } from "./Wrapper"
///
/////////// Types
///
type CallsType = {
  raw: number
  debounced: number
  throttled: number
}
/////////// HELPER VARIABLES & FUNCTIONS
///
let debounceTimeout: number
let throttlePause: boolean = false
let throttleTriggeredOnce: boolean = false
///
export const DebounceAndThrottle = () => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///
  const [searchValue, searchValueUpdater] = useState<string>("")
  const [calls, callsUpdater] = useState<CallsType>({
    raw: 0,
    debounced: 0,
    throttled: 0,
  })
  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// IF CASES
  ///

  ///
  /////////// EVENTS
  ///

  ///
  /////////// FUNCTIONS
  ///
  // updater
  const updater = (prop: string) =>
    callsUpdater((prev: CallsType) => ({
      ...prev,
      [prop]: prev[prop as keyof typeof prev] + 1,
    }))
  // Handler
  const searchValueChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    searchValueUpdater(value)
    //----------------------------
    updater("raw")
    //--------------------------
    debounce(() => updater("debounced"), 1300)
    throttle(() => updater("throttled"), 1300, true)
  }

  // Debounce
  const debounce = (callbackFunc: () => void, delay: number) => {
    debounceTimeout && clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => callbackFunc(), delay)
  }
  // Throttle
  const throttle = (
    callbackFunc: () => void,
    delay: number,
    triggerFirstHit?: boolean
  ) => {
    triggerFirstHit && !throttleTriggeredOnce && callbackFunc()
    if (throttlePause) return

    throttlePause = true
    setTimeout(() => {
      callbackFunc()
      throttlePause = false
    }, delay)
    throttleTriggeredOnce = true
  }
  ///
  return (
    <Wrapper>
      <h4>DebounceAndThrottle</h4>
      <input
        onChange={searchValueChangeHandler}
        value={searchValue}
        type="search"
        placeholder="search"
      />
      <p>Row {calls.raw}</p>
      <p>debounced {calls.debounced}</p>
      <p>throttled {calls.throttled}</p>
    </Wrapper>
  )
}
