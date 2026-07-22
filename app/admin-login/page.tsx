"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      router.push("/admin-dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-xl rounded-xl p-8 w-[400px]">

        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Admin Login
        </h1>

        <input
          type="text"
          placeholder="Admin Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4 text-black"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg p-3 mb-6 text-black"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
        >
          Login
        </button>

      </div>

    </main>
  );
}