import Image from "next/image";
export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-[410px] h-[250px] overflow-hidden rounded-t-xl">
  <Image 
    src={course.bgImage} 
    alt={course.title} 
    fill
    className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
  />
  <span className="absolute top-4 left-5 bg-blue-600 text-white text-[13px] leading-[21px] font-medium px-[15px] py-[9px] rounded cursor-pointer">
    {course.subject}
  </span>
</div>

      
      <div className="p-4">
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <span className="text-blue-600">{course.icon}</span>
            <span>{course.student}</span>
          </div>
          <div className="flex items-center gap-1 text-[22px]">
            <span className="text-yellow-500 ">
              {"★".repeat(Number(course.star))}
            </span>
            <span className="text-[15px]">({course.reviewCount})</span>
          </div>
        </div>
        
        <h3 className="text-[25px] font-bold leading-[32.5px] mt-2 text-[#192335]">
          {course.title}
        </h3>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <Image 
              src={course.client_image} 
              alt={course.client_name} 
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm font-bold leading-[21px] text-gray-600">{course.client_name}</span>
          </div>
          <button className="flex items-center text-blue-600 text-[18px] leading-[36px] font-bold hover:underline">
            {course.enroll} 
            <span className="ml-1">{course.enroll_icon}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
