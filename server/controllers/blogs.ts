import type { MongooseError } from "mongoose";
import type { Blog, IBlogDocument } from "../../types/blogs/Blog";
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

export async function getBlogsOrderedLatestFromDB(max: number = 0) {
  try {
    await MongoDB.connect();

    const blogs: IBlogDocument[] = await mySchemas.Blogs.aggregate(
      max
        ? [{ $sort: { createdAt: -1 } }, { $limit: max }]
        : [{ $sort: { createdAt: -1 } }]
    ).project({ __v: 0, _id: 0 });

    return blogs;
  } finally {
    await MongoDB.disconnect();
  }
}
