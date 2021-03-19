import React from 'react'
import { Redirect } from 'react-router-dom'
import { match } from 'ts-pattern'
import { useAuth } from 'src/auth'

const Login = () => {
  const { authStatus, login } = useAuth()
  return match(authStatus)
    .with('unauthorized', () => (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const values = new FormData(e.currentTarget)
          login(values.get('email') as string, values.get('password') as string)
        }}
      >
        <label htmlFor='email'>
          email
          <input id='email' name='email' type='email' />
        </label>
        <label htmlFor='password'>
          password
          <input id='password' name='password' type='password' />
        </label>
        <button>login</button>
      </form>
    ))
    .with('authorized', () => <Redirect to='/' />)
    .exhaustive()
}

export default Login
