import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <form className="bg-[#182237] p-[50px] rounded-md w-[500px] h-[500px] flex flex-col justify-center gap-[30px]">
        <h1 className=" text-center text-4xl">Login</h1>
        <input
          className="p-[30px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          type="text"
          placeholder="username"
        />
        <input
          className="p-[30px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          type="password"
          placeholder="password"
        />

        <Link
          href="/dashboard"
          className="p-[30px] text-center bg-teal-500 text-white border-none cursor-pointer rounded-md"
        >
          Login
        </Link>
      </form>
    </div>
  );
}
