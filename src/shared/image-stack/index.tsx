import Image from "next/image";
import { FC } from "react";

type ImageStackProps = {
  images: string[];
  className?: string;
  background?: string;
};

const ImageStack: FC<ImageStackProps> = ({
  background,
  images,
  className = "",
}) => {
  const width = images.length * 24 - (images.length - 1) * 8;
  console.log(width);
  return (
    <div
      style={{
        width: `${width}px`,
        minWidth: `${width}px`,
        height: 24,
      }}
      className={`
        relative
        w-20
        h-full
        ${className}
      `}
    >
      {images.map((imageUrl, index) => {
        return (
          <Image
            key={imageUrl + "-" + index}
            width={24}
            height={24}
            src={imageUrl}
            style={{
              left: index * 16,
              zIndex: index,
              height: 24,
              width: 24,
              padding: 2,
            }}
            className={`
              rounded-full
              object-cover
              absolute
              p-1
              bg-transparent
              top-1/2
              -translate-y-1/2
              ${background}
            `}
            alt={`stack image ${index + 1}`}
          />
        );
      })}
    </div>
  );
};

export default ImageStack;
