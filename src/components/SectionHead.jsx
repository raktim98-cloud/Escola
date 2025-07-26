export default function SectionHead({title,subtitle,titleClass = "",subtitleClass = "",headClass=""}) {
  return (
    <div className={`mb-8${headClass}`}>
      <h5 className={`${titleClass}`}>{title}</h5>
      <h2 className={`${subtitleClass}`}>{subtitle}</h2>
    </div>
  );
}
