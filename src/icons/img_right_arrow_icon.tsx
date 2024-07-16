import { FC } from "react";

type ImgRightArrowIconProps = {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
};

export const ImgRightArrowIcon: FC<ImgRightArrowIconProps> = ({
  width = 18,
  height = 18,
  className = "",
  fill = "fill-gray-1000",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={className ? undefined : width}
    height={className ? undefined : height}
    className={className}
    viewBox="0 0 21 21"
    fill={fill}
  >
    <path
      d="M4.00455 10.6362H17.3379M17.3379 10.6362L12.3379 5.63623M17.3379 10.6362L12.3379 15.6362"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
