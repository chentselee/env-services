import React from "react";
import { Page } from "src/features";
import Nav from "src/components/Nav";
import Home from "./Home";

const CustomLayout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      <h2 style={{ color: "red" }}>custom layout</h2>
      {children}
    </>
  );
};

export const pages: Page[] = [
  { name: "Home", route: "/", component: <Home /> },
  {
    name: "CustomLayout",
    route: "/custom-layout",
    layout: CustomLayout,
    component: <div>hello from custom layout</div>,
  },
];
