export default function SectionLabel({ index, title }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="font-display text-sm font-semibold text-teal-deep">
        {index}
      </span>
      <span className="h-px w-10 bg-cream-line" aria-hidden="true" />
      <span className="font-body text-sm text-slate tracking-wide">
        {title}
      </span>
    </div>
  );
}
