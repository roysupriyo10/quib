import { createZodFormMessage } from "#/utils";
import { z } from "zod";

export const EmailValidityFormValidation = z.object({
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
});
