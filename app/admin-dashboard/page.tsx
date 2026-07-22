"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  FaUsers,
  FaSearch,
  FaPlus,
  FaTrash,
  FaEdit,
  FaEye,
  FaCheckCircle,
  FaGraduationCap,
} from "react-icons/fa";

import { Student } from "@/types/student";
import { students as defaultStudents } from "@/data/students";
import { getStudents, saveStudents } from "@/lib/studentStorage";

export default function AdminDashboard() {

const [students,setStudents]=useState<Student[]>([]);
const [search,setSearch]=useState("");

const [showModal,setShowModal]=useState(false);
const filteredStudents = students.filter((student) =>
  student.name.toLowerCase().includes(search.toLowerCase()) ||
  student.roll.toLowerCase().includes(search.toLowerCase())
);

const [editingIndex,setEditingIndex]=useState<number|null>(null);

const [form,setForm]=useState<Student>({
roll:"",
password:"",
name:"",
branch:"",
semester:"",
sgpa:0,
cgpa:0,

subjects:[
{name:"Subject 1",marks:0},
{name:"Subject 2",marks:0},
{name:"Subject 3",marks:0},
{name:"Subject 4",marks:0},
{name:"Subject 5",marks:0},
],
});

useEffect(()=>{

const data=getStudents(defaultStudents);

setStudents(data);

},[]);

const resetForm=()=>{

setForm({

roll:"",
password:"",
name:"",
branch:"",
semester:"",
sgpa:0,
cgpa:0,

subjects:[
{name:"Subject 1",marks:0},
{name:"Subject 2",marks:0},
{name:"Subject 3",marks:0},
{name:"Subject 4",marks:0},
{name:"Subject 5",marks:0},
],

});

setEditingIndex(null);

};

const publishStudent=()=>{

let updated=[...students];

if(editingIndex!==null){

updated[editingIndex]=form;

}else{

updated.push(form);

}

setStudents(updated);

saveStudents(updated);

setShowModal(false);

resetForm();

};

const deleteStudent=(index:number)=>{

const updated=students.filter((_,i)=>i!==index);

setStudents(updated);

saveStudents(updated);

};

const editStudent=(index:number)=>{

setForm(students[index]);

setEditingIndex(index);

setShowModal(true);

};

const passStudents = students.filter((student) => {
  const total = student.subjects.reduce(
    (sum, subject) => sum + subject.marks,
    0
  );

  const percentage = (total / (student.subjects.length * 100)) * 100;

  return percentage >= 40;
});

const passPercentage =
  students.length === 0
    ? 0
    : ((passStudents.length / students.length) * 100).toFixed(0);
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        Admin Dashboard
      </h1>

      <div className="flex justify-between items-center mb-8">

  <input
  type="text"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search Student..."
  className="w-full md:w-96 px-4 py-3 border rounded-lg shadow text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

  <button
    onClick={() => setShowModal(true)}
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
  >
    <FaPlus />
    Add Student
  </button>

</div>

      {/* Dashboard Cards */}

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4">
          <FaUsers className="text-5xl text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold">
              {students.length}
            </h2>
            <p>Total Students</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4">
          <FaCheckCircle className="text-5xl text-green-600" />
          <div>
            <h2 className="text-3xl font-bold">
              {passPercentage}%
            </h2>
            <p>Pass Percentage</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4">
          <FaGraduationCap className="text-5xl text-purple-600" />
          <div>
            <h2 className="text-3xl font-bold">
              12
            </h2>
            <p>Departments</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4">
  <FaGraduationCap className="text-5xl text-purple-600" />
  <div>
    <h2 className="text-3xl font-bold">
      2026
    </h2>
    <p>Current Session</p>
  </div>
</div>

      </div>

      {/* Student Table */}

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>
              <th className="p-4">Roll No</th>
              <th className="p-4">Name</th>
              <th className="p-4">Branch</th>
              <th className="p-4">SGPA</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredStudents.map((student, index) => (

              <tr
                key={index}
                className="border-b text-center hover:bg-gray-50"
              >

                <td className="p-4 text-black">
                  {student.roll}
                </td>

                <td className="p-4 text-black">
                  {student.name}
                </td>

                <td className="p-4 text-black">
                  {student.branch}
                </td>

                <td className="p-4 text-black">
                  {student.sgpa}
                </td>

                <td className="p-4">
  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
    PASS
  </span>
</td>

                <td className="p-4">
  <div className="flex justify-center gap-2">

    <button
      onClick={() => editStudent(index)}
      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg"
      title="Edit Student"
    >
      <FaEdit />
    </button>

    <button
      onClick={() => {
        if (confirm("Are you sure you want to delete this student?")) {
          deleteStudent(index);
        }
      }}
      className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"
      title="Delete Student"
    >
      <FaTrash />
    </button>

    <Link
      href={`/result?roll=${student.roll}`}
      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg"
      title="View Result"
    >
      <FaEye />
    </Link>

  </div>
</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {showModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div className="bg-white rounded-2xl w-[700px] max-h-[90vh] overflow-y-auto p-8">

      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        Add New Student
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          placeholder="Student Name"
          className="border p-3 rounded-lg text-black"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Roll Number"
          className="border p-3 rounded-lg text-black"
          value={form.roll}
          onChange={(e) =>
            setForm({ ...form, roll: e.target.value })
          }
        />

        <input
          placeholder="Password"
          className="border p-3 rounded-lg text-black"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <input
          placeholder="Branch"
          className="border p-3 rounded-lg text-black"
          value={form.branch}
          onChange={(e) =>
            setForm({ ...form, branch: e.target.value })
          }
        />

        <input
          placeholder="Semester"
          className="border p-3 rounded-lg text-black"
          value={form.semester}
          onChange={(e) =>
            setForm({ ...form, semester: e.target.value })
          }
        />

        <input
  type="number"
  step="0.01"
  placeholder="SGPA"
  className="border p-3 rounded-lg text-black"
  value={form.sgpa}
  onChange={(e) =>
    setForm({ ...form, sgpa: Number(e.target.value) })
  }
/>

<input
  type="number"
  step="0.01"
  placeholder="CGPA"
  className="border p-3 rounded-lg text-black"
  value={form.cgpa}
  onChange={(e) =>
    setForm({ ...form, cgpa: Number(e.target.value) })
  }
/>

<div className="col-span-2 mt-6">
  <h3 className="text-xl font-bold mb-4 text-blue-700">
    Subjects & Marks
  </h3>

  {form.subjects.map((subject, index) => (
    <div key={index} className="grid grid-cols-2 gap-4 mb-3">

      <input
        className="border p-3 rounded-lg text-black"
        placeholder={`Subject ${index + 1} Name`}
        value={subject.name}
        onChange={(e) => {
          const updatedSubjects = [...form.subjects];
          updatedSubjects[index].name = e.target.value;
          setForm({
            ...form,
            subjects: updatedSubjects,
          });
        }}
      />

      <input
        type="number"
        className="border p-3 rounded-lg text-black"
        placeholder="Marks"
        value={subject.marks}
        onChange={(e) => {
          const updatedSubjects = [...form.subjects];
          updatedSubjects[index].marks = Number(e.target.value);
          setForm({
            ...form,
            subjects: updatedSubjects,
          });
        }}
      />

    </div>
  ))}
</div>

      </div>

      <div className="flex justify-end gap-4 mt-8">

        <button
          onClick={() => setShowModal(false)}
          className="bg-gray-500 text-white px-6 py-3 rounded-lg"
        >
          Cancel
        </button>

        <button
  onClick={publishStudent}
  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg"
>
          Publish Student
        </button>

      </div>

    </div>

  </div>
)}

    </main>
  );
}