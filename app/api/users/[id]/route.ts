import { prisma } from "@/lib/prisma";
import { authMiddleware } from "@/lib/authMiddleware";

// Update user by ID (protected route)
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const user = authMiddleware(req);

  if (!user) {
    return Response.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { name } = await req.json();

  await prisma.user.update({
    where: { id: Number(params.id) },
    data: { name },
  });

  return Response.json({ message: "User updated" });
}

// Delete user by ID (protected route)
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const user = authMiddleware(req);

  if (!user) {
    return Response.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  await prisma.user.delete({
    where: { id: Number(params.id) },
  });

  return Response.json({ message: "User deleted" });
}