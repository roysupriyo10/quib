"use server";

import { AuthFormContextType } from "#/@types";
import { checkEmailValidity } from "#/services";
import { fromErrorToFormState } from "#/utils";
import { EmailValidityFormValidation } from "#/validation";

export async function checkLoginEmailValidityAction(
  _state: AuthFormContextType,
  formData: FormData,
): Promise<AuthFormContextType> {
  try {
    const params = EmailValidityFormValidation.parse({
      email: formData.get("email"),
    });

    console.log(params);

    const canLogin = await checkEmailValidity({
      email: params.email
    });

    if (!canLogin) {
      return {
        name: "email",
        message: "This email is not registered."
      }
    }

    return {
      name: "",
      message: "",
    };
  } catch (error) {
    const errorState = fromErrorToFormState(error);

    return errorState;
  }
}
