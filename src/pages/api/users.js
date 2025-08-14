// pages/api/users.js
import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, password, phone, isActive, isAdmin, description } =
        req.body;
      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ error: "لطفاً همه فیلدهای ضروری را وارد کنید" });
      }
      const isActiveBool = isActive === "true" || isActive === true;
      const isAdminBool = isAdmin === "true" || isAdmin === true;

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password,
          phone,
          isActive: isActiveBool,
          isAdmin: isAdminBool,
          description,
        },
      });

      return res.status(201).json(newUser);
    } catch (error) {
      console.error("خطای سرور:", error);
      return res.status(500).json({ error: "خطای داخلی سرور" });
    }
  }

  // ✅ هندل متد GET
  else if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany();
      return res.status(200).json(users);
    } catch (error) {
      console.error("خطا در گرفتن کاربران:", error);
      return res.status(500).json({ error: "خطا در گرفتن کاربران" });
    }
  }

  // ❌ سایر متدها
  else {
    res.setHeader("Allow", ["GET", "POST"]);
    return res
      .status(405)
      .json({ error: `متد ${req.method} پشتیبانی نمی‌شود` });
  }
}
