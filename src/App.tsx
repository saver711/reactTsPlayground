//@ts-nocheck!
/////////// IMPORTS
///
import "./App.css"

import { Suspense, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { Nav } from "./components/Nav"
import { lazyLoad } from "./helpers/lazyLoadComponents"
import { AuthContextProvider } from "./contexts/authcontext"
import { Provider } from "react-redux"
import { store } from "./store/store"

// import About from "./pages/About"
// import { Home } from "./pages/Home"

const Home = lazyLoad("../pages/Home", "Home")
const About = lazyLoad("../pages/About")

///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
const App = () => {
  /////////// VARIABLES
  ///

  // console.log(comp1.printName());

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
  /////////// EVENTS
  ///

  ///
  /////////// FUNCTIONS
  ///

  ///
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Nav />
        <Suspense fallback={<h4>Loading...</h4>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </Suspense>
      </AuthContextProvider>
    </Provider>
  )
}

export default App
