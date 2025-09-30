import EventCard from '../EventCard'
import { Music } from 'lucide-react'

export default function EventCardExample() {
  return (
    <EventCard
      time="7:00 PM"
      title="Live Performance"
      description="Enjoy live music during cocktail hour"
      icon={Music}
    />
  )
}
