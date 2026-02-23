import { prisma } from "@/lib/prisma";
import { authMiddleware } from "@/lib/authMiddleware";
import bcrypt from "bcryptjs";

// Get all users (protected route)
export async function GET(req: Request) {
  const user = authMiddleware(req);

  if (!user) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true, role: true },
  });

  return Response.json(users);
}

// Create a new user (admin only, protected route)
export async function POST(req: Request) {
  const user = authMiddleware(req);

  if (!user || typeof user === "string") {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  // 👑 Admin only
  if (user.role !== "admin") {
    return Response.json(
      { message: "Forbidden: Admin only" },
      { status: 403 }
    );
  }

  const { name, email, password, role } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: role || "user",
    },
  });

  return Response.json(newUser);
}