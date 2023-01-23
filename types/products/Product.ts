import { Schema } from "mongoose";
import { Category } from "../categories/Category";

export type Product = {
  image: {
    data: Buffer;
    contentType: string;
  };
  title: string;
  price: Number;
  category: Schema.Types.ObjectId | Category["title"];
  isPopular?: Boolean;
};

export interface IProductDocument extends Document, Product {
  category: Schema.Types.ObjectId;
}
