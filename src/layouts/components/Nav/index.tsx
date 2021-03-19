import React from 'react'
import { Link } from 'react-router-dom'
import { useService } from 'src/services'
import { useAuth } from 'src/auth'

const Nav = () => {
  const { features } = useService()
  const { logout } = useAuth()
  return (
    <nav>
      {features.flatMap((feature) =>
        feature.pages.map((page) => (
          <Link key={page.route} to={page.route}>
            {page.name}
          </Link>
        ))
      )}
      <button type='button' onClick={() => logout()}>
        logout
      </button>
    </nav>
  )
}

export default Nav
