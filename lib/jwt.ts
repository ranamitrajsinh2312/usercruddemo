import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;

// Generate JWT token for user
export function generateToken(user: any) {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    SECRET,
    { expiresIn: "1d" }
  );
}

// Verify JWT token
export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}