import type { MongooseError, Schema } from "mongoose";
import type { Category, ICategoryDocument } from "../../types/categories/Category";
import { MongoDB } from "../utils";
import mySchemas from "../models/Schemas";

export async function addCategoryToDB(category: Category) {
  try {
    await MongoDB.connect();

    const newCategory = new mySchemas.Categories({ ...category });

    await newCategory.save().catch((err: MongooseError) => {
      if (err.message.search("duplicate"))
        throw new Error("There is already category with this title");

      throw new Error(err.message);
    });

    return true;
  } finally {
    await MongoDB.disconnect();
  }
}

export async function getAllCategoriesFromDB() {
  try {
    await MongoDB.connect();

    const allCategories: ICategoryDocument[] = await mySchemas.Categories.find();

    return allCategories;
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

export async function getCategoryIdByTitle(
  title: string
): Promise<Schema.Types.ObjectId> {
  try {
    await MongoDB.connect();

    const category = await mySchemas.Categories.findOne({ title });

    if (!category) throw new Error("Category not found");

    return category._id;
  } finally {
    await MongoDB.disconnect();
  }
}
