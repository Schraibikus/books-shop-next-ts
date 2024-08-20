import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

import { API_KEY, API_URL } from "../../../const";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { subject, startIndex } = req.query;
  const params = new URLSearchParams();
  params.set("q", `subject:${subject}`);
  params.set("key", `${API_KEY}`);
  params.set("printType", "books");
  params.set("startIndex", `${startIndex}`);
  params.set("maxResults", "6");
  params.set("langRestrict", "en");
  const booksReaponse = await axios.get(`${API_URL}?${params.toString()}`);

  res.status(200).send({
    booksReaponse,
  });
}
