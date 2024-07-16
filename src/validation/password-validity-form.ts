import { strongPasswordRegex } from "#/constants";
import { createZodFormMessage } from "#/utils";
import { z } from "zod";

export const PasswordValidityFormValidation = z
  .object({
  email: z.coerce
    .string({
      required_error: createZodFormMessage("email", "Must provide a email."),
      invalid_type_error: createZodFormMessage(
        "email",
        "Invalid email provided.",
      ),
    })
    .email({
      message: createZodFormMessage("email", "Invalid email provided."),
    })
    .min(
      5,
      createZodFormMessage("email", "Email must be at least 5 characters."),
    ),
    password: z
      .string({
        required_error: createZodFormMessage(
          "password",
          "Must provide a password.",
        ),
        invalid_type_error: createZodFormMessage(
          "password",
          "Invalid password provided.",
        ),
      })
      .min(
        8,
        createZodFormMessage(
          "password",
          "Password must be at least 8 characters.",
        ),
      ),
  })
  .superRefine(({ password }, z) => {
    const isStrongPassword = strongPasswordRegex.test(password);

    if (!isStrongPassword) {
      z.addIssue({
        code: "custom",
        path: ["password"],
        message: createZodFormMessage("password", "Password must be strong."),
      });
    }
  });
