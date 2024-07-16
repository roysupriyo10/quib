"use server";

import { AuthFormContextType } from "#/@types";
import { checkPasswordValidity } from "#/services";
import { fromErrorToFormState } from "#/utils";
import { PasswordValidityFormValidation } from "#/validation";

export async function checkLoginPasswordValidityAction(
  _state: AuthFormContextType,
  formData: FormData,
): Promise<AuthFormContextType> {
  try {
    const params = PasswordValidityFormValidation.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const user = await checkPasswordValidity({
      email: params.email,
      password: params.password,
    });

    if (!user) {
      return {
        name: "password",
        message: "Password does not match.",
      };
    }

    return {
      name: "",
      message: "",
      success: true,
    };
  } catch (error) {
    const errorState = fromErrorToFormState(error);

    return errorState;
  }
}
