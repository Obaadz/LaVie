import { IRequestMethod } from "./RequestMethod";

export type RequestMethodsManager = {
  [key: string]: IRequestMethod;
  ERROR: IRequestMethod;
};
