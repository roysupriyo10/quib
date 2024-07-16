import { FC } from "react";

type ImgShowPasswordIconProps = {
  width?: number;
  height?: number;
  fill?: string;
  slash?: boolean;
  className?: string;
};

export const ImgShowPasswordIcon: FC<ImgShowPasswordIconProps> = ({
  width = "18",
  height = "18",
  className = "",
  fill = "#26e07f",
  slash = false,
}) => {
  return (
    <svg
      // className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={className ? undefined : width}
      height={className ? undefined : height}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      {
        <>
          <path
            stroke={className ? undefined : fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            opacity={slash ? "1" : "0"}
            className="
              transition
            "
            d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            opacity={!slash ? "1" : "0"}
            className="
              transition
            "
            stroke={className ? undefined : fill}
            strokeWidth="2"
            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
          />
          <path
            opacity={!slash ? "1" : "0"}
            stroke={className ? undefined : fill}
            className="
              transition
            "
            strokeWidth="2"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </>
      }
    </svg>
  );
};
