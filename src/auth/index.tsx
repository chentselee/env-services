import React, { createContext, useContext, useState } from 'react'

type AuthStatus = 'unauthorized' | 'authorized'

interface AuthProviderContext {
  authStatus: AuthStatus
  login: (email: string, password: string) => void
  logout: () => void
}

const authContext = createContext<AuthProviderContext>({
  authStatus: 'unauthorized',
  login: () => {},
  logout: () => {},
})

export const AuthProvider: React.FC = ({ children }) => {
  const [authStatus, setAuthState] = useState<AuthStatus>(() => 'unauthorized')
  const value: AuthProviderContext = {
    authStatus,
    login: (email, password) => {
      if (authStatus === 'unauthorized' && email === '123@example.com' && password === '123') {
        setAuthState('authorized')
      }
    },
    logout: () => {
      if (authStatus === 'authorized') {
        setAuthState('unauthorized')
      }
    },
  }
  return <authContext.Provider value={value}>{children}</authContext.Provider>
}

export const useAuth = () => useContext(authContext)
