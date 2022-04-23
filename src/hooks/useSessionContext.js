import { SessionContext } from 'context/AuthContext'
import { useContext } from 'react'

export default function useSessionContext() {
  const value = useContext(SessionContext)

  if (!value) {
    console.error(
      'El contexto SessionContext solo se puede usar dentro del SessionProvider'
    )
  }

  return value
}
