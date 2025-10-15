interface EventCardProps {
  time: string;
  title: string;
  description?: string;
}

export default function EventCard({
  time,
  title,
  description,
}: EventCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-6 hover:from-primary/10 hover:to-accent/10 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] transform">
      <div className="space-y-4">
        <div className="text-sm font-display tracking-wider text-primary/80 uppercase bg-primary/10 px-3 py-1 rounded-full inline-block">
          {time}
        </div>
        <h3 className="text-2xl md:text-3xl font-display font-light text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
        )}
      </div>
    </div>
  );
}
