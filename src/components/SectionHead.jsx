export default function SectionHead({title,subtitle,titleClass = "",subtitleClass = ""}) {
  return (
    <div className="text-center mb-8">
      <h5 className={`${titleClass}`}>{title}</h5>
      <h2 className={`${subtitleClass}`}>{subtitle}</h2>
    </div>
  );
}
