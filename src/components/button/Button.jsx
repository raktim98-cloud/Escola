

export default function Button({text,buttonClass = "", textClass = ""}) {
  return (
    <button className={`bg-primary  relative inline-flex items-center justify-start inline-block overflow-hidden font-bold  group ${buttonClass}`}>
      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-1000 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
      <span className={`relative w-full text-left transition-colors duration-200 ease-in-out  ${textClass}`}>
        {text}
      </span>
    </button>
  );
}
