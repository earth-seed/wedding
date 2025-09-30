import MediaGallery from '../MediaGallery'
import ceremonyImage from '@assets/generated_images/Wedding_ceremony_setup_Mediterranean_e0c02fcc.png'
import oliveImage from '@assets/generated_images/Olive_grove_landscape_Turkey_69daa26c.png'
import dinnerImage from '@assets/generated_images/Wedding_dinner_reception_setup_0cdafc3e.png'

export default function MediaGalleryExample() {
  const items = [
    {
      id: '1',
      type: 'image' as const,
      src: ceremonyImage,
      alt: 'Wedding ceremony',
      aspectRatio: '3:4' as const
    },
    {
      id: '2',
      type: 'image' as const,
      src: oliveImage,
      alt: 'Olive grove',
      aspectRatio: '1:1' as const
    },
    {
      id: '3',
      type: 'image' as const,
      src: dinnerImage,
      alt: 'Reception dinner',
      aspectRatio: '16:9' as const
    }
  ]
  
  return <MediaGallery items={items} />
}
