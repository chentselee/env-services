import React from 'react'
import Nav from 'src/layouts/components/Nav'

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}
