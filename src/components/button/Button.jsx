"use client";
import { useRouter } from 'next/navigation'
export default function Button({text,buttonClass = "", textClass = "",firstSpanClass="",secondSpanClass="",target = "/"}) {
  const router = useRouter()
  const handleButton = ()=> {
    router.push(target)
  }
  return (
    <button onClick={handleButton} className={`bg-primary  relative inline-flex items-center justify-start overflow-hidden  font-bold  group ${buttonClass}`}>
      {/* <span className={`w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%] 
        ${firstSpanClass}`}></span> */}
      <span className={`absolute top-15 -left-2 w-48 h-48 -mt-1 transition-all duration-1000 ease-in-out rotate-60 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-5 ${secondSpanClass}`}></span>
      <span className={`relative w-full text-left transition-colors duration-2200 ease-in-out  ${textClass}`}>
        {text}
      </span>
    </button>
  );
}
