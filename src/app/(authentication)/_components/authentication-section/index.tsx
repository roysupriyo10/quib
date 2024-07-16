import { FC, ReactNode } from "react";

type AuthenticationSectionProps = {
  children: ReactNode;
};

const AuthenticationSection: FC<AuthenticationSectionProps> = ({
  children,
}) => {
  return (
    <div
      className="
        
      "
    >
      {children}
    </div>
  );
};

export default AuthenticationSection;
