export default function SectionTitle({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 text-center">
      <h2 className={`text-2xl uppercase md:text-3xl ${light ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 text-sm font-semibold md:text-base ${light ? "text-accent-alt" : "text-accent"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
