import React from "react";
import { AuthProvider } from "src/auth";
import { RouterProvider } from "src/router";
import { ServiceProvider } from "src/services";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ServiceProvider>
        <AuthProvider>
          <RouterProvider></RouterProvider>
        </AuthProvider>
      </ServiceProvider>
    </React.Suspense>
  );
}

export default App;
