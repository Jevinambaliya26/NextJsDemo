import type { NextApiRequest, NextApiResponse } from 'next'
import { exec } from 'child_process'

const DATABASE_USER_NAME = process.env.DATABASE_USER_NAME;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_HOST = process.env.DATABASE_HOST;
const DATBASE_NAME = "vodafone"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      process.env.DATABASE_URL = `mysql://${DATABASE_USER_NAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATBASE_NAME}`
      const env = process.env.DATABASE_URL as string

      const { stdout } = await exec(`yarn run prisma migrate deploy`)

      stdout?.on('data', function (data) {
        console.log('stdout: ' + data.toString())
      })

      res.json({
        env,
      })
    } catch (error) {
      console.log('error: ', error)
    }
  }
}
