import type { MongooseError } from "mongoose";
import type { Category, ICategoryDocument } from "../../types/categories/Category";
import { MongoDB } from "../utils";
import mySchemas from "../models/Schemas";

export async function addCategoryToDB(category: Category) {
  try {
    await MongoDB.connect();

    const newCategory = new mySchemas.Categories({ ...category });

    await newCategory.save().catch((err: MongooseError) => {
      throw new Error(err.message);
    });

    return true;
  } finally {
    await MongoDB.disconnect();
  }
}

export async function getPopularCategoriesFromDB() {
  try {
    await MongoDB.connect();

    const popularCategories: ICategoryDocument[] = await mySchemas.Categories.find({
      isPopular: true,
    });

    return popularCategories;
  } finally {
    await MongoDB.disconnect();
  }
}
