import type { NextApiRequest, NextApiResponse } from "next";
import { validate } from "@/utils/validate";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send({ error: true, message: "Only POST" });
  }

  const { email, password } = req.body;
  console.log(req.body);
  const validatedInfo = validate(email, password);
  if (!validatedInfo) {
    res
      .status(400)
      .send({ error: true, message: "Email or password are incorrect" });
  } else {
    res.status(200).send({ success: true, token: "testToken" });
  }
}
