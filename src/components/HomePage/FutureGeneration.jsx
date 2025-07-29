import { generationData } from "@/data/futureGeneration";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import SectionHead from "../SectionHead";
function FutureGeneration() {
  return (
    <section className="py-[200px]">
       <div className="flex items-center justify-center px-[400px]">
                     <SectionHead
                       title="Future Generations"
                       subtitle="Preserving the earth for future generations"
                       headClass=" text-center"
                       titleClass="text-primary text-blue-600 text-[18px] font-bold leading-[31.5px] -tracking-[0.3px] pb-[10px]"
                       subtitleClass="text-[32px] text-[#192335] md:text-[42px] font-bold leading-[54px]"

                     />
                   </div>
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {generationData?.map((item)=> (
                <GenerationList key={item.id} generation={item}/>
            ))}

        </div>
    </div>
  </section>
  )
}

export default FutureGeneration;

const GenerationList = ({ generation }) => {
  return (
    <div
      className="grid grid-cols-[270px_1fr] relative px-[30px] py-[40px] rounded-[5px]"
      style={{ backgroundColor: generation.mainBg }}
    >
      <div className="text-start">
        <div
          className="w-[80px] h-[80px] rounded flex items-center justify-center mb-[30px]"
          style={{ backgroundColor: generation.iconBg }}
        >
          <Image
            src={generation.icon}
            alt={generation.title}
            width={45}
            height={45}
            className="object-contain"
            // style={{ backgroundColor: "red" }}
          />
        </div>
        <h4 className="text-[21px] leading-[31.5px] -tracking-[0.3px] font-bold capitalize mb-2">{generation.title}</h4>
        <p className="text-[17px] text-[#192335] pb-5 pt-4">{generation.dis}</p>
        <div className="flex items-center gap-[10px] text-[14px] font-medium cursor-pointer">
          <h5>Read More</h5>
          <FaArrowRight />
        </div>
      </div>

      {/* right side image */}
      <div className="relative">
        <Image
          src={generation.image}
          alt={generation.title}
          fill
          className="object-cover translate-y-10"
        />
      </div>
    </div>
  );
};

