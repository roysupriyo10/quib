import { AuthFormContextType } from "#/@types";
import { HttpException } from "#/classes";

export function parseFormException(error: HttpException): AuthFormContextType {
  return {
    name: error.fieldName ?? "form",
    message: error.message ?? "There was an unknown error. Please try again.",
  };
}
