import type { NextApiRequest, NextApiResponse } from "next";
import type { RequestMethodsManager } from "../../../../types/RequestMethodsManager";
import type { Category } from "../../../../types/categories/Category";
import type {
  ResponseGetBody,
  ResponsePostBody,
} from "../../../../types/categories/ResponseBody";
import { getMethodTypeOrError } from "../../../../server/utils";
import {
  addCategoryToDB,
  getPopularCategoriesFromDB,
} from "../../../../server/controllers/categories";
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

// TODO: Will add a method that returns all/popular categories from database based on query
const GET = new RequestMethod(
  async (request, response: NextApiResponse<ResponseGetBody>) => {
    try {
      const categories: Category[] = await getPopularCategoriesFromDB();

      response.status(200).send({
        message: "Popular categories have been successfully retrieved and returned.",
        isSuccess: true,
        categories,
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

      const category: Category = request.body.category;

      if (!(category?.image && category?.title))
        throw new Error("Please fill category fields...");

      await addCategoryToDB(category);

      response
        .status(201)
        .send({ message: "Category created successfully", isSuccess: true });
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
