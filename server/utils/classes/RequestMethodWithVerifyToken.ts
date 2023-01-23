import { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next/types";
import { IRequestMethodWithVerifyToken } from "../../../types/RequestMethod";
import verifyTokenJWT from "../verifyTokenJWT";

export default class RequestMethodWithVerifyToken
  implements IRequestMethodWithVerifyToken
{
  constructor(
    private handleFunc: (
      request: NextApiRequest,
      response: NextApiResponse
    ) => Promise<void> | void
  ) {}

  handle(request: NextApiRequest, response: NextApiResponse): Promise<void> | void {
    return this.handleFunc(request, response);
  }

  verifyToken(token: string, returnDecoded = false): string | JwtPayload | void {
    return verifyTokenJWT(token, returnDecoded);
  }
}
