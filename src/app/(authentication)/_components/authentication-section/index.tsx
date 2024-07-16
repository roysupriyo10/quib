import { getTemplateImages, getUserAvatars } from "#/services";
import { FC, ReactNode } from "react";
import TemplateScrollRibbon from "./template-scroll";
import { ImageStack } from "#/shared";

type AuthenticationSectionProps = {
  children: ReactNode;
  className?: string;
};

const AuthenticationSection: FC<AuthenticationSectionProps> = async ({
  children,
  className = "",
}) => {
  const templateImages = await getTemplateImages();
  const avatarImages = await getUserAvatars({ count: 3 });

  return (
    <div
      className="
        overflow-hidden
        bg-gray-25
        self-center
        w-full
        md:max-w-[790px]
        rounded-xl
        flex
        flex-col
      "
    >
      <TemplateScrollRibbon images={templateImages} />
      <div
        className="
          flex
          my-12
          px-[18px]
          flex-col
          gap-y-7
          w-full
          md:max-w-[600px]
          mx-auto
        "
      >
        <div
          className="
            bg-blue-50
            rounded-full
            flex
            w-fit
            gap-x-2
            h-full
            self-center
            p-2
            items-center
          "
        >
          <ImageStack background="bg-blue-50" images={avatarImages} />
          <span
            className="
              text-sm
              xl:text-base
              text-blue-400
              font-medium
            "
          >
            Be a part of a successful launch
          </span>
        </div>
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};

export default AuthenticationSection;
