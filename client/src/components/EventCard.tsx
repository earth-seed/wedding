import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface EventCardProps {
  time: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isLeft?: boolean;
}

export default function EventCard({
  time,
  title,
  description,
  icon: Icon,
  isLeft = false,
}: EventCardProps) {
  return (
    <div
      className={`flex gap-6 md:gap-8 items-start ${
        isLeft ? "md:flex-row-reverse md:text-right" : ""
      }`}
    >
      <div className="flex-1">
        <Card className="hover-elevate transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div
                  className="text-sm font-medium text-muted-foreground mb-1"
                  data-testid={`text-event-time-${title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {time}
                </div>
                <h3
                  className="text-xl font-serif font-semibold mb-2"
                  data-testid={`text-event-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {title}
                </h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
