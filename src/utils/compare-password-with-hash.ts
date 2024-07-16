import { scryptHashOptions } from "#/constants";
import { scrypt } from "crypto";

export async function compareHashWithPassword(
  password: string,
  salt: string,
  key: string,
) {
  return new Promise((resolve, reject) => {
    scrypt(password, salt, 64, scryptHashOptions, (err, derivedKey) => {
      if (err) reject(err);
      resolve(key === derivedKey.toString("hex"));
    });
  });
}
