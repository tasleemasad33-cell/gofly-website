/* ──────────────────────────────────────────────
   Client Images – single source of truth
   Replace paths here to update images site-wide.
   ────────────────────────────────────────────── */

const C = "/images/client";

/* ── Hero slides (1 video + 3 pictures) ── */
export const clientHeroSlides: {
  img?: string;
  video?: string;
  title: string;
  text: string;
}[] = [
  {
    video: `${C}/hero/hero-video.mp4`,
    title: "Discover the World with Travel Nest",
    text: "From breathtaking landscapes to iconic landmarks — explore handcrafted journeys designed just for you.",
  },
  {
    img: `${C}/HallStatt.jpg.jpeg`,
    title: "All-in-one Travel Booking.",
    text: "Highlights convenience and simplicity, Best for agencies with online & mobile-friendly services.",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.09 PM (1).jpeg`,
    title: "Explore 500+ Destinations with Expert Guided Tours",
    text: "From the Swiss Alps to tropical shores, discover handcrafted journeys curated by Travel Nest.",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.10 PM.jpeg`,
    title: "Create Memories That Last a Lifetime",
    text: "Personalised itineraries, trusted local partners, and seamless planning from start to finish.",
  },
];

/* ── About page ── */
export const clientAboutHero = `${C}/HallStatt.jpg.jpeg`;
export const clientStoryImage = `${C}/WhatsApp Image 2026-08-04 at 9.49.15 PM (1).jpeg`;
export const clientStrasbourgCanal = `${C}/WhatsApp Image 2026-08-04 at 9.49.03 PM (1).jpeg`;
export const clientCollageImages = [
  `${C}/WhatsApp Image 2026-08-04 at 9.49.13 PM.jpeg`, // Swiss clock tower (vertical)
  `${C}/WhatsApp Image 2026-08-04 at 9.49.03 PM (1).jpeg`, // Strasbourg canal
  `${C}/WhatsApp Image 2026-08-04 at 9.49.14 PM.jpeg`, // Venice Rialto (vertical)
  `${C}/WhatsApp Image 2026-08-04 at 9.49.05 PM (2).jpeg`, // Cinque Terre
];

/* ── Behind The Journey tabs (4 images) ── */
export const clientJourneyImages = [
  `${C}/WhatsApp Image 2026-08-04 at 9.49.05 PM (1).jpeg`, // Venice Grand Canal
  `${C}/WhatsApp Image 2026-08-04 at 9.49.04 PM.jpeg`, // Neuschwanstein Castle
  `${C}/WhatsApp Image 2026-08-04 at 9.49.09 PM.jpeg`, // Lake Bled
  `${C}/WhatsApp Image 2026-08-04 at 9.49.06 PM (1).jpeg`, // Cinque Terre Manarola
];

/* ── Gallery section (all website images) ── */
export const clientGalleryImages = [
  /* ── Client photos ── */
  `${C}/HallStatt.jpg.jpeg`,
  `${C}/linus-mimietz-a9bLObiMPJ4-unsplash.jpg.jpeg`,
  `${C}/paula-jinga-1WbY_I8Gwcw-unsplash.jpg.jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.03 PM (1).jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.03 PM.jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.04 PM (1).jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.04 PM.jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.05 PM (1).jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.05 PM (2).jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.05 PM.jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.06 PM (1).jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.06 PM.jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.07 PM (1).jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.07 PM.jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.09 PM (1).jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.09 PM (2).jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.09 PM.jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.10 PM (1).jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.10 PM (2).jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.10 PM.jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.11 PM (1).jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.11 PM.jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.12 PM.jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.13 PM (1).jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.13 PM.jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.14 PM.jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.15 PM (1).jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.15 PM (2).jpeg`,
  `${C}/WhatsApp Image 2026-08-04 at 9.49.15 PM.jpeg`,
  /* ── Tour destination photos ── */
  `${C}/tours/Australia.webp`,
  `${C}/tours/Bahrain-Customized-Tour.png`,
  `${C}/tours/Baku--Azerbaijan.png`,
  `${C}/tours/Bali--Indoneshia.png`,
  `${C}/tours/Cambodia-Customized-Tour.jpg`,
  `${C}/tours/China-Customized-Tour.png`,
  `${C}/tours/Dubai.png`,
  `${C}/tours/Egypt-Customized-Tour.jpg`,
  `${C}/tours/England.avif`,
  `${C}/tours/Europe.png`,
  `${C}/tours/Italy.avif`,
  `${C}/tours/Japan-Customized-Tour.png`,
  `${C}/tours/Malaysia--Kuala-Lumpur-.png`,
  `${C}/tours/Maldives.png`,
  `${C}/tours/Norway.jpg`,
  `${C}/tours/Pakistan-Customized-Tour.jfif`,
  `${C}/tours/Philippines-Customized-Tour.png`,
  `${C}/tours/Qatar-Customized-Tour.png`,
  `${C}/tours/Saudi-Arabia-Customized-Tour.png`,
  `${C}/tours/Singapore-Customized-Tour.png`,
  `${C}/tours/Skardu--Pakistan--2-.png`,
  `${C}/tours/Spain.png`,
  `${C}/tours/Sri-Lanka.png`,
  `${C}/tours/Swedan.png`,
  `${C}/tours/Thailand.png`,
  `${C}/tours/Turkey.png`,
  `${C}/tours/Uzbekistan-Customized-Tour.webp`,
  `${C}/tours/Vietnam-Customized-Tour.png`,
];

