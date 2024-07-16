import { ZodError } from "zod";
import { parseZodFormMessage } from "./parse-zod-form-message";
import { AuthFormContextType } from "#/@types";
import { HttpException } from "#/classes";
import { parseFormException } from "./parse-form-exception";

export function fromErrorToFormState(error: unknown): AuthFormContextType {
  if (error instanceof ZodError) {
    return parseZodFormMessage(error.errors[0].message);
  } else if (error instanceof HttpException) {
    return parseFormException(error);
  } else if (error instanceof Error) {
    return {
      name: "form",
      message: String(error.message),
    };
  } else {
    return {
      name: "form",
      message: "An unknown error occurred. Please try again.",
    };
  }
}
