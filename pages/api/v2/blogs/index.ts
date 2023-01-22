import type { NextApiRequest, NextApiResponse } from "next";
import type { IRequestMethod } from "../../../../types/RequestMethod";
import type { RequestMethodsManager } from "../../../../types/RequestMethodsManager";
import type { Blog } from "../../../../types/blogs/Blog";
import type {
  ResponseGetBody,
  ResponsePostBody,
} from "../../../../types/blogs/ResponseBody";
import { getMethodTypeOrError } from "../../../../server/utils";
import {
  addBlogToDB,
  getBlogsOrderedLatestFromDB,
} from "../../../../server/controllers/blogs";
import jwt from "jsonwebtoken";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const methodType: string = getMethodTypeOrError(request.method);

  try {
    await METHODS[methodType].handle(request, response);
  } catch (err) {
    await METHODS["ERROR"].handle(request, response);
  }

  response.end();
}

const GET: IRequestMethod = {
  handle: async (request, response: NextApiResponse<ResponseGetBody>) => {
    try {
      const max: number = Number(request.query.max) || 0;

      const blogs: Blog[] = await getBlogsOrderedLatestFromDB(max);

      response.status(200).send({
        message: "Blogs have been successfully retrieved and returned.",
        isSuccess: true,
        blogs,
      });
    } catch (err: any) {
      response
        .status(err.statusCode || 401)
        .send({ message: err.message, isSuccess: false });
    }
  },
};

const POST: IRequestMethod = {
  handle: async (request, response: NextApiResponse<ResponsePostBody>) => {
    try {
      if (!process.env.SECRET) {
        console.log("No secret key defined");

        throw { message: "Server error", statusCode: 503 };
      }
      const token: string = request.body.token;

      jwt.verify(token, process.env.SECRET);

      const blog: Omit<Blog, "createdAt"> = request.body.blog;

      if (!(blog?.image && blog?.paragraph && blog?.title))
        throw new Error("Please fill blogs fields...");

      await addBlogToDB(blog);

      response
        .status(201)
        .send({ message: "Blog created successfully", isSuccess: true });
    } catch (err: any) {
      response
        .status(err.statusCode || 401)
        .send({ message: err.message, isSuccess: false });
    }
  },
};

const ERROR: IRequestMethod = {
  handle: (request, response) => {
    response.status(405).send({ message: "THIS REQUEST IS NOT ALLOWED", status: 405 });
  },
};

const METHODS: RequestMethodsManager = {
  GET,
  POST,
  ERROR,
};
