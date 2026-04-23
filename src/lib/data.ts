export type Item = {
  id: string;
  title: string;
  category: "movies" | "sports" | "sufi" | "concerts" | "events";
  image: string;
  date: string;
  venue: string;
  price: number;
  rating?: string;
  genre?: string;
};

export const items: Item[] = [
  // Movies
  { id: "m1", title: "Midnight Echoes", category: "movies", image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&q=80", date: "Today, 9:30 PM", venue: "PVR Cinemas", price: 350, rating: "8.4", genre: "Thriller" },
  { id: "m2", title: "Crimson Horizon", category: "movies", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80", date: "Tomorrow, 7:00 PM", venue: "INOX Megaplex", price: 280, rating: "7.9", genre: "Action" },
  { id: "m3", title: "The Last Letter", category: "movies", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80", date: "Sat, 6:15 PM", venue: "Cinepolis", price: 320, rating: "8.7", genre: "Drama" },
  { id: "m4", title: "Neon Dreams", category: "movies", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80", date: "Sun, 8:00 PM", venue: "PVR IMAX", price: 450, rating: "9.0", genre: "Sci-Fi" },
  { id: "m5", title: "Shadow Hunter", category: "movies", image: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=600&q=80", date: "Today, 11:00 PM", venue: "Carnival Cinemas", price: 250, rating: "7.5", genre: "Action" },
  { id: "m6", title: "Tales of Mumbai", category: "movies", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80", date: "Tomorrow, 3:00 PM", venue: "Regal Cinema", price: 200, rating: "8.1", genre: "Comedy" },
  { id: "m7", title: "Eternal Bond", category: "movies", image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=600&q=80", date: "Sat, 9:00 PM", venue: "PVR Director's Cut", price: 500, rating: "8.9", genre: "Romance" },
  { id: "m8", title: "Quantum Leap", category: "movies", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80", date: "Sun, 6:00 PM", venue: "INOX Insignia", price: 600, rating: "9.2", genre: "Sci-Fi" },
  { id: "m9", title: "Whispers in Wind", category: "movies", image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600&q=80", date: "Mon, 7:30 PM", venue: "Cinepolis VIP", price: 380, rating: "7.8", genre: "Drama" },
  { id: "m10", title: "Iron Legacy", category: "movies", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=600&q=80", date: "Tue, 8:30 PM", venue: "PVR ECX", price: 420, rating: "8.3", genre: "Action" },

  // Sports
  { id: "s1", title: "India vs Australia T20", category: "sports", image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80", date: "Sat, 7:00 PM", venue: "Wankhede Stadium", price: 1200 },
  { id: "s2", title: "Mumbai Marathon 2025", category: "sports", image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=600&q=80", date: "Sun, 5:30 AM", venue: "Marine Drive", price: 800 },
  { id: "s3", title: "Pro Kabaddi League Final", category: "sports", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80", date: "Fri, 8:00 PM", venue: "DY Patil Stadium", price: 600 },
  { id: "s4", title: "ISL Mumbai City FC", category: "sports", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80", date: "Sat, 7:30 PM", venue: "Mumbai Football Arena", price: 500 },
  { id: "s5", title: "Tennis Open Championship", category: "sports", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80", date: "Sun, 4:00 PM", venue: "CCI Tennis Court", price: 1500 },
  { id: "s6", title: "Boxing Championship", category: "sports", image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80", date: "Sat, 9:00 PM", venue: "NSCI Indoor", price: 900 },
  { id: "s7", title: "Hockey India League", category: "sports", image: "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?w=600&q=80", date: "Fri, 6:30 PM", venue: "Mahindra Hockey Stadium", price: 400 },
  { id: "s8", title: "Premier Badminton League", category: "sports", image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&q=80", date: "Thu, 7:00 PM", venue: "KD Jadhav Hall", price: 350 },

  // Sufi
  { id: "su1", title: "Nooran Sisters Live", category: "sufi", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80", date: "Sat, 8:30 PM", venue: "NCPA Mumbai", price: 1500 },
  { id: "su2", title: "Kailash Kher - Sufi Night", category: "sufi", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80", date: "Sun, 7:30 PM", venue: "Jio Garden", price: 1800 },
  { id: "su3", title: "Rahat Fateh Ali Khan", category: "sufi", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80", date: "Next Fri, 9:00 PM", venue: "MMRDA Grounds", price: 2500 },
  { id: "su4", title: "Abida Parveen Live", category: "sufi", image: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=600&q=80", date: "Sat, 8:00 PM", venue: "Royal Opera House", price: 2200 },
  { id: "su5", title: "Wadali Brothers Concert", category: "sufi", image: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=600&q=80", date: "Sun, 7:00 PM", venue: "Tata Theatre", price: 1700 },
  { id: "su6", title: "Hans Raj Hans Sufiyana", category: "sufi", image: "https://images.unsplash.com/photo-1516981442399-a91139e20ff8?w=600&q=80", date: "Fri, 8:30 PM", venue: "Shanmukhananda Hall", price: 1400 },
  { id: "su7", title: "Sufi Mehfil Night", category: "sufi", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80", date: "Thu, 9:00 PM", venue: "St. Andrews Auditorium", price: 1100 },
  { id: "su8", title: "Qawwali Evening", category: "sufi", image: "https://images.unsplash.com/photo-1466428996289-fb355538da1b?w=600&q=80", date: "Sat, 9:30 PM", venue: "Bandra Fort Amphitheatre", price: 950 },

  // Concerts
  { id: "c1", title: "Arijit Singh Live in Concert", category: "concerts", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80", date: "Sat, 8:00 PM", venue: "DY Patil Stadium", price: 2200 },
  { id: "c2", title: "Coldplay Music of the Spheres", category: "concerts", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80", date: "Next Sat, 7:30 PM", venue: "JLN Stadium", price: 5000 },
  { id: "c3", title: "AR Rahman Symphony", category: "concerts", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80", date: "Sun, 8:30 PM", venue: "NSCI Dome", price: 3000 },
  { id: "c4", title: "Diljit Dosanjh Tour", category: "concerts", image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=80", date: "Fri, 8:00 PM", venue: "MMRDA Grounds", price: 3500 },
  { id: "c5", title: "Shreya Ghoshal Live", category: "concerts", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&q=80", date: "Sat, 7:00 PM", venue: "Jio World Garden", price: 2800 },
  { id: "c6", title: "Ed Sheeran World Tour", category: "concerts", image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=600&q=80", date: "Next Sun, 8:00 PM", venue: "Mahalaxmi Race Course", price: 6500 },
  { id: "c7", title: "Sunburn Festival", category: "concerts", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80", date: "Weekend", venue: "Vagator Beach", price: 4500 },
  { id: "c8", title: "Indie Rock Night", category: "concerts", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80", date: "Fri, 9:30 PM", venue: "Antisocial", price: 800 },

  // Events
  { id: "e1", title: "TEDx Mumbai 2025", category: "events", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80", date: "Sat, 10:00 AM", venue: "NCPA Tata Theatre", price: 999 },
  { id: "e2", title: "Comedy Night with Zakir", category: "events", image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&q=80", date: "Fri, 9:00 PM", venue: "The Habitat", price: 750 },
  { id: "e3", title: "Food & Wine Festival", category: "events", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", date: "Sun, 12:00 PM", venue: "BKC Grounds", price: 1200 },
  { id: "e4", title: "Art Expo Mumbai", category: "events", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&q=80", date: "Sat-Sun", venue: "Jehangir Art Gallery", price: 300 },
  { id: "e5", title: "Stand-up Comedy Marathon", category: "events", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&q=80", date: "Sat, 8:00 PM", venue: "Canvas Laugh Club", price: 600 },
  { id: "e6", title: "Mumbai Lit Fest", category: "events", image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=600&q=80", date: "Weekend", venue: "Title Waves BKC", price: 500 },
  { id: "e7", title: "Magic Show Spectacular", category: "events", image: "https://images.unsplash.com/photo-1542652694-40abf526446e?w=600&q=80", date: "Sun, 5:00 PM", venue: "Prithvi Theatre", price: 850 },
  { id: "e8", title: "Tech Conclave 2025", category: "events", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", date: "Mon-Tue", venue: "Bombay Exhibition Centre", price: 1500 },
];

export const categories = [
  { id: "movies", label: "Movies", icon: "🎬", color: "from-rose-500 to-red-600" },
  { id: "sports", label: "Sports", icon: "🏏", color: "from-emerald-500 to-teal-600" },
  { id: "sufi", label: "Sufi Nights", icon: "🎤", color: "from-amber-500 to-orange-600" },
  { id: "concerts", label: "Concerts", icon: "🎸", color: "from-fuchsia-500 to-purple-600" },
  { id: "events", label: "Events", icon: "🎟️", color: "from-sky-500 to-blue-600" },
] as const;

export const COUPONS: Record<string, { discount: number; type: "flat" | "percent"; message: string }> = {
  WELCOME10: { discount: 10, type: "percent", message: "10% off applied!" },
  BMS200: { discount: 200, type: "flat", message: "₹200 flat discount applied!" },
  SUFI25: { discount: 25, type: "percent", message: "25% off on Sufi Nights!" },
  FIRSTSHOW: { discount: 150, type: "flat", message: "₹150 off your first show!" },
  SAVE50: { discount: 50, type: "percent", message: "Mega 50% off applied!" },
  FLAT100: { discount: 100, type: "flat", message: "₹100 instant discount!" },
};

export const heroBanners = [
  {
    id: "hb1",
    title: "Coldplay Music of the Spheres",
    subtitle: "World Tour 2025 — Mumbai Edition",
    cta: "Book Tickets",
    href: "/book/c2",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=1600&q=80",
    badge: "Tour",
  },
  {
    id: "hb2",
    title: "India vs Australia — T20 Showdown",
    subtitle: "Witness the rivalry live at Wankhede",
    cta: "Get Seats",
    href: "/book/s1",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600&q=80",
    badge: "Sports",
  },
  {
    id: "hb3",
    title: "Sufi Nights with Rahat Fateh Ali Khan",
    subtitle: "An evening of soulful melodies",
    cta: "Reserve Now",
    href: "/book/su3",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&q=80",
    badge: "Sufi",
  },
  {
    id: "hb4",
    title: "Quantum Leap — IMAX Premiere",
    subtitle: "The blockbuster of the year, opening weekend",
    cta: "Book Movie",
    href: "/book/m8",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=80",
    badge: "Premiere",
  },
];

export const offers = [
  { code: "SAVE50", title: "Mega Weekend Sale", desc: "Get 50% off on movie tickets this weekend", color: "from-rose-500 to-pink-600" },
  { code: "FLAT100", title: "First Booking Bonus", desc: "₹100 off on your first booking with us", color: "from-amber-500 to-orange-600" },
  { code: "SUFI25", title: "Sufi Night Special", desc: "25% off on all sufi night events", color: "from-violet-500 to-purple-600" },
  { code: "BMS200", title: "Concert Cashback", desc: "Flat ₹200 off on premium concerts", color: "from-emerald-500 to-teal-600" },
];

export function getItem(id: string) {
  return items.find((i) => i.id === id);
}
