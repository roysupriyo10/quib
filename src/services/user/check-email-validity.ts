import { HttpException } from "#/classes";
import { connectDatabase } from "#/lib";
import { User } from "#/models";
import { asyncWithError, sleep } from "#/utils";

type CheckEmailValidityParams = {
  email: string;
};

export async function checkEmailValidity(params: CheckEmailValidityParams) {
  await connectDatabase();

  await sleep(50000)

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
      "email"
    );
  }

  if (existingUser === null) {
    return false;
  }

  return true;
}
