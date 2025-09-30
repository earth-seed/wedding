# Design Guidelines: Bryce & Leyla's Mediterranean Wedding Website

## Design Approach
**Reference-Based Approach** drawing inspiration from premium travel and hospitality platforms (Airbnb, Booking.com) combined with authentic Mediterranean visual language. The design should evoke the warm, coastal beauty of Akyaka, Turkiye while maintaining elegance and romance.

## Color Palette

### Light Mode
- **Primary**: 25 45% 45% (Warm Clay) - Natural terracotta, muted and earthy
- **Secondary**: 190 30% 50% (Soft Sage) - Muted coastal greens
- **Accent**: 35 30% 55% (Olive Gold) - Gentle olive and earth tones
- **Neutral Base**: 35 20% 95% (Natural Linen) - Soft, warm white
- **Text Primary**: 25 30% 25% (Earth Brown)
- **Text Secondary**: 25 15% 50% (Soft Brown)

### Dark Mode
- **Background**: 25 20% 12% (Deep Clay)
- **Surface**: 25 18% 18% (Warm Charcoal)
- **Text Primary**: 30 10% 95% (Soft White)
- Maintain same accent colors with adjusted opacity for dark backgrounds

## Typography
- **Headings**: 'Lora' (serif) - Soft, elegant, organic
  - H1: 3.5rem/4rem (mobile: 2.5rem/3rem), font-weight: 500
  - H2: 2.5rem/3rem (mobile: 2rem/2.5rem), font-weight: 500
  - H3: 1.75rem/2.25rem (mobile: 1.5rem/2rem), font-weight: 500
- **Body**: 'Source Serif 4' (serif) - Warm, readable, natural
  - Base: 1.125rem/1.875rem, font-weight: 400
  - Small: 0.9375rem/1.5rem
- **Special Elements**: 'Lora' for couple names and dates - elegant and flowing

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, m-6, gap-8, py-12, px-16, etc.)
- **Container**: max-w-7xl with px-6 md:px-8 lg:px-12
- **Section Padding**: py-16 md:py-20 lg:py-24
- **Component Spacing**: gap-8 md:gap-12 for grids, space-y-6 for vertical stacks
- **Breakpoints**: Standard Tailwind (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

## Component Library

### Navigation
- Minimal navigation with subtle presence
- Simple text links without heavy backgrounds
- Elegant separator lines using natural tones
- Smooth scroll behavior between sections

### Home Page Structure
1. **Hero Section** (min-h-screen): 
   - Large background image (Mediterranean coastal sunset or Akyaka landscape)
   - Centered overlay with couple names in Cormorant Garamond
   - Date and location below in elegant typography
   - Subtle fade-in animation on load
   - CTA button with variant="outline" and blurred background

2. **Media Gallery Section** (py-20):
   - Masonry grid layout (2 cols mobile, 3-4 cols desktop)
   - Mixed image and video spots
   - Aspect ratios: 1:1, 16:9, 3:4 for visual interest
   - Hover overlay with subtle zoom effect
   - Lightbox/modal for expanded view

3. **Welcome Message** (py-16):
   - max-w-3xl centered text block
   - Personal welcome from couple
   - Mediterranean decorative elements (olive branches, geometric patterns)

### Travel/Location Page
- Split layout: Left side info cards, right side embedded map
- Cards for: Flight Information (editable), Recommended Hotels (list format), Getting Around
- Akyaka destination highlights with imagery

### Venue Page
- Hero image of NUUP Hotel
- Venue details grid (3 columns desktop, 1 mobile)
- Amenities, capacity, contact information
- Image gallery carousel

### Schedule Page
- Vertical timeline with minimal ornamentation
- Day headers with elegant typography
- Simple event listings with flowing text
- Minimal use of icons - let typography lead
- Clean separation with subtle lines or spacing

### Registry/Donations Page
- Priority callout box for charity donation (Palestinian support)
- Bordered card with warm terracotta accent
- Secondary section for honeymoon fund
- Clear, compassionate messaging
- Links styled as primary buttons

## Images

### Required Images
1. **Hero Image**: Large landscape of Akyaka coastline or Mediterranean sunset (min 1920x1080)
2. **Couple Photos**: 6-8 images for home page gallery (candid, scenic, portraits)
3. **Venue Image**: NUUP Hotel exterior/grounds for venue page hero
4. **Background Textures**: Subtle Mediterranean patterns (optional overlays)

### Image Treatment
- Slight warm color grading (+5% saturation in terracotta range)
- Rounded corners (rounded-lg to rounded-xl)
- Shadow elevation (shadow-lg) for cards with images
- Lazy loading for performance

## Animations
**Use Sparingly**:
- Fade-in on scroll for sections (opacity + translateY)
- Smooth page transitions (200-300ms)
- Hover states: subtle scale (scale-105) and shadow enhancement
- NO distracting continuous animations

## Accessibility
- WCAG AA contrast ratios maintained
- Focus states visible on all interactive elements (ring-2 ring-offset-2)
- Alt text for all images
- Semantic HTML structure
- Dark mode toggle accessible via keyboard

## Mediterranean Design Elements
- Decorative dividers with olive branch or wave motifs
- Terracotta and turquoise color blocking
- Whitespace reminiscent of Greek architecture
- Organic, flowing shapes vs. harsh geometric
- Natural texture overlays (subtle linen, stone)