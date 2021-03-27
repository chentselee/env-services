import React from 'react'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = (props) => {
  return <button {...props} />
}

export default Button
