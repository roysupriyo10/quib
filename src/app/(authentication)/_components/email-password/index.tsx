"use client";

import { FC, useState } from "react";
import "./email-password.css";
import EmailForm from "./email-form";
import PasswordForm from "./password-form";

type EmailPasswordProps = {
  isLogin: boolean;
};

const EmailPassword: FC<EmailPasswordProps> = ({ isLogin }) => {
  const [emailEntered, setEmailEntered] = useState<{
    validated: boolean;
    email: string;
  }>({
    validated: false,
    email: "",
  });

  return (
    <div
      className={`
        flex
        flex-col
        rounded
        border
        border-gray-300
        p-3
      `}
    >
      <EmailForm
        onFocus={() =>
          setEmailEntered({
            validated: false,
            email: "",
          })
        }
        onSubmit={(email) => {
          setEmailEntered({
            email,
            validated: true,
          });
        }}
        showSubmit={!emailEntered.validated}
      />
      <span
        className={`
          bg-gray-300
          transition-all
          duration-300
          ease-linear
          ${
            emailEntered.validated
              ? `
                mt-2
                mb-2.5
                h-[1px]
              `
              : `
                h-0
              `
          }
        `}
      />
      {emailEntered.validated && <PasswordForm
        isLogin={isLogin}
        email={emailEntered.email} />}
    </div>
  );
};

export default EmailPassword;
