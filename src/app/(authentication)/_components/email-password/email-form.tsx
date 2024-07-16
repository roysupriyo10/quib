"use client";

import { FC, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { AuthFormContextType } from "#/@types";
import { ImgRightArrowIcon } from "#/icons";
import { checkLoginEmailValidityAction } from "../../sign-in/_actions";

type EmailFormProps = {
  showSubmit: boolean;
  onSubmit?: (email: string) => void;
  onFocus?: () => void;
};

const EmailForm: FC<EmailFormProps> = ({ onSubmit, showSubmit, onFocus }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [formState, formAction] = useFormState<AuthFormContextType, FormData>(
    async function (formState, formData) {
      const state = await checkLoginEmailValidityAction(formState, formData);

      if (state?.success) {
        onSubmit && onSubmit(inputValue);
      }

      return state;
    },
    {
      name: "",
      message: "",
    },
  );

  return (
    <form
      className="
        flex
        items-center
        gap-x-3
      "
      action={formAction}
    >
      <label
        onClick={() => {
          setIsFocused(true);
          onFocus && onFocus();
        }}
        className={`
          flex
          grow
          flex-col
          rounded
          relative
          ${
            isFocused || (inputValue.length !== 0 && showSubmit)
              ? ``
              : `
                cursor-pointer
              `
          }
          auth-input-label-transition
          leading-7
        `}
      >
        <span
          className={`
            absolute
            auth-input-transition
            ${
              isFocused || inputValue.length !== 0
                ? `
                  text-sm
                  -top-1
                `
                : `
                  text-lg
                  top-0
                `
            }
            ${
              formState.name === "email" && formState.message.length > 0
                ? `
                  text-error-700
                `
                : isFocused && inputValue.length !== 0
                  ? `
                    text-gray-500
                  `
                  : `
                    text-gray-600
                  `
            }
          `}
        >
          {formState.name === "email" && formState.message.length > 0
            ? formState.message
            : `Email address`}
        </span>
        <input
          ref={inputRef}
          value={inputValue}
          disabled={!showSubmit}
          title="Email address"
          required
          onChange={(event) => setInputValue(event.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            marginTop: isFocused || inputValue.length !== 0 ? "1rem" : "0",
            transition: "margin-top 0.3s ease-in-out",
          }}
          className={`
            w-full
            outline-none
            ${
              isFocused || inputValue.length !== 0
                ? `
                  pointer-events-auto
                `
                : `
                  pointer-events-none
                `
            }
            bg-transparent
            text-lg
            text-gray-600
          `}
          type="email"
          name="email"
        />
      </label>
      {showSubmit && (
        <button
          className={`
            p-2
            rounded-full
            ${
              inputValue.length > 0
                ? `
                  bg-yellow-orange-200
                `
                : `
                  bg-gray-200
                `
            }
            transition-colors
            duration-150
            ease-linear
          `}
          onClick={() => {
            if (inputValue.length < 1) {
              inputRef.current?.focus();
            }
          }}
          type={inputValue.length > 0 ? "submit" : "button"}
        >
          <ImgRightArrowIcon
            className={`
              transition-colors
              duration-150
              ease-linear
              ${
                inputValue.length > 0
                  ? `
                    stroke-yellow-orange-400
                  `
                  : `
                    stroke-gray-1000
                  `
              }
              w-5
              h-5
            `}
          />
        </button>
      )}
    </form>
  );
};

export default EmailForm;
