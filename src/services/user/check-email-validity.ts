import { HttpException } from "#/classes";
import { User } from "#/models";
import { asyncWithError } from "#/utils";

type CheckEmailValidityParams = {
  email: string;
};

export async function checkEmailValidity(params: CheckEmailValidityParams) {
  const [existingUserError, existingUser] = await asyncWithError(
    User.exists({
      email: params.email,
    }),
  );
  if (existingUserError !== null) {
    console.error(existingUserError);
    throw new HttpException(
      existingUserError.message,
      existingUserError.statusCode,
    );
  }

  if (existingUser === null) {
    return false;
  }

  return true;
}
