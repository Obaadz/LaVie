import type { NextApiRequest, NextApiResponse } from "next";
import type { RequestMethodsManager } from "../../../../types/RequestMethodsManager";
import type { Product } from "../../../../types/products/Product";
import type {
  ResponseGetBody,
  ResponsePostBody,
} from "../../../../types/products/ResponseBody";
import { getMethodTypeOrError } from "../../../../server/utils";
import {
  addProductToDB,
  getAllProductsFromDB,
  getPopularProductsFromDB,
} from "../../../../server/controllers/products";
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
      const products: Product[] =
        request.query.only_popular == "true"
          ? await getPopularProductsFromDB()
          : await getAllProductsFromDB();
      const message =
        request.query.only_popular == "true" ? "Popular products" : "All Products";

      response.status(200).send({
        message: message + "  have been successfully retrieved and returned.",
        isSuccess: true,
        products,
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

      const product: Product = request.body.product;

      if (!(product?.image && product?.title))
        throw new Error("Please fill product fields...");

      await addProductToDB(product);

      response
        .status(201)
        .send({ message: "Product created successfully", isSuccess: true });
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
