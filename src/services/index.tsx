import React, { createContext, useContext } from "react";
import { Feature } from "src/features";
import { service } from "src/services/development";

export interface Service {
  name: string;
  features: Feature[];
}

const serviceContext = createContext(service);

export const ServiceProvider: React.FC = ({ children }) => {
  return (
    <serviceContext.Provider value={service}>
      {children}
    </serviceContext.Provider>
  );
};

export const useService = () => useContext(serviceContext);
