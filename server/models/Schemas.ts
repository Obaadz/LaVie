import mongoose, { Document, Schema } from "mongoose";
import { User } from "../../types/users/User";

export interface IUser extends Document, User {}

const usersSchema: Schema<IUser> = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
});

const Users = mongoose.models.users || mongoose.model<IUser>("users", usersSchema);

const mySchemas = {
  Users,
};

export { Users };
export default mySchemas;
