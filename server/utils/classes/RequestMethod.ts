import { NextApiRequest, NextApiResponse } from "next/types";
import { IRequestMethod } from "../../../types/RequestMethod";

export default class RequestMethod implements IRequestMethod {
  constructor(
    private handleFunc: (
      request: NextApiRequest,
      response: NextApiResponse
    ) => Promise<void> | void
  ) {}

  handle(request: NextApiRequest, response: NextApiResponse): Promise<void> | void {
    return this.handleFunc(request, response);
  }
}
