import { useMachine } from "@xstate/react";
import { authStateKey } from "src/constants/sessionStorageKeys";
import { createMachine } from "xstate";

const authMachine = createMachine({
  initial: "unauthorized",
  states: {
    unauthorized: {
      on: {
        LOGIN: {
          target: "authorizing",
        },
      },
    },
    authorizing: {
      invoke: {
        src: (_, event) => (send) => {
          const timeoutId = setTimeout(() => {
            if (event.email === "123@example.com" && event.password === "123") {
              send("SUCCESS");
            } else {
              send("FAILURE");
            }
          }, 1000);
          return () => clearTimeout(timeoutId);
        },
      },
      on: {
        SUCCESS: {
          target: "authorized",
          actions: "persistAuthState",
        },
        FAILURE: "error",
      },
    },
    authorized: {
      exit: "clearPersistedAuthState",
      on: {
        LOGOUT: { target: "unauthorized" },
      },
    },
    error: {
      on: {
        LOGIN: {
          target: "authorizing",
        },
      },
    },
  },
});

const persistedAuthState = sessionStorage.getItem(authStateKey)
  ? JSON.parse(sessionStorage.getItem(authStateKey) as string)
  : undefined;

export const useAuthMachine = () => {
  return useMachine(authMachine, {
    state: persistedAuthState,
    actions: {
      persistAuthState: (_, __, { state }) => {
        sessionStorage.setItem(authStateKey, JSON.stringify(state));
      },
      clearPersistedAuthState: () => {
        sessionStorage.removeItem(authStateKey);
      },
    },
  });
};
