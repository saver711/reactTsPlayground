//@ts-nocheck!
/////////// IMPORTS
///
// import classes from './App.module.css'

import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { Nav } from "./components/Nav"
import { lazyLoad } from "./helpers/lazyLoadComponents"

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
    <>
      <Nav />
      <Suspense fallback={<h4>Loading...</h4>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
