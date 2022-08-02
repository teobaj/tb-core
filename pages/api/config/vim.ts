import type { NextApiRequest, NextApiResponse } from "next";
import { vimconf } from "./_config";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.send(vimconf);
}
