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
  { id: "m1", title: "Midnight Echoes", category: "movies", image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&q=80", date: "Today, 9:30 PM", venue: "PVR Cinemas", price: 350, rating: "8.4", genre: "Thriller" },
  { id: "m2", title: "Crimson Horizon", category: "movies", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80", date: "Tomorrow, 7:00 PM", venue: "INOX Megaplex", price: 280, rating: "7.9", genre: "Action" },
  { id: "m3", title: "The Last Letter", category: "movies", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80", date: "Sat, 6:15 PM", venue: "Cinepolis", price: 320, rating: "8.7", genre: "Drama" },
  { id: "m4", title: "Neon Dreams", category: "movies", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80", date: "Sun, 8:00 PM", venue: "PVR IMAX", price: 450, rating: "9.0", genre: "Sci-Fi" },
  { id: "s1", title: "India vs Australia T20", category: "sports", image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80", date: "Sat, 7:00 PM", venue: "Wankhede Stadium", price: 1200 },
  { id: "s2", title: "Mumbai Marathon 2025", category: "sports", image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=600&q=80", date: "Sun, 5:30 AM", venue: "Marine Drive", price: 800 },
  { id: "s3", title: "Pro Kabaddi League Final", category: "sports", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80", date: "Fri, 8:00 PM", venue: "DY Patil Stadium", price: 600 },
  { id: "su1", title: "Nooran Sisters Live", category: "sufi", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80", date: "Sat, 8:30 PM", venue: "NCPA Mumbai", price: 1500 },
  { id: "su2", title: "Kailash Kher - Sufi Night", category: "sufi", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80", date: "Sun, 7:30 PM", venue: "Jio Garden", price: 1800 },
  { id: "su3", title: "Rahat Fateh Ali Khan", category: "sufi", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80", date: "Next Fri, 9:00 PM", venue: "MMRDA Grounds", price: 2500 },
  { id: "c1", title: "Arijit Singh Live in Concert", category: "concerts", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80", date: "Sat, 8:00 PM", venue: "DY Patil Stadium", price: 2200 },
  { id: "c2", title: "Coldplay Music of the Spheres", category: "concerts", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80", date: "Next Sat, 7:30 PM", venue: "JLN Stadium", price: 5000 },
  { id: "c3", title: "AR Rahman Symphony", category: "concerts", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80", date: "Sun, 8:30 PM", venue: "NSCI Dome", price: 3000 },
  { id: "e1", title: "TEDx Mumbai 2025", category: "events", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80", date: "Sat, 10:00 AM", venue: "NCPA Tata Theatre", price: 999 },
  { id: "e2", title: "Comedy Night with Zakir", category: "events", image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&q=80", date: "Fri, 9:00 PM", venue: "The Habitat", price: 750 },
  { id: "e3", title: "Food & Wine Festival", category: "events", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", date: "Sun, 12:00 PM", venue: "BKC Grounds", price: 1200 },
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
};

export function getItem(id: string) {
  return items.find((i) => i.id === id);
}
