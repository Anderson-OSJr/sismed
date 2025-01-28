import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    email: "anderson@email.com",
    name: "Anderson Silva Junior",
    hashPassword: "#$%¨¨&123UI",
  },
  {
    email: "jose@email.com",
    name: "José da Silva",
    hashPassword: "$%%!!TYU9012",
  },
  {
    email: "chico_paiva@email.com",
    name: "Francisco Paiva",
    hashPassword: "RT&**&#129",
  },
];

const main = async () => {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
};

main();
