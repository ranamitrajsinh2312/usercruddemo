// Home page component fetching users from DB
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
   <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
   </>
  );
}
