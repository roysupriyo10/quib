import { FC } from "react";

type AuthenticationInputProps = {
  placeholder?: string;
}

const AuthenticationInput: FC<AuthenticationInputProps> = ({ placeholder }) => {
  return (
    <label>
      <input type="text" />
    </label>
  )
};

export default AuthenticationInput;
