import React from 'react'
import Nav from 'src/layouts/components/Nav'

export const CustomLayout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      <h2 style={{ color: 'red' }}>custom layout</h2>
      {children}
    </>
  )
}
