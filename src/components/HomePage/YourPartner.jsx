import ptData from "@/data/partner";
import Image from "next/image";

const YourPartner = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex items-start justify-between gap-6">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left Side Content */}
            <div className="lg:w-1/3">
              <p className="text-blue-600 font-medium mb-2">Meet Our Expert</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Your Partner In <span className="text-blue-600">Digital</span>{" "}
                Success
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ecology is crucial for our understanding of the natural world,
                and is becoming The goal of understand ecology
              </p>
            </div>

            {/* Right Side - Partner Cards */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-6">
              {ptData?.map((item) => (
                <div key={item.id} className="px-2">
                    <PartnerList  partner={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourPartner;

const PartnerList = ({ partner }) => {
  return (
    <div className="flex flex-col  border border-[#E3E3E3] rounded-2xl drop-shadow-[0_0_60px_rgba(0,0,0,0.05)]">
      <div className="relative w-[340px] h-[387px] overflow-hidden group bg-[#E3E3E3] rounded-t-2xl">
  <Image
    src={partner.image}
    alt={partner.image}
    fill
    className="object-cover "
  />
  
  <div className="absolute left-0 bottom-0 translate-x-[120px] -translate-y-[40px] bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="flex justify-center space-x-3 p-2">
      <a
        href="#"
        className="w-8 h-8 relative rounded-full flex items-center justify-center text-gray-600 hover:text-blue-700 transition-colors"
      >
        <i className="fab fa-facebook-f text-sm after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-4 after:border-r after:border-gray-300">{partner.socialLinks.facebook}</i>
      </a>
      <a
        href="#"
        className="w-8 h-8 relative rounded-full flex items-center justify-center text-gray-600 hover:text-blue-500 transition-colors"
      >
        <i className="fab fa-twitter text-sm after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-4 after:border-r after:border-gray-300">{partner.socialLinks.twitter}</i>
      </a>
      <a
        href="#"
        className="w-8 h-8 relative rounded-full flex items-center justify-center text-gray-600 hover:text-blue-900 transition-colors"
      >
        <i className="fab fa-linkedin-in text-sm ">{partner.socialLinks.linkedin}</i>
      </a>
    </div>
  </div>
</div>

      <div className="p-2 text-center">
        <h4 className="py-[15px] text-[#192335] text-[21px] leading-[31.5px] -tracking-[0.3px] font-bold">{partner.name}</h4>
      <h5 className="text-[17px] leading-[26.1px] text-[#192335]">{partner.department}</h5>
      </div>
    </div>
  );
};
