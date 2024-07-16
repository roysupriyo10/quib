import { FC } from "react";

type AnimatedFormInputProps = {
  className?: string;
};

const AnimatedFormInput: FC<AnimatedFormInputProps> = () => {
  return (
    <label>
      <input type="text" />
    </label>
  );
};

export default AnimatedFormInput
