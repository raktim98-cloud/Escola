import React from "react";
import SectionHead from "../SectionHead";
import CourseCard from "./CourseCard";
import { courseData } from "@/data/courseData";


function OurCourse() {
  return (
    <section className="py-[122px]">
      <div className="container">
        <div>
          <SectionHead
            title="Top Popular Course"
            subtitle="Building A Better Tomorrow"
            titleClass="text-primary text-blue-600 font-bold leading-[31.5px] -tracking-[0.3px] pb-[10px]"
            subtitleClass="text-[32px] text-[#192335] md:text-[42px] font-bold leading-[54.1px]"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {courseData.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
      </div>
    </section>
  );
}

export default OurCourse;
