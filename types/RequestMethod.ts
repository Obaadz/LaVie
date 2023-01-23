import { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

export interface IRequestMethod {
  handle(request: NextApiRequest, response: NextApiResponse): Promise<void> | void;
}

export interface IRequestMethodWithVerifyToken extends IRequestMethod {
  verifyToken(token: string): void;
  verifyToken(token: string, returnDecoded?: boolean): string | JwtPayload | void;
}
