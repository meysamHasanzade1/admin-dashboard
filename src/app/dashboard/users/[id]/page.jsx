"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import styles from "../add/dashbord.module.css";

function SingleUserPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPassword(user.password);
      setPhone(user.phone);
      setIsAdmin(user.isAdmin);
      setIsActive(user.isActive);
    }
  }, [user]);

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/users/${id}`);
        if (!res.ok) {
          setUser(null);
        } else {
          const data = await res.json();
          setUser(data);
        }
      } catch (error) {
        console.log("خطا در دریافت کاربر", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // جلوگیری از رفرش شدن صفحه

    const formData = {
      name: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phone: e.target.phone.value,
      description: e.target.description.value,
      isAdmin: e.target.isAdmin.value === "true",
      isActive: e.target.isActive.value === "true",
    };

    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("خطا در آپدیت");

      alert("✅ کاربر با موفقیت آپدیت شد");
      router.push("/dashboard/users");
    } catch (error) {
      console.error("❌ خطا در آپدیت:", error);
      alert("❌ خطا در آپدیت کاربر");
    }
  };

  if (loading) return <p>loading...</p>;
  if (!user) return <p>user not found</p>;

  return (
    <div className="flex max-lg:items-center gap-[50px] mt-[20px] ml-0 lg:ml-80 lg:flex-row flex-col">
      <div className="flex-1/4 max-lg:w-[70%] text-[#b7bac1] bg-[#182237] p-[20px] rounded-md font-bold max-h-max">
        <div className="w-full  max-sm:h-[150px] h-[300px] relative rounded-md overflow-hidden mb-[20px] ">
          <Image src="/icons8-user.png" alt="" fill />
        </div>
        {user.name}
      </div>
      <div className=" max-lg:w-full bg-[#182237] p-[20px] rounded-md flex-3/4">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-[12px]">Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${styles.input} p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white`}
          />
          <label className="text-[12px]">Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${styles.input} p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white`}
          />
          <label className="text-[12px]">Password</label>
          <input
            type="password"
            name="password"
            placeholder={user.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${styles.input} p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white`}
          />
          <label className="text-[12px]">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={user.phone}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`${styles.input} p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white`}
          />
          <label className="text-[12px]">Address</label>
          <textarea
            type="text"
            name="description"
            placeholder="Please Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`${styles.input} p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white`}
          />
          <label className="text-[12px]">Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className={`${styles.input} p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white`}
            value={isAdmin}
            onChange={(e) => setIsAdmin(e.target.value)}
          >
            <option value={true}>{user.isAdmin ? "Yes" : "No"}</option>
            <option value={false}>{!user.isAdmin ? "Yes" : "No"}</option>
          </select>
          <label className="text-[12px]">Is Active?</label>
          <select
            name="isActive"
            id="isAcitve"
            className={`${styles.input} p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white`}
            value={isActive}
            onChange={(e) => setIsActive(e.target.value)}
          >
            <option value={true}>{user.isActive ? "Yes" : "No"}</option>
            <option value={false}>{!user.isActive ? "Yes" : "No"}</option>
          </select>
          <button className="mt-2 w-full max-sm:p-2.5 p-[30px] bg-teal-500 text-white border-none rounded-md cursor-pointer">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default SingleUserPage;
