interface InfoSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function InfoSection({
  title,
  description,
  children,
}: InfoSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4"
            data-testid={`text-section-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {title}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
