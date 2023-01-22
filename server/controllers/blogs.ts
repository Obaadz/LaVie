import type { MongooseError } from "mongoose";
import type { Blog } from "../../types/blogs/Blog";
import { MongoDB } from "../utils";
import mySchemas from "../models/Schemas";

export async function addBlogToDB(blog: Omit<Blog, "createdAt">) {
  try {
    await MongoDB.connect();

    const newBlog = new mySchemas.Blogs({ ...blog });

    await newBlog.save().catch((err: MongooseError) => {
      throw new Error(err.message);
    });

    return true;
  } finally {
    await MongoDB.disconnect();
  }
}
