import React from 'react'
import { ServiceProvider } from 'src/services'
import { AuthProvider } from 'src/auth'
import { RouterProvider } from 'src/router'

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ServiceProvider>
        <AuthProvider>
          <RouterProvider></RouterProvider>
        </AuthProvider>
      </ServiceProvider>
    </React.Suspense>
  )
}

export default App
