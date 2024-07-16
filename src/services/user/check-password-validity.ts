import { IUser } from "#/@types/model";
import { HttpException } from "#/classes";
import { connectDatabase } from "#/lib";
import { User } from "#/models";
import { asyncWithError } from "#/utils";

type CheckEmailValidityParams = {
  email: string;
  password: string;
};

export async function checkPasswordValidity(params: CheckEmailValidityParams) {
  await connectDatabase();

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
      "email",
    );
  }

  if (!existingUser) {
    return null;
  }

  const [userError, user] = await asyncWithError(
    User.findOne({ email: params.email }).select("+password") as Promise<IUser>,
  );
  if (userError !== null) {
    console.error(userError);
    throw new HttpException(userError.message, userError.statusCode, "email");
  }

  if (user.password !== params.password) {
    return null;
  }

  return user;
}
