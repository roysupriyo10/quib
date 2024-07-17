import { FC } from "react";

interface AlternateSpinnerProps {
  width: number;
  height: number;
  thickness?: number;
  className?: string;
}

export const Spinner: FC<AlternateSpinnerProps> = ({
  width,
  height,
  thickness = 2,
  className = "",
}) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderWidth: thickness,
      }}
      className={`
        rounded-full
        animate-spin
        border
        border-solid
        border-t-transparent
        ${
          className
            ? className
            : `
              border-sky-500
            `
        }
      `}
    />
  );
};
