import { createMachine } from 'xstate'
import { useMachine } from '@xstate/react'

export const authMachine = createMachine({
  initial: 'unauthorized',
  states: {
    unauthorized: {
      on: {
        LOGIN: {
          target: 'authorizing',
        },
      },
    },
    authorizing: {
      invoke: {
        src: (_, event) => (send) => {
          const timeoutId = setTimeout(() => {
            if (event.email === '123@example.com' && event.password === '123') {
              send('SUCCESS')
            } else {
              send('FAILURE')
            }
          }, 1000)
          return () => clearTimeout(timeoutId)
        },
      },
      on: {
        SUCCESS: {
          target: 'authorized',
        },
        FAILURE: 'error',
      },
    },
    authorized: {
      entry: 'persistAuthState',
      on: {
        LOGOUT: { target: 'unauthorized', actions: 'clearPersistedAuthState' },
      },
    },
    error: {
      on: {
        LOGIN: {
          target: 'authorizing',
        },
      },
    },
  },
})

const authStateKey = 'auth-state'

const persistedAuthState = sessionStorage.getItem(authStateKey)
  ? JSON.parse(sessionStorage.getItem(authStateKey) as string)
  : undefined

export const useAuthMachine = () => {
  return useMachine(authMachine, {
    state: persistedAuthState,
    actions: {
      persistAuthState: (_, __, { state }) => {
        sessionStorage.setItem(authStateKey, JSON.stringify(state))
      },
      clearPersistedAuthState: () => {
        sessionStorage.removeItem(authStateKey)
      },
    },
  })
}
