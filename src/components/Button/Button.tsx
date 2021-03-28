import React, { useEffect } from "react";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = (props) => {
  const { name } = props;
  useEffect(() => {
    console.log({ name });
  }, [name]);
  return <button {...props} />;
};

export default Button;
