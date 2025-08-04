import Image from "next/image";
import SectionHead from "../SectionHead";
import Button from "../button/Button";
import BlogImage1 from "../../image/blog/blog1.png"
import BlogImage2 from "../../image/blog/blog2.png"
import BlogImage3 from "../../image/blog/blog3.png"
import { FaRegUser } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";

const blogData = [
  {
    id:1,
    image:BlogImage1,
    discrip:"Empowering your business for growth"
  },
  {
    id:2,
    image:BlogImage2,
    discrip:"Hard Work Always Brings You Success"
  },
  {
    id:3,
    image:BlogImage3,
    discrip:"Results-driven consulting at its finest"
  },
]
function Blogsection() {
  return (
    <section className="py-25">
     <div className="container">
         <div className="grid grid-cols-2 gap-3 py-[50px]">
        <SectionHead
          title="Blog & Artical"
          subtitle="Business strategy is the plan and actions"
          titleClass="text-primary text-blue-600 font-bold leading-[31.5px] -tracking-[0.3px] pb-[10px]"
          subtitleClass="text-[32px] text-[#192335] md:text-[42px] font-bold leading-[54.1px]"
        />
       <div className="flex items-center justify-end">
         <Button
          text="All Blogs"
          buttonClass="px-[25px] py-[16px] rounded-[5px]"
          textClass="text-white group-hover:text-white"
        />
       </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] ">
        {blogData?.map((item)=> <BlogList key={item.id} blog={item}/> )}
      </div>
     </div>
    </section>
  );
}

export default Blogsection;


const BlogList = ({blog})=> {
    return(
        <div className="relative max-w-[410px] h-[500px] drop-shadow-[0_0_60px_rgba(0,0,0,0.02)] overflow-hidden">
            <Image
            src={blog.image}
            alt="iamge"
            width={410}
            height={390}
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
            <div className="absolute bottom-0 left-1/2 translate-x-[-50%] -translate-y-[50%] px-[25px] py-[20px] bg-white shadow-md rounded-md w-[90%]">

                <div className="flex items-center justify-between pb-[19px]">
                  <div className="flex items-center justify-center gap-[10px]">
                      <span><FaRegUser/></span>
                      <h6>Admin</h6>
                  </div>
                  <div className="flex items-center justify-between gap-[10px]">
                      <span><FaRegCalendarDays/></span>
                      <h6>Oct 19, 2023</h6>
                  </div>
                </div>
                <hr className="text-[#E3E3E3]" />
                <h3 className="pt-[30px] text-[21px] leading-[31.5px] -tracking-[0.3px] text-[#192335] font-bold">{blog.discrip}</h3>
            </div>
        </div>
    )
}