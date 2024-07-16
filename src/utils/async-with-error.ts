import type { HttpException } from "#/classes";

export function asyncWithError<T, U = HttpException>(
  promise: Promise<T>,
  errorExt?: object,
): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch((err: U) => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, {
          statusCode: 500,
        });
        return [parsedError, undefined];
      }

      return [err, undefined];
    });
}

