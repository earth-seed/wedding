interface InfoSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function InfoSection({
  title,
  description,
  children,
  className = "",
}: InfoSectionProps) {
  return (
    <section className={`py-16 md:py-20 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6 text-foreground"
            data-testid={`text-section-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {title}
          </h2>
          {description && (
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        <div className="animate-fade-in">
          {children}
        </div>
      </div>
    </section>
  );
}
