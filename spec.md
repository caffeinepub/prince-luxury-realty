# Prince Luxury Realty

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Multi-page luxury real estate website with 5 pages: Home, Luxury Properties, About Us, Property Gallery, Contact
- Property listings with title, price, location, beds/baths/sqft, description, featured flag
- Inquiry/contact form for buyers (name, email, phone, message, property of interest)
- WhatsApp floating contact button
- Instagram link in footer/contact
- Featured luxury homes section on homepage
- Property gallery with filterable image grid
- About Us page with team/company story

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend: Property listing data model (id, title, price, location, beds, baths, sqft, description, imageUrl, featured, type), inquiry submission storage
2. Backend APIs: getProperties, getFeaturedProperties, getProperty, submitInquiry
3. Frontend: React Router for 5 pages, black & gold design system, reusable PropertyCard component
4. Home: Hero with full-width image, featured properties carousel, brand tagline
5. Luxury Properties: Grid of all listings with filter by type/price
6. About Us: Company story, values, team
7. Property Gallery: Masonry/grid image gallery
8. Contact: Inquiry form, WhatsApp button, Instagram link, office details
