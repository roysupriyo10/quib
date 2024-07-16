import type { ScryptOptions } from "crypto";

export const scryptHashOptions: ScryptOptions = {
  cost: Math.pow(2, 14),
};
