interface EventCardProps {
  time: string;
  title: string;
  description: string;
}

export default function EventCard({
  time,
  title,
  description,
}: EventCardProps) {
  return (
    <div className="border-l-2 border-primary/30 pl-6 py-4">
      <div
        className="text-sm text-muted-foreground mb-2"
        data-testid={`text-event-time-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {time}
      </div>
      <h3
        className="text-2xl font-serif mb-3"
        data-testid={`text-event-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
