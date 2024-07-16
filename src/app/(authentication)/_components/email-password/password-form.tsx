import { CSSProperties, FC, useRef, useState } from "react";
import { AuthFormContext } from "../../_context";
import { useFormState } from "react-dom";
import { AuthFormContextType } from "#/@types";
import { ImgRightArrowIcon, ImgShowPasswordIcon } from "#/icons";

type PasswordFormProps = {
  className?: string;
  style?: CSSProperties;
};

const PasswordForm: FC<PasswordFormProps> = ({ className = "", style }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [formState, formAction] = useFormState<AuthFormContextType, FormData>(
    async () => {
      return {
        message: "",
        name: "",
      };
    },
    {
      message: "",
      name: "",
    },
  );
  return (
    <AuthFormContext.Provider value={formState}>
      <form
        style={style}
        className={`
          flex
          items-center
          gap-x-3
          ${className}
        `}
        action={formAction}
      >
        <label
          onClick={() => {
            setIsFocused(true);
          }}
          className={`
            flex
            grow
            flex-col
            rounded
            relative
            ${
              isFocused || inputValue.length !== 0
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
              text-gray-600
              auth-input-transition
              ${
                isFocused || inputValue.length !== 0
                  ? `
                    text-sm
                    text-gray-500
                    -top-1
                  `
                  : `
                    text-lg
                    text-gray-600
                    top-0
                  `
              }
            `}
          >
            Password
          </span>
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{
              marginTop: isFocused || inputValue.length !== 0 ? "1rem" : "0",
              transition: "margin-top 0.3s ease-in-out",
            }}
            className={`
              w-full
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
            `}
            type={showPassword ? "text" : "password"}
          />
        </label>
        <button
          onClick={() => setShowPassword(!showPassword)}
          type="button"
        >
          <ImgShowPasswordIcon
            className="
              stroke-gray-600
              h-6
              w-6
            "
            width={20}
            height={20}
            slash={showPassword}
          />
        </button>
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
          type="button"
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
      </form>
    </AuthFormContext.Provider>
  );
};

export default PasswordForm;
