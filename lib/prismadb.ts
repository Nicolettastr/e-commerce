// Prisma client is used to interact with the data base in a prisma application
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// A prisma client instance is created, if it alredy exists, then it is used. if not, a new one is created. Without this, a new instance is created every time
const prismadb = globalThis.prisma || new PrismaClient();

// Asures the prisma instance is accesible globaly to facilitate its usage durind production and development
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
