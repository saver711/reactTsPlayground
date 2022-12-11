/////////// IMPORTS
///
// import classes from './ReactWithTs.module.css'
///
/////////// Types
///

import { useEffect } from "react"
import { Wrapper } from "../Wrapper"
import { Heading } from "./Heading"
import { List } from "./List"

/////////// HELPER VARIABLES & FUNCTIONS
///
const items = ["😒 Ahmed", 12]

///
export const ReactWithTs = () => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

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

  ///
  return (
    <Wrapper>
      <h4>ReactWithTs</h4>
      <Heading />
      <List items={items} renderItemAsReactNodeNotT={(item) => item} />
    </Wrapper>
  )
}
