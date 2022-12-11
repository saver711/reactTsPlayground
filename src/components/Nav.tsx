/////////// IMPORTS
///
import classes from './Nav.module.css'
import { NavLink } from "react-router-dom"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Nav = ()=>{
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
  <ul>
    <li>
      <NavLink to="/">{({ isActive }) => <span className={isActive ? classes.active : classes.span}>App home</span>}</NavLink>
    </li>
    <li>
      <NavLink to="/about">{({ isActive }) => <span className={isActive ? classes.active : classes.span}>About</span>}</NavLink>
    </li>

  </ul>
)
}