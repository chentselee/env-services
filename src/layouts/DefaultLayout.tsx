import React from "react";
import Nav from "src/components/Nav";

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
