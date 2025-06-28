"use client";
import { useState } from "react";

function AddUsers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  // const [admin, setAdmin] = useState(false);
  // const [active, setActive] = useState(false);
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        phone,
        description,
      }),
    });
    const data = await res.json();
    alert("User created: " + JSON.stringify(data));
  };

  return (
    <div className="bg-[#182237] p-[20px] rounded-md mt-[20px]">
      <form onSubmit={handleSubmit} className="flex justify-between flex-wrap">
        <input
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          type="text"
          placeholder="username"
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          required
        />
        <input
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
        />
        <select
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          name="isAdmin"
          id="isAdmin"
          // value={admin}
          // onChange={(e) => setAdmin(e.target.value)}
        >
          <option className="bg-[#182237]" value={true} selected>
            Is Admin?
          </option>
          <option className="bg-[#182237]" value={true}>
            Yes
          </option>
          <option className="bg-[#182237]" value={false}>
            No
          </option>
        </select>
        <select
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          name="isActive"
          id="isActive"
          // value={active}
          // onChange={(e) => setActive(e.target.value)}
        >
          <option className="bg-[#182237]" value={false} selected>
            Is Active?
          </option>
          <option className="bg-[#182237]" value={true}>
            Yes
          </option>
          <option className="bg-[#182237]" value={false}>
            No
          </option>
        </select>

        <textarea
          className="p-[30px] w-full text-white border-2 border-[#2e374a] h-70 mb-6"
          rows={16}
          name="desc"
          id="desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        ></textarea>
        <button
          className="w-full p-[30px] bg-teal-500 text-white border-none rounded-md cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUsers;
