// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";

type Data = {
  name: string;
  email: string;
  ip: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const clientIp = requestIp.getClientIp(req);
  res
    .status(200)
    .json({ name: "John Doe", email: "john123@gmail.com", ip: clientIp });
}
