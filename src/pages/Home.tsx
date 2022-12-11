/////////// IMPORTS
///
// import classes from './Home.module.css'
import { CodeSplitting } from "../components/code splitting/CodeSplitting"
import { DebounceAndThrottle } from "../components/DebounceAndThrottle"
import { ReactWithTs } from "../components/react with ts/ReactWithTs"
import { UnderstandingUseReducer } from "../components/UnderstandingUseReducer"
///
/////////// Types
///


/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Home = ()=>{
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
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
    <DebounceAndThrottle />
    <UnderstandingUseReducer />
    <ReactWithTs />
    <CodeSplitting />
  </div>
)
}