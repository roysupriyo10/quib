import { AuthFormContextType } from "#/@types";
import { createContext } from "react";

export const AuthFormContext = createContext<AuthFormContextType>({
  message: "",
  name: "",
});
