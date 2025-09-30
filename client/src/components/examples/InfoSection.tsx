import InfoSection from '../InfoSection'

export default function InfoSectionExample() {
  return (
    <InfoSection
      title="Our Story"
      description="How we fell in love in beautiful Akyaka"
    >
      <div className="max-w-2xl mx-auto text-center text-muted-foreground">
        <p>Content goes here</p>
      </div>
    </InfoSection>
  )
}
