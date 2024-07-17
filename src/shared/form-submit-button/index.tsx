"use client";

import { Spinner } from "#/icons";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const FormSubmitButton: FC<FormSubmitButtonProps> = ({
  children,
  disabled,
  ...rest
}) => {
  const { pending: loading } = useFormStatus();
  console.log(loading);
  return (
    <button disabled={loading ? true : disabled} {...rest}>
      {loading ? (
        <Spinner
          className={`
            border-yellow-orange-400
          `}
          width={20}
          height={20}
        />
      ) : (
        children
      )}
    </button>
  );
};

export default FormSubmitButton;
