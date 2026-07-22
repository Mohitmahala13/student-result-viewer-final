import {
  FaUserGraduate,
  FaUserShield,
  FaChartLine,
  FaTrophy,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserGraduate className="text-5xl text-blue-600" />,
    title: "Student Login",
    description:
      "Securely access your academic results using your Roll Number and Password.",
  },
  {
    icon: <FaUserShield className="text-5xl text-green-600" />,
    title: "Admin Dashboard",
    description:
      "Add, edit, and manage student records through a simple admin interface.",
  },
  {
    icon: <FaChartLine className="text-5xl text-purple-600" />,
    title: "Automatic Analysis",
    description:
      "Percentage, grade, pass/fail status, and remarks are calculated automatically.",
  },
  {
    icon: <FaTrophy className="text-5xl text-yellow-500" />,
    title: "Performance Report",
    description:
      "View subject-wise marks, SGPA, CGPA, and overall academic performance.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">
          Powerful Features
        </h2>

        <p className="text-center text-gray-600 text-lg mb-14">
          Everything you need to manage and view student results efficiently.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}