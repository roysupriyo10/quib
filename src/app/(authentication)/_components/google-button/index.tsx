import { ImgGoogleIcon } from "#/icons";
import { FC } from "react";

const GoogleButton: FC = () => {
  return (
    <form
      className="
        w-full
      "
    >
      <button
        className="
          flex
          w-full
          items-center
          justify-center
          gap-x-3
          border
          border-gray-300
          rounded
          p-3
        "
      >
        <span
          className="
            bg-gray-50
            p-2.5
            flex
            items-center
            justify-center
            rounded-full
          "
        >
          <ImgGoogleIcon />
        </span>
        <span
          className="
            text-gray-600
          "
        >
          Continue with Google
        </span>
      </button>
    </form>
  );
};

export default GoogleButton;
