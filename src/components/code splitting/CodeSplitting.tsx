/////////// IMPORTS
///

import { Suspense, useState, useTransition } from "react"
import { lazyLoad } from "../../helpers/lazyLoadComponents"
import { Wrapper } from "../Wrapper"
// import { AdminData } from "./AdminData"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///
const AdminData = lazyLoad(
  "../components/code splitting/AdminData",
  "AdminData"
)
///
export const CodeSplitting = () => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const [isPending, startTransition] = useTransition()
  ///
  /////////// STATES
  ///
  const [isAdmin, setIsAdmin] = useState(false)
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
      <h4>CodeSplitting</h4>
      <button
        type="button"
        onClick={() => {
          // 👁️ this will import the function only when it is needed (actually it will import the whole file and give me a promise with object called module that has my (Not-default)exports as key names)
          // and because of that (loading the whole file so that i can access only one function from it), it is a good practice to add every utility in it's own function
          import("../../helpers/sum").then(({ sum }) => alert(sum(2, 2)))

          //   if i am exporting the function as default export
          //   import("../helpers/helpers").then((module) =>
          //     alert(module.default(2, 2))
          //   )
        }}
      >
        Add 2+2
      </button>
      <hr />

      <Suspense>
        <div style={{ position: "relative" }}>
          <button
            type="button"
            onClick={() => {
              // will not change the state unless it loads the component, so the old ui will not change till the new data is loaded

              // NOTE: fallback approach, once file is loaded it will not fallback anymore, but wth transition approach, there will always be pending and whatever loading effect i am doing , it will show every time i change the state

              // so i will not be needing a fallback, instead i will use isPending to add my loading thing
              startTransition(() => setIsAdmin((prev) => !prev))
            }}
          >
            Toggle admin
          </button>

          {isPending && (
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                zIndex: 2,
                backgroundColor: "rgba(0,0,0,.4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Loading...
            </div>
          )}
          {isAdmin ? <AdminData /> : <h3>You are not admin</h3>}
        </div>
      </Suspense>
    </Wrapper>
  )
}
