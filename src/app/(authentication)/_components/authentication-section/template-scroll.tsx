"use client";

import Image from "next/image";
import { FC } from "react";

type TemplateScrollRibbonProps = {
  images: string[];
};

const TemplateScrollRibbon: FC<TemplateScrollRibbonProps> = ({ images }) => {
  return (
    <div
      className="
        overflow-hidden
        h-[180px]
        relative
        w-full
        flex-nowrap
        flex
        gap-x-2.5
      "
    >
      {images.map((imageUrl, index) => (
        <Image
          key={imageUrl + '-' + index}
          height={180}
          width={300}
          src={imageUrl}
          className="
            object-cover
            h-[180px]
            w-[300px]
          "
          alt={`template demo url`}
        />
      ))}
    </div>
  );
};

export default TemplateScrollRibbon;
