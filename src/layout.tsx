import React from "react";
import Nav from "src/components/Nav";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
