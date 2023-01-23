import jwt, { JwtPayload } from "jsonwebtoken";

export default function verifyTokenJWT(
  token: string,
  returnDecoded = false
): string | JwtPayload | void {
  if (!process.env.SECRET)
    throw { message: "Server error: No secret key defined", statusCode: 503 };

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    if (returnDecoded) return decoded;
  } catch (err) {
    throw { message: "Token provided is invalid", statusCode: 401 };
  }
}
