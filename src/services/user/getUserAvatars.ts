import { arrayRange } from "#/utils";

type GetUserAvatarsParams = {
  count: number;
};

export async function getUserAvatars(params: GetUserAvatarsParams) {
  return arrayRange(params.count).map(
    (index) => `/images/sample-avatar-${(index % 3) + 1}.png`,
  );
}
