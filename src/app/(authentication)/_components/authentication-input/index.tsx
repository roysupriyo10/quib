"use client";

import { FC, useRef, useState } from "react";
import "./email-password.css";

type EmailPasswordProps = {
  placeholder?: string;
};

const EmailPassword: FC<EmailPasswordProps> = ({ placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [emailEntered, setEmailEntered] = useState<boolean>(false);

  console.log(isFocused);

  return (
    <div
      className="
        flex
        flex-col
        rounded
      "
    >
      <form>
        <label
          className={`
            flex
            flex-col
            border
            border-gray-300
            rounded
            relative
            p-3
            auth-input-label-transition
          `}
        >
          <span
            className={`
              text-gray-600
              text-lg
              pointer-events-none
              auth-input-transition
              ${
                isFocused
                  ? `
                    text-sm
                  `
                  : `
                    text-lg
                  `
              }
            `}
          >
            {placeholder}
          </span>
          <input
            ref={inputRef}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
              w-full
              bg-transparent
              transition
              duration-300
              ease-in-out
              ${
                isFocused
                  ? `
                    mt-6
                    h-0
                  `
                  : `
                    h-full
                  `
              }
            `}
            type="text"
          />
        </label>
      </form>
    </div>
  );
};

export default EmailPassword;
