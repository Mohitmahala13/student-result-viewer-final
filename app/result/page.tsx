"use client";

import { useEffect, useState } from "react";
import { Student } from "@/types/student";
import { students as defaultStudents } from "@/data/students";
import { getStudents } from "@/lib/studentStorage";
import { useSearchParams } from "next/navigation";
import { FaUserGraduate, FaPrint } from "react-icons/fa";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const roll = searchParams.get("roll");
  const [students, setStudents] = useState<Student[]>([]);

useEffect(() => {
  setStudents(getStudents(defaultStudents));
}, []);

  const student = students.find((s) => s.roll === roll);

  if (students.length === 0) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Loading...</h1>
    </main>
  );
}

if (!student) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">
        Student Not Found
      </h1>
    </main>
  );
}

  const total = student.subjects.reduce(
    (sum, subject) => sum + subject.marks,
    0
  );

  const percentage = (
    (total /
    (student.subjects.length * 100))*100
  ).toFixed(2);

  const percentageValue = Number(percentage);

const status = percentageValue >= 40 ? "PASS" : "FAIL";

let grade = "";

if (percentageValue >= 90) grade = "A+";
else if (percentageValue >= 80) grade = "A";
else if (percentageValue >= 70) grade = "B";
else if (percentageValue >= 60) grade = "C";
else if (percentageValue >= 40) grade = "D";
else grade = "F";

const remarks =
  percentageValue >= 90
    ? "Outstanding"
    : percentageValue >= 75
    ? "Very Good"
    : percentageValue >= 60
    ? "Good"
    : percentageValue >= 40
    ? "Pass"
    : "Needs Improvement";

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 py-10 px-4">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-8 text-center">
          <h1 className="text-4xl font-bold">
            SKIT Student Result Portal
          </h1>
          <p className="mt-2">
            Semester Examination Result
          </p>
        </div>

        {/* Student Info */}
        <div className="p-8">

          <div className="flex items-center gap-5 mb-8">

            <div className="bg-blue-100 p-5 rounded-full">
              <FaUserGraduate className="text-5xl text-blue-700" />
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                {student.name}
              </h2>

              <p className="text-gray-600">
                Roll No : {student.roll}
              </p>

              <p className="text-gray-600">
                {student.branch}
              </p>

              <p className="text-gray-600">
                {student.semester}
              </p>

              <p className="text-gray-600">
  Result Date: {new Date().toLocaleDateString("en-IN")}
</p>
            </div>

          </div>

          {/* Marks Table */}

          <table className="w-full border rounded-lg overflow-hidden">

            <thead className="bg-blue-700 text-white">

              <tr>
                <th className="p-4">Subject</th>
                <th className="p-4">Marks</th>
              </tr>

            </thead>

            <tbody>

              {student.subjects.map((subject, index) => (

                <tr
                  key={index}
                  className="text-center border-b hover:bg-blue-50"
                >
                  <td className="p-4 text-gray-800">{subject.name}</td>
                  <td className="p-4 font-semibold text-gray-800">
                    {subject.marks}
                  </td>
                </tr>

              ))}

            </tbody>

          </table>

          {/* Summary Cards */}

          <div className="grid md:grid-cols-3 gap-5 mt-6">

  <div
    className={`rounded-xl p-5 text-center shadow ${
      status === "PASS" ? "bg-green-100" : "bg-red-100"
    }`}
  >
    <h3
      className={`text-2xl font-bold ${
        status === "PASS" ? "text-green-700" : "text-red-700"
      }`}
    >
      {status}
    </h3>
    <p className="text-gray-700">Status</p>
  </div>

  <div className="bg-blue-100 rounded-xl p-5 text-center shadow">
    <h3 className="text-2xl font-bold text-blue-700">
      {grade}
    </h3>
    <p className="text-gray-700">Grade</p>
  </div>

  <div className="bg-yellow-100 rounded-xl p-5 text-center shadow">
    <h3 className="text-xl font-bold text-yellow-700">
      {remarks}
    </h3>
    <p className="text-gray-700">Remarks</p>
  </div>

</div>

          <div className="grid md:grid-cols-4 gap-5 mt-10">

            <div className="bg-blue-100 rounded-xl p-5 text-center shadow">
              <h3 className="text-xl font-bold text-blue-700">
                {total}
              </h3>
              <p className="text-gray-700">Total Marks</p>
            </div>

            <div className="bg-green-100 rounded-xl p-5 text-center shadow">
              <h3 className="text-xl font-bold text-green-700">
                {percentage}%
              </h3>
              <p className="text-gray-700">Percentage</p>
            </div>

            <div className="bg-yellow-100 rounded-xl p-5 text-center shadow">
              <h3 className="text-xl font-bold text-yellow-700">
                {student.sgpa}
              </h3>
              <p className="text-gray-700">SGPA</p>
            </div>

            <div className="bg-purple-100 rounded-xl p-5 text-center shadow">
              <h3 className="text-xl font-bold text-purple-700">
                {student.cgpa}
              </h3>
              <p className="text-gray-700">CGPA</p>
            </div>

          </div>

          {/* Print Button */}

          <div className="text-center mt-10">

            <button
              onClick={() => window.print()}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto"
            >
              <FaPrint />
              Print Result
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}