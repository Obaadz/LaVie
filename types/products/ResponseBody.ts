import { Product } from "./Product";

export type ResponsePostBody = {
  message: string;
  isSuccess: Boolean;
};

export type ResponseGetBody = {
  message: string;
  isSuccess: Boolean;
  products?: Product[];
};
