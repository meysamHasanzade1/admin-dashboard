// lib/handleDelete.js

export default async function handleDelete(userId, onSuccess) {
  const confirmed = confirm("Are you sure you want to remove this user?");
  if (!confirmed) return;

  try {
    const res = await fetch(`/api/users/${userId}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("حذف کاربر ناموفق بود");

    const data = await res.json();
    console.log("✅ کاربر حذف شد:", data);

    if (onSuccess) onSuccess(); // رفرش لیست یا حذف از state
  } catch (err) {
    console.error("❌ خطا در حذف:", err);
    alert("خطایی در حذف رخ داد");
  }
}
