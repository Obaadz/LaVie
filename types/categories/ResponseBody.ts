import { Category } from "./Category";

export type ResponsePostBody = {
  message: string;
  isSuccess: Boolean;
};

export type ResponseGetBody = {
  message: string;
  isSuccess: Boolean;
  categories?: Category[];
};
