export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Our Portal?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-gray-800">
              Fast
            </h3>
            <p className="text-gray-600 mt-3">
              Get your semester results instantly with a quick and easy search.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-gray-800">
              Secure
            </h3>
            <p className="text-gray-600 mt-3">
              Student information is protected with secure login and access.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <div className="text-5xl mb-4">🖨️</div>
            <h3 className="text-2xl font-bold text-gray-800">
              Printable
            </h3>
            <p className="text-gray-600 mt-3">
              Download or print your result anytime with one click.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-gray-800">
              Responsive
            </h3>
            <p className="text-gray-600 mt-3">
              Access the portal seamlessly from desktop, tablet, or mobile.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}