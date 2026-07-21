export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="bg-brand-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-red">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-white/80">{description}</p>
        )}
      </div>
    </div>
  );
}
