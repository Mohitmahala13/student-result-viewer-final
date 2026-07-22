"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGraduationCap } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-4">

  <Link
    href="/"
    className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
      pathname === "/"
        ? "bg-blue-700 text-white shadow-lg"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
    }`}
  >
    Home
  </Link>

  <Link
    href="/student-login"
    className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
      pathname === "/student-login"
        ? "bg-blue-700 text-white shadow-lg"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
    }`}
  >
    Student Login
  </Link>

  <Link
    href="/admin-login"
    className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
      pathname === "/admin-login"
        ? "bg-blue-700 text-white shadow-lg"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
    }`}
  >
    Admin Login
  </Link>

</div>
    </nav>
  );
}