"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        console.log("Before push");
        router.push("/dashboard");
        console.log("After push");
      } else {
        setError("The username or password is incorrect.");
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#151c2c] p-4">
      <div>
        <form
          onSubmit={handleLogin}
          className={`bg-[#182237] rounded-2xl shadow-xl p-8 w-80 transition-all duration-300 ${
            error ? "animate-shake" : ""
          }`}
        >
          <h1 className="text-2xl font-bold text-center mb-6">login</h1>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-all"
          >
            {loading ? (
              <div className="flex justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              "login"
            )}
          </button>
        </form>

        {/* کارت اطلاعات تست اکانت */}
        <div className="mt-4 bg-white/20 text-white rounded-lg p-4 backdrop-blur-sm shadow-lg">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">🔑</span>
            <h2 className="font-semibold">Test login credentials</h2>
          </div>
          <p className="text-sm">
            username: <span className="font-mono">admin</span>
          </p>
          <p className="text-sm">
            password: <span className="font-mono">1234</span>
          </p>
        </div>
      </div>
    </div>
  );
}
