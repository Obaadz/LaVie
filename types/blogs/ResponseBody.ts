import { Blog } from "./Blog";

export type ResponsePostBody = {
  message: string;
  isSuccess: Boolean;
};

export type ResponseGetBody = {
  message: string;
  isSuccess: Boolean;
  blogs?: Blog[];
};
