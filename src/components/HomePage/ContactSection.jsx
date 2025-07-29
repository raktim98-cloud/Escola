export default function ContactSection() {
  return (
    <section className="bg-[#0F172A] text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Text and Image */}
        <div className="space-y-6">
          <p className="text-sm text-blue-500 font-semibold">Clients Review</p>
          <h2 className="text-4xl font-bold leading-tight">
            Bringing your <span className="text-blue-500">vision</span> to life
          </h2>
          <p className="text-gray-300">
            For your car we will do everything — advice, design, repairs, and maintenance. 
            We are the some preferred.
          </p>

          {/* Placeholder for image */}
          <div className="mt-8">
            <img
              src="/contact-illustration.svg"
              alt="Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded text-white font-semibold"
          >
            submit now
          </button>
        </form>
      </div>
    </section>
  );
}
