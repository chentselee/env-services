import React from "react";
import { ServiceProvider } from "src/services";
import { RouterProvider } from "src/router";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ServiceProvider>
        <RouterProvider></RouterProvider>
      </ServiceProvider>
    </React.Suspense>
  );
}

export default App;
