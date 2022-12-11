/////////// IMPORTS
///
import { ReactNode } from 'react'
import classes from './List.module.css'
///
/////////// Types
///
type ListProps_TP<T> = {
    items: T[],
    renderItemAsReactNodeNotT: (item: T) => ReactNode
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const List = <T, >({ items, renderItemAsReactNodeNotT }: ListProps_TP<T>) => {
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
      {items.map((item, i) => (
        <li key={i}>{renderItemAsReactNodeNotT(item)}</li>
        // <li key={i}>{item as ReactNode}</li> ✅ correct as well (i will not need the function that returns ReactNode)
      ))}
    </ul>
  )
}