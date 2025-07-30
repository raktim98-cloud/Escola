export default function SectionHead({ title, subtitle, titleClass = "", subtitleClass = "", headClass = "" }) {
  return (
    <div className={`mb-8 ${headClass}`}>
      <h5 className={`text-[18px] -tracking-[0.3px] leading-[31.5px] font-bold pb-2 text-blue-500 ${titleClass}`}>
        {title}
      </h5>
      <h2 className={`text-[42px] leading-[54.1px] font-bold text-[#192335] ${subtitleClass}`}>
        {subtitle}
      </h2>
    </div>
  );
}
