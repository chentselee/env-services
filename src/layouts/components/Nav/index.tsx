import React from 'react'
import { NavLink } from 'react-router-dom'
import { useService } from 'src/services'
import { useAuth } from 'src/auth'

const Nav = () => {
  const { features } = useService()
  const { logout } = useAuth()
  return (
    <nav>
      {features.flatMap((feature) =>
        feature.pages
          .filter((page) => page.showInNav)
          .map((page) => (
            <NavLink
              key={page.route}
              to={page.route}
              isActive={(_, { pathname }) => page.route === pathname}
              activeStyle={{ fontWeight: 'bold' }}
            >
              {page.name}
            </NavLink>
          ))
      )}
      <button type='button' onClick={() => logout()}>
        logout
      </button>
    </nav>
  )
}

export default Nav
