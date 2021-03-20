import React from 'react'
import { Redirect } from 'react-router-dom'
import { match } from 'ts-pattern'
import { useAuth } from 'src/auth'

const Login = () => {
  const { authStatus, login } = useAuth()
  return match(authStatus)
    .when(
      (status) => status === 'unauthorized' || status === 'authorizing' || status === 'error',
      () => (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const values = new FormData(e.currentTarget)
            login(values.get('email') as string, values.get('password') as string)
          }}
        >
          <label htmlFor='email'>
            email
            <input id='email' name='email' type='email' disabled={authStatus === 'authorizing'} />
          </label>
          <label htmlFor='password'>
            password
            <input
              id='password'
              name='password'
              type='password'
              disabled={authStatus === 'authorizing'}
            />
          </label>
          <button disabled={authStatus === 'authorizing'}>login</button>
        </form>
      )
    )
    .with('authorized', () => <Redirect to='/' />)
    .run()
}

export default Login
