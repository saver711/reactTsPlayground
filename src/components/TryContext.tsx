/////////// IMPORTS
///
// import styles from './ContextPreview.module.css'
///
/////////// Types
///

import { useContext } from "react"
import { AuthContext } from "../contexts/authcontext"
import { Button } from "./button/Button"
import { Wrapper } from "./Wrapper"

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const TryContext = ()=>{
/////////// VARIABLES
///
const ctx = useContext(AuthContext)
const isLoggedIn = ctx.isLoggedIn
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
const loginHandler = ctx.login
const logoutHandler = ctx.logout
///
return (
  <Wrapper>
    <h4>context API</h4>
    <p>{isLoggedIn ? "isLoggedIn" : "NotLoggedIn"}</p>
    <Button
      danger={isLoggedIn}
      onClick={isLoggedIn ? logoutHandler : loginHandler}
    >
      {isLoggedIn ? "Logout" : "Login"}
    </Button>
  </Wrapper>
)
}