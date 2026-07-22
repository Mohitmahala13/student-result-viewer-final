"use client";

import { FaUserGraduate, FaAward, FaQuoteLeft } from "react-icons/fa";
export default function Hero() {
  

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            🎓 Welcome to SKIT
          </span>

          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mt-6">
            Student Result
            <br />
            Portal
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Check your semester results instantly through our secure
            and modern result management portal.
          </p>

          {/* Search */}

          <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-700 rounded-xl p-6 shadow-lg max-w-xl">

  <FaQuoteLeft className="text-blue-700 text-3xl mb-4" />

  <p className="text-xl italic text-gray-700 leading-relaxed">
    "Your result is a reflection of your effort,
    not the limit of your potential."
  </p>

  <p className="mt-4 text-sm text-gray-500 font-medium">
    Keep learning, keep improving, and success will follow.
  </p>

</div>

          {/* Stats */}

          <div className="flex gap-12 mt-12">

            <div>
              <h2 className="text-4xl font-bold text-blue-700">
                2500+
              </h2>

              <p className="text-gray-600">
                Students
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-600">
                98%
              </h2>

              <p className="text-gray-600">
                Pass Rate
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-purple-600">
                2026
              </h2>

              <p className="text-gray-600">
                Session
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="relative">

          <img
            src="/college.jpg"
            alt="Campus"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />

          {/* Floating Card */}

          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">

            <div className="bg-blue-100 p-4 rounded-full">
              <FaUserGraduate className="text-blue-700 text-3xl" />
            </div>

            <div>
              <h3 className="font-bold text-xl text-gray-800">
                2500+
              </h3>

              <p className="text-gray-500">
                Students
              </p>
            </div>

          </div>

          <div className="absolute top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">

            <div className="bg-green-100 p-4 rounded-full">
              <FaAward className="text-green-700 text-3xl" />
            </div>

            <div>
              <h3 className="font-bold text-xl text-gray-800">
                98%
              </h3>

              <p className="text-gray-500">
                Success Rate
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}