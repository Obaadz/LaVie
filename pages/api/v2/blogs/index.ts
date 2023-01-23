import type { NextApiRequest, NextApiResponse } from "next";
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
import RequestMethod from "../../../../server/utils/classes/RequestMethod";
import RequestMethodWithVerifyToken from "../../../../server/utils/classes/RequestMethodWithVerifyToken";

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

const GET = new RequestMethod(
  async (request, response: NextApiResponse<ResponseGetBody>) => {
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
  }
);

const POST = new RequestMethodWithVerifyToken(
  async (request, response: NextApiResponse<ResponsePostBody>) => {
    try {
      POST.verifyToken(request.body.token);

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
  }
);

const ERROR = new RequestMethod((request, response) => {
  response.status(405).send({ message: "THIS REQUEST IS NOT ALLOWED", status: 405 });
});

const METHODS: RequestMethodsManager = {
  GET,
  POST,
  ERROR,
};
