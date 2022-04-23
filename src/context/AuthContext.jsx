import { createContext, useState } from 'react'

export const SessionContext = createContext({})

export const SessionProvider = ({ children }) => {
  const [userSession, setUserSession] = useState()
  const [editingValue, setEditingValue] = useState()

  const isLogin = userSession !== undefined

  const setJWT = value => {
    setEditingValue(value)
    setUserSession(value)
  }

  return (
    <SessionContext.Provider
      value={{
        editingValue,
        isLogin,
        setJWT,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}
