import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;
  const response = await fetch(url as any);
  const data = await response.text();
  res.end(data);
}
