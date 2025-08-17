// pages/api/test-db.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany();
      return res.status(200).json({ users });
    } catch (error) {
      console.error("Database connection error:", error);
      return res.status(500).json({ error: "خطا در اتصال به دیتابیس" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
