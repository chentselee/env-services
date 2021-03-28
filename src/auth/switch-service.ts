import { authStateKey, serviceNameKey } from "src/constants/sessionStorageKeys";

const currentServiceName = (import.meta.env.VITE_SERVICE as string)
  ? (import.meta.env.VITE_SERVICE as string)
  : "defaultService";
const lastServiceName = sessionStorage.getItem(serviceNameKey);

if (currentServiceName !== lastServiceName) {
  sessionStorage.removeItem(authStateKey);
}
