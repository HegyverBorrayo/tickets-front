import { createContext, useState } from 'react'

export const SessionContext = createContext({})

export const SessionProvider = ({ children }) => {
  const [userSession, setUserSession] = useState(null)

  const login = value => {
    setUserSession(value)
  }

  return (
    <SessionContext.Provider
      value={{
        login,
        userSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}
