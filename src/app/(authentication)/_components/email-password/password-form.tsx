import { CSSProperties, FC, useState } from "react";
import { useFormState } from "react-dom";
import { AuthFormContextType } from "#/@types";
import { ImgRightArrowIcon, ImgShowPasswordIcon } from "#/icons";
import { checkLoginPasswordValidityAction } from "../../sign-in/_actions";
import { checkRegistrationPasswordValidityAction } from "../../sign-up/_actions";

type PasswordFormProps = {
  className?: string;
  style?: CSSProperties;
  isLogin: boolean;
  email: string;
};

const PasswordForm: FC<PasswordFormProps> = ({
  className = "",
    isLogin,
  style,
  email,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [formState, formAction] = useFormState<AuthFormContextType, FormData>(
    isLogin ? checkLoginPasswordValidityAction : checkRegistrationPasswordValidityAction,
    {
      message: "",
      name: "",
    },
  );
  return (
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
      <input type="hidden" name="email" value={email} />
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
              formState.name === "password" && formState.message.length > 0
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
          {formState.name === "password" && formState.message.length > 0
            ? formState.message
            : `Password`}
        </span>
        <input
          ref={(element) => {
            element?.focus();
          }}
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
            outline-none
          `}
          type={showPassword ? "text" : "password"}
          name="password"
        />
      </label>
      <button onClick={() => setShowPassword(!showPassword)} type="button">
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
  );
};

export default PasswordForm;
