/////////// IMPORTS
///
import styles from "./NestedList.module.css"
import { MenuItem } from "../../DummyData"
import { useState } from "react"

///
/////////// Types

///
type DropProps_TP = {
  data: MenuItem[]
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const NestedList = ({ data }: DropProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///
  const [expanded, setExpanded] = useState(true)
  const [value, setValue] = useState('')
  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// IF CASES
  ///

  ///
  /////////// FUNCTIONS & EVENTS
  ///
  const toggleVisibility = () => setExpanded((prev) => !prev)
  const changeValueHandler = (val:string) => setValue(val)
  ///
  return (
    
      <ul className={styles.menu}>
        {data.map((item) => (
          <li
            key={item.id}
            className={`${item.submenu ? styles.hasSubmenu : ""} ${
              item.submenu && expanded ? styles.opened : ""
            }`}
          >
            <div
              onClick={item.submenu ? toggleVisibility : changeValueHandler.bind(null, item.label)}
            >
              {item.label}
            </div>
            {item.submenu && <NestedList data={item.submenu} />}
          </li>
        ))}
      </ul>
    
  )
}
