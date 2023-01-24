import type { MongooseError } from "mongoose";
import type { Product, IProductDocument } from "../../types/products/Product";
import { MongoDB } from "../utils";
import mySchemas from "../models/Schemas";
import { getCategoryIdByTitle } from "./categories";

export async function addProductToDB(product: Product) {
  try {
    const categoryId = await getCategoryIdByTitle(product.title);

    await MongoDB.connect();

    const newProduct = new mySchemas.Products({ ...product, category: categoryId });

    await newProduct.save().catch((err: MongooseError) => {
      if (err.message.search("duplicate"))
        throw new Error("There is already product with this title");

      throw new Error(err.message);
    });

    return true;
  } finally {
    await MongoDB.disconnect();
  }
}

export async function getAllProductsFromDB() {
  try {
    await MongoDB.connect();

    const allProducts: IProductDocument[] = await mySchemas.Products.find();

    return allProducts;
  } finally {
    await MongoDB.disconnect();
  }
}

export async function getPopularProductsFromDB() {
  try {
    await MongoDB.connect();

    const popularProducts: IProductDocument[] = await mySchemas.Products.find({
      isPopular: true,
    });

    return popularProducts;
  } finally {
    await MongoDB.disconnect();
  }
}
