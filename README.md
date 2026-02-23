This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


## Prisma Setup & Connection

This project uses [Prisma ORM](https://www.prisma.io/) for database access.

### Prisma Version

```
prisma                  : 6.19.2
@prisma/client          : 6.19.2
```

### Steps to Connect Prisma

1. **Install dependencies** (if not already):
	```bash
	npm install prisma @prisma/client
	```

2. **Configure your database connection**:
	- Edit the `DATABASE_URL` in your `.env` file to point to your MySQL database. Example:
	  ```env
	  DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
	  ```

3. **Prisma schema**:
	- The schema is defined in `prisma/schema.prisma`.

4. **Generate Prisma Client**:
	```bash
	npx prisma generate
	```

5. **Run migrations (if you change the schema)**:
	```bash
	npx prisma migrate dev --name init
	```

6. **Use Prisma Client in your code**:
	- Import and use the client from `lib/prisma.ts`.

7. **Check Prisma Studio (optional, for DB UI):**
	```bash
	npx prisma studio
	```

---

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# usercruddemo" 
