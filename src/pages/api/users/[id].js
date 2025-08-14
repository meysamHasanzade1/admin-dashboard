import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
      });

      if (!user) {
        return res.status(404).json({ error: "کاربر پیدا نشد" });
      }

      res.status(200).json(user);
    } catch (error) {
      console.error("❌ خطا در گرفتن کاربر:", error);
      res.status(500).json({ error: "خطا در گرفتن اطلاعات کاربر" });
    }
  } else if (req.method === "DELETE") {
    try {
      const deletedUser = await prisma.user.delete({
        where: { id: parseInt(id) },
      });

      res.status(200).json(deletedUser);
    } catch (error) {
      console.error("❌ خطا در حذف:", error);
      res.status(500).json({ error: "خطا در حذف کاربر" });
    }
  } else if (req.method === "PUT") {
    try {
      const { name, email, password, phone, description, isAdmin, isActive } =
        req.body;

      const updatedUser = await prisma.user.update({
        where: { id: parseInt(id) },
        data: {
          name,
          email,
          password,
          phone,
          description,
          isAdmin,
          isActive,
        },
      });

      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("❌ خطا در آپدیت کاربر:", error);
      res.status(500).json({ error: "خطا در آپدیت کاربر" });
    }
  } else {
    res.setHeader("Allow", ["GET", "DELETE", "PUT"]);
    res.status(405).json({ error: `Method ${req.method} پشتیبانی نمی‌شود` });
  }
}
