import { FaRegEnvelope } from "react-icons/fa";

export default function NewsletterSubscribe() {
  return (
    <section className="pb-25">
      <div className="container">
        <div className="flex items-center justify-center gap-[80px] text-white bg-[#0ED6A0] rounded-lg  px-[52px] py-[75px]">
          <div className="flex items-center gap-[33.4px] ">
            <FaRegEnvelope className="text-4xl md:text-5xl" />
            <div className="font-bold text-[30px] md:text-[42px] leading-[54.1px]">
              Subscribe Your <br /> Email For  Newsletter
            </div>
          </div>
           <form className="flex  bg-white rounded-full overflow-hidden">
        <input
          type="email"
          placeholder="Your e-mail address"
          className="flex-1 px-4 py-3 rounded-full text-gray-700 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold"
        >
          Submit now
        </button>
      </form>
        </div>
        
      </div>
    </section>
  );
}
