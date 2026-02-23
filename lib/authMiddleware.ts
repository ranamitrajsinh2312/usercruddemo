import { verifyToken } from "./jwt";

// Middleware to check JWT in Authorization header
export function authMiddleware(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);
    return decoded; // contains id, email, role
  } catch {
    return null;
  }
}