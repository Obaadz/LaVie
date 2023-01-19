import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Users = mongoose.models.users || mongoose.model("users", usersSchema);

const mySchemas = {
  Users,
};

export { Users };
export default mySchemas;
