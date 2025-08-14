// src/functions/updateUser.js

export const updateUser = async (id, formData) => {
  try {
    const res = await fetch(`/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("خطا در آپدیت کاربر");

    return await res.json();
  } catch (error) {
    console.error("❌ خطا:", error);
    throw error;
  }
};
