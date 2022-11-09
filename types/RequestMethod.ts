import { NextApiRequest, NextApiResponse } from "next";

export interface IRequestMethod {
  handle(
    request: NextApiRequest,
    response: NextApiResponse
  ): Promise<void> | void;
}
