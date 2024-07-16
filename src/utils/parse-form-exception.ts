import { AuthFormContextType } from "#/@types";
import { HttpException } from "#/classes";

export function parseFormException(error: HttpException): AuthFormContextType {
  return {
    name: error.name ?? "form",
    message: error.message ?? "There was an unknown error. Please try again.",
  };
}
