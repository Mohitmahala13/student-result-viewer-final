export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="/college.jpg"
            alt="SKIT Campus"
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            About SKIT
          </h2>

          <p className="text-gray-600 leading-8 text-lg">
            Swami Keshvanand Institute of Technology, Management &
            Gramothan (SKIT), Jaipur, is one of Rajasthan's leading
            engineering institutions. The institute is known for
            academic excellence, innovation, and providing quality
            education to thousands of students.
          </p>

          <button className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl transition duration-300">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}