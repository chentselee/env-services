import { createMachine } from 'xstate'

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
      on: {
        LOGOUT: 'unauthorized',
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
