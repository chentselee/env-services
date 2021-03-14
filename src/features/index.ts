import React from "react";
import { core } from "./core";
import { counter } from "./counter";

export interface Page {
  name: string;
  route: string;
  layout?: React.ComponentType;
  component: React.ReactNode;
}

export interface Feature {
  pages: Page[];
}

export const allFeatures: Feature[] = [core, counter];
