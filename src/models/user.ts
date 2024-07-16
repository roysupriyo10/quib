import { IUser } from "#/@types/model";
import { createMongooseModel } from "#/utils";
import { Schema } from "mongoose";

export const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },
    password: {
      select: false,
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const User = createMongooseModel<IUser>("User", userSchema);