/* ── Gallery detail items (with titles & locations) ── */
export const clientGalleryItems = [
  /* ── Client photos ── */
  { img: `${C}/HallStatt.jpg.jpeg`, title: "Hallstatt Village", location: "Hallstatt, Austria" },
  {
    img: `${C}/linus-mimietz-a9bLObiMPJ4-unsplash.jpg.jpeg`,
    title: "Alpine Adventure",
    location: "Swiss Alps",
  },
  {
    img: `${C}/paula-jinga-1WbY_I8Gwcw-unsplash.jpg.jpeg`,
    title: "Travel Memories",
    location: "Europe",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.03 PM (1).jpeg`,
    title: "Strasbourg Canal",
    location: "Strasbourg, France",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.03 PM.jpeg`,
    title: "Strasbourg Streets",
    location: "Strasbourg, France",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.04 PM (1).jpeg`,
    title: "Mountain Lake",
    location: "Swiss Alps",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.04 PM.jpeg`,
    title: "Castle View",
    location: "Bavaria, Germany",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.05 PM (1).jpeg`,
    title: "Grand Canal",
    location: "Venice, Italy",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.05 PM (2).jpeg`,
    title: "Cinque Terre",
    location: "Cinque Terre, Italy",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.05 PM.jpeg`,
    title: "Coastal Paradise",
    location: "Mediterranean",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.06 PM (1).jpeg`,
    title: "Manarola Village",
    location: "Cinque Terre, Italy",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.06 PM.jpeg`,
    title: "Scenic View",
    location: "Europe",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.07 PM (1).jpeg`,
    title: "Cinque Terre Coast",
    location: "Cinque Terre, Italy",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.07 PM.jpeg`,
    title: "Mediterranean Charm",
    location: "Italy",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.09 PM (1).jpeg`,
    title: "Swiss Alps Train",
    location: "Swiss Alps",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.09 PM (2).jpeg`,
    title: "Alpine Landscape",
    location: "Switzerland",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.09 PM.jpeg`,
    title: "Lake Bled",
    location: "Lake Bled, Slovenia",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.10 PM (1).jpeg`,
    title: "Island Paradise",
    location: "Maldives",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.10 PM (2).jpeg`,
    title: "Longtail Boats",
    location: "Krabi, Thailand",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.10 PM.jpeg`,
    title: "Tropical Beach",
    location: "Southeast Asia",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.11 PM (1).jpeg`,
    title: "Cappadocia Balloons",
    location: "Cappadocia, Turkey",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.11 PM.jpeg`,
    title: "James Bond Island",
    location: "Phang Nga, Thailand",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.12 PM.jpeg`,
    title: "Istanbul Skyline",
    location: "Istanbul, Turkey",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.13 PM (1).jpeg`,
    title: "City View",
    location: "Europe",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.13 PM.jpeg`,
    title: "Historic District",
    location: "Europe",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.14 PM.jpeg`,
    title: "Venice Rialto",
    location: "Venice, Italy",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.15 PM (1).jpeg`,
    title: "Swiss Clock Tower",
    location: "Switzerland",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.15 PM (2).jpeg`,
    title: "European Architecture",
    location: "Europe",
  },
  {
    img: `${C}/WhatsApp Image 2026-08-04 at 9.49.15 PM.jpeg`,
    title: "Old Town",
    location: "Europe",
  },
  /* ── Tour destination photos ── */
  { img: `${C}/tours/Australia.webp`, title: "Sydney Opera House", location: "Sydney, Australia" },
  { img: `${C}/tours/Bahrain-Customized-Tour.png`, title: "Bahrain Skyline", location: "Bahrain" },
  { img: `${C}/tours/Baku--Azerbaijan.png`, title: "Baku City View", location: "Baku, Azerbaijan" },
  {
    img: `${C}/tours/Bali--Indoneshia.png`,
    title: "Bali Rice Terraces",
    location: "Bali, Indonesia",
  },
  {
    img: `${C}/tours/Cambodia-Customized-Tour.jpg`,
    title: "Angkor Wat Temple",
    location: "Siem Reap, Cambodia",
  },
  {
    img: `${C}/tours/China-Customized-Tour.png`,
    title: "Great Wall of China",
    location: "Beijing, China",
  },
  { img: `${C}/tours/Dubai.png`, title: "Dubai Skyline", location: "Dubai, UAE" },
  {
    img: `${C}/tours/Egypt-Customized-Tour.jpg`,
    title: "Pyramids of Giza",
    location: "Cairo, Egypt",
  },
  { img: `${C}/tours/England.avif`, title: "London Bridge", location: "London, England" },
  { img: `${C}/tours/Europe.png`, title: "European Countryside", location: "Europe" },
  { img: `${C}/tours/Italy.avif`, title: "Rome Colosseum", location: "Rome, Italy" },
  { img: `${C}/tours/Japan-Customized-Tour.png`, title: "Mount Fuji", location: "Tokyo, Japan" },
  {
    img: `${C}/tours/Malaysia--Kuala-Lumpur-.png`,
    title: "Kuala Lumpur Towers",
    location: "Kuala Lumpur, Malaysia",
  },
  { img: `${C}/tours/Maldives.png`, title: "Maldives Beach", location: "Maldives" },
  { img: `${C}/tours/Norway.jpg`, title: "Norway Fjords", location: "Norway" },
  {
    img: `${C}/tours/Pakistan-Customized-Tour.jfif`,
    title: "Pakistan Mountains",
    location: "Pakistan",
  },
  {
    img: `${C}/tours/Philippines-Customized-Tour.png`,
    title: "Philippines Beach",
    location: "Philippines",
  },
  { img: `${C}/tours/Qatar-Customized-Tour.png`, title: "Doha Skyline", location: "Doha, Qatar" },
  { img: `${C}/tours/Saudi-Arabia-Customized-Tour.png`, title: "Mecca", location: "Saudi Arabia" },
  {
    img: `${C}/tours/Singapore-Customized-Tour.png`,
    title: "Marina Bay Sands",
    location: "Singapore",
  },
  {
    img: `${C}/tours/Skardu--Pakistan--2-.png`,
    title: "Skardu Valley",
    location: "Skardu, Pakistan",
  },
  { img: `${C}/tours/Spain.png`, title: "Barcelona Sagrada", location: "Barcelona, Spain" },
  { img: `${C}/tours/Sri-Lanka.png`, title: "Sri Lanka Temple", location: "Sri Lanka" },
  { img: `${C}/tours/Swedan.png`, title: "Stockholm City", location: "Stockholm, Sweden" },
  { img: `${C}/tours/Thailand.png`, title: "Bangkok Temple", location: "Bangkok, Thailand" },
  { img: `${C}/tours/Turkey.png`, title: "Istanbul Hagia Sophia", location: "Istanbul, Turkey" },
  {
    img: `${C}/tours/Uzbekistan-Customized-Tour.webp`,
    title: "Samarkand Registan",
    location: "Samarkand, Uzbekistan",
  },
  {
    img: `${C}/tours/Vietnam-Customized-Tour.png`,
    title: "Ha Long Bay",
    location: "Ha Long Bay, Vietnam",
  },
];

/* ── Banner / offer ── */
export const clientBannerImage = `${C}/WhatsApp Image 2026-08-04 at 9.49.04 PM (1).jpeg`;

/* ── Destination page hero ── */
export const clientDestinationHero = `${C}/WhatsApp Image 2026-08-04 at 9.49.10 PM.jpeg`;
