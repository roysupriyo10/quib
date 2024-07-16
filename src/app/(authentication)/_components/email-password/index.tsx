"use client";

import { FC, useEffect, useState } from "react";
import "./email-password.css";
import EmailForm from "./email-form";
import PasswordForm from "./password-form";

const EmailPassword: FC = () => {
  const [emailEntered, setEmailEntered] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEmailEntered(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

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
        onFocus={() => setEmailEntered(false)}
        onSubmit={() => setEmailEntered(true)}
        showSubmit={!emailEntered}
      />
      <span
        className={`
          bg-gray-300
          transition-all
          duration-300
          ease-linear
          ${
            emailEntered
              ? `
                my-2
                h-[1px]
              `
              : `
                h-0
              `
          }
        `}
      ></span>
      <PasswordForm
        style={{
          transition: "height 0.3s ease-in-out",
          opacity: emailEntered ? 1 : 0,
          maxHeight: emailEntered ? "100px" : 0,
          pointerEvents: emailEntered ? "auto" : "none"
        }}
      />
    </div>
  );
};

export default EmailPassword;
