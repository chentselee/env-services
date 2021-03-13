import React from "react";
import { Page } from "src/features";
import Counter from "./Counter";

export const pages: Page[] = [
  {
    name: "Counter",
    route: "/counter",
    component: <Counter />,
  },
];
