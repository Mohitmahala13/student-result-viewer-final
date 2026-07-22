export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold mb-3">
            SKIT Student Result Portal
          </h2>

          <p className="text-gray-300">
            Swami Keshvanand Institute of Technology,
            Management & Gramothan, Jaipur.
          </p>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Student Login</li>
            <li>Admin Login</li>
            <li>Results</li>
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-3">
            Contact
          </h3>

          <p className="text-gray-300">
            📍 Jaipur, Rajasthan
          </p>

          <p className="text-gray-300">
            📧 support@skit.ac.in
          </p>

          <p className="text-gray-300">
            ☎ +91 9876543210
          </p>
        </div>

      </div>


      <div className="border-t border-blue-700 py-4 text-center text-gray-400">
        © 2026 SKIT Student Result Portal | Internship Project
      </div>

    </footer>
  );
}