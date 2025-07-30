import Image from "next/image";
import Contact_Image from "../../image/contact image.png";
import Contact_Banner from "../../image/Contact_banner.png";

export default function ContactSection() {
  return (
    <section
      style={{
        backgroundImage: `url(${Contact_Banner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="text-white py-16 px-6 md:px-12"
    >
      <div className="container max-w-6xl mx-auto space-y-12">
        
        {/* Top part: text only */}
        <div className="text-center space-y-4">
          <p className="text-sm text-blue-500 font-semibold">Clients Review</p>
          <h2 className="text-4xl font-bold leading-tight">
            Bringing your <span className="text-blue-500">vision</span> to life
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            For your car we will do everything advice design in us repairs and maintenance. We are the some preferred
          </p>
        </div>
        
        {/* Bottom part: image + form together */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={Contact_Image}
              alt="Illustration"
              className="w-full max-w-md"
            />
          </div>
          
          {/* Form */}
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
        
      </div>
    </section>
  );
}
