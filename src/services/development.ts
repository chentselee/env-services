import { serviceNameKey } from "src/constants/sessionStorageKeys";
import { allFeatures } from "src/features/allFeatures";
import { Service } from "src/services";

import { service as serviceA } from "./serviceA";
import { service as serviceB } from "./serviceB";

const defaultService: Service = {
  name: "none",
  features: allFeatures,
};

const services: Record<string, Service> = {
  serviceA,
  serviceB,
  defaultService,
};

const serviceName = (import.meta.env.VITE_SERVICE as string)
  ? (import.meta.env.VITE_SERVICE as string)
  : "defaultService";

sessionStorage.setItem(serviceNameKey, serviceName);

export const service = services[serviceName];
