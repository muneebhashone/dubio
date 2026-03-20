interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  className?: string;
}

export default function SectionHeader({ eyebrow, title, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <span className="inline-block text-[#7C3AED] text-sm font-semibold tracking-widest uppercase mb-3 font-[family-name:var(--font-syne)]">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-normal font-[family-name:var(--font-instrument-serif)] italic launch-gradient-text">
        {title}
      </h2>
    </div>
  );
}
