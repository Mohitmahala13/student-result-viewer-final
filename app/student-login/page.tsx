"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { students as defaultStudents } from "@/data/students";
import { getStudents } from "@/lib/studentStorage";

export default function StudentLogin() {
  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
   const students = getStudents(defaultStudents);

const student = students.find(
  (s) => s.roll === roll && s.password === password
);
    if (!student) {
      alert("Invalid Roll Number or Password");
      return;
    }

    router.push(`/result?roll=${roll}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-[400px]">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Student Login
        </h1>

        <input
          type="text"
          placeholder="Enter Roll Number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4 text-black"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg p-3 mb-6 text-black"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800"
        >
          Login
        </button>
      </div>
    </main>
  );
}