import {
  FaUserGraduate,
  FaChartLine,
  FaCalendarAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function Statistics() {
  const stats = [
    {
      icon: <FaUserGraduate />,
      value: "2500+",
      title: "Students",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: <FaChartLine />,
      value: "98%",
      title: "Pass Rate",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: <FaCalendarAlt />,
      value: "2026",
      title: "Current Session",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      icon: <FaChalkboardTeacher />,
      value: "50+",
      title: "Faculty",
      color: "text-red-600",
      bg: "bg-red-100",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          Portal Statistics
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl ${item.bg} ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className={`text-4xl font-bold mt-6 ${item.color}`}>
                {item.value}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}