/// <reference types="./types" />

import { PrismaClient } from '@prisma/client'

// Prevent multiple instances of Prisma Client in development
const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export const getPrismaClient = (DATABASE_NAME: string) => {
  const DATABASE_USER_NAME = process.env.DATABASE_USER_NAME
  const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
  const DATABASE_HOST = process.env.DATABASE_HOST

  const client = new PrismaClient({
    datasources: {
      db: { url: `mysql://${DATABASE_USER_NAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}` },
    },
  })

  return client
}

export default prisma
