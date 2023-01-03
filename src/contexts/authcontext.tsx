import { createContext, ReactNode, useState } from "react"

const initiallyLoggedIn: boolean = JSON.parse(localStorage.getItem("loggedIn") || 'false')

const initialContextValue = {
  isLoggedIn: initiallyLoggedIn,
  login: () => {},
  logout: () => {},
}
export const AuthContext = createContext(initialContextValue)

// the provider
export const AuthContextProvider = ({
  children,
}: {
  children: ReactNode[]
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initiallyLoggedIn)

  const login = () => {
    localStorage.setItem("loggedIn", "true")
    setIsLoggedIn(true)
  }
  const logout = () => {
    localStorage.setItem("loggedIn", "false")
    setIsLoggedIn(false)
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
