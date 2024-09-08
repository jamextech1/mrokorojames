import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(403).json({ message: "Invalid request method" });
  }
  try {
    const filePath = path.join(process.cwd(), "public", "projects.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 400));

    return res.status(200).json({ data });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return res
        .status(error.response?.status as number)
        .json({ error: error });
    } else {
      return res
        .status(500)
        .json({ error: "Something went wrong while fetching data" });
    }
  }
}
