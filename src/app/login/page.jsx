import React from "react";

function Login() {
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
          type="text"
          placeholder="password"
        />
        <button className="p-[30px] bg-teal-500 text-white border-none cursor-pointer rounded-md">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
