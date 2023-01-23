import mongoose, { Schema } from "mongoose";
import { IUserDocument } from "../../types/users/User";
import { IBlogDocument } from "../../types/blogs/Blog";
import { ICategoryDocument } from "../../types/categories/Category";
import { IProductDocument } from "../../types/products/Product";

const usersSchema = new Schema<IUserDocument>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
});

const blogsSchema = new Schema<IBlogDocument>({
  image: {
    _id: false,
    type: {
      data: { type: Buffer, required: true },
      contentType: { type: String, required: true },
    },
    required: true,
  },
  title: { type: String, required: true },
  paragraph: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, readonly: true },
});

const categoriesSchema = new Schema<ICategoryDocument>({
  image: {
    _id: false,
    type: {
      data: { type: Buffer, required: true },
      contentType: { type: String, required: true },
    },
    required: true,
  },
  title: { type: String, required: true },
  isPopular: { type: Boolean, default: false },
});

const productsSchema = new Schema<IProductDocument>({
  image: {
    _id: false,
    type: {
      data: { type: Buffer, required: true },
      contentType: { type: String, required: true },
    },
    required: true,
  },
  title: { type: String, required: true },
  price: { type: Number, min: 1 },
  isPopular: { type: Boolean, default: false },
});

const Users =
  mongoose.models.users || mongoose.model<IUserDocument>("users", usersSchema);
const Blogs =
  mongoose.models.blogs || mongoose.model<IBlogDocument>("blogs", blogsSchema);
const Categories =
  mongoose.models.categories ||
  mongoose.model<ICategoryDocument>("categories", categoriesSchema);
const Products =
  mongoose.models.products ||
  mongoose.model<IProductDocument>("products", categoriesSchema);

const mySchemas = {
  Users,
  Blogs,
  Categories,
  Products,
};

export { Users, Blogs, Categories };
export default mySchemas;
