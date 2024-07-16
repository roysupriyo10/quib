import mongoose, { model, Schema } from "mongoose";

export function createMongooseModel<T>(modelName: string, modelSchema: Schema) {
  return mongoose.models[modelName] || model<T>(modelName, modelSchema);
}
