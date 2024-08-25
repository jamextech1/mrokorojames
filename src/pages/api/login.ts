import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      const response = await axios.post(
        "https://portfolio-server-47si.onrender.com/okorojames/login",
        { email, password }
      );
      const { token } = response.data;
      res.setHeader("Set-Cookie", [
        `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${new Date(
          Date.now() + 24 * 60 * 60 * 1000 // 1 day
        )}; priority=High`,
      ]);
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        res
          .status(error.response?.status || 500)
          .json({ message: error.response?.data?.message || "Login failed" });
      } else {
        res.status(500).json({ message: "Something went wrong" });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
