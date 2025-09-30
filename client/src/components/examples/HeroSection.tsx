import HeroSection from '../HeroSection'
import heroImage from '@assets/generated_images/Akyaka_coastline_sunset_hero_60f3d1df.png'

export default function HeroSectionExample() {
  return (
    <HeroSection
      backgroundImage={heroImage}
      title="Bryce & Leyla"
      subtitle="are getting married"
      date="October 1, 2026"
      location="Akyaka, Turkiye"
      ctaText="View Details"
      ctaAction={() => console.log('CTA clicked')}
    />
  )
}
