// pages/api/users.js

import prisma from "@/lib/prisma"; // مسیر رو اگر لازم بود نسبی کن

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, password, phone, description } = req.body;

      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ error: "لطفاً همه فیلدهای ضروری را وارد کنید" });
      }

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password,
          phone,
          description,
        },
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error("خطای سرور:", error);
      res.status(500).json({ error: "خطای داخلی سرور" });
    }
  } else {
    res.status(405).json({ error: "روش پشتیبانی نمی‌شود" });
  }
}
