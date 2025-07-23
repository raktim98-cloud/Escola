import { FaRegUser } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Course_image1 from "../image/course/Course_Image (1).png"
import Course_image2 from "../image/course/Course_Image (2).png"
import Course_image3 from "../image/course/Course_Image (3).png"
import clint from "../image/course/clint.png"
export const courseData = [
  {
    id: 1,
    bgImage:Course_image1,
    subject: "Development",
    icon: <FaRegUser/>,
    student: "50 Students",
    star: "5",
    reviewCount: "15",
    title: "The Power of Personal Branding",
    client_image:clint ,
    client_name: "By Angela",
    enroll: "Enroll Now",
    enroll_icon: <FaArrowRight/>
  },
  {
    id: 2,
    bgImage:Course_image2,
    subject: "Design",
    icon: <FaRegUser/>,
    student: "30 Students",
    star: "5",
    reviewCount: "11",
    title: "Design of Personal Shape Our Your Path",
    client_image:clint,
    client_name: "By Angela",
    enroll: "Enroll Now",
    enroll_icon: <FaArrowRight/>
  },
  {
    id: 3,
    bgImage:Course_image3,
    subject: "Python",
    icon: <FaRegUser/>,
    student: "20 Students",
    star: "5",
    reviewCount: "12",
    title: "Python for Data Science & Machine",
    client_image:clint,
    client_name: "By Angela",
    enroll: "Enroll Now",
    enroll_icon: <FaArrowRight/>
  }
];
