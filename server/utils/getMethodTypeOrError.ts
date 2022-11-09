export default function getMethodTypeOrError(
  requestMethod: string | undefined
): string {
  if (requestMethod === undefined) return "ERROR";
  return requestMethod;
}
