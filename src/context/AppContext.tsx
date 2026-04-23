import { createContext, useContext, useState, type ReactNode } from "react";

type AppContextValue = {
  search: string;
  setSearch: (v: string) => void;
  city: string;
  setCity: (v: string) => void;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const CITIES = [
  "Mumbai", "Delhi", "Jaipur", "Bangalore", "Hyderabad", "Chennai",
  "Kolkata", "Pune", "Ahmedabad", "Udaipur", "Lucknow", "Chandigarh",
  "Bhopal", "Indore", "Kochi", "Goa", "Surat", "Nagpur", "Patna",
  "Ranchi", "Guwahati",
];

export const PLACES: Record<string, string[]> = {
  Mumbai: ["PVR Juhu", "INOX Nariman Point", "Cinepolis Andheri", "Wankhede Stadium", "NCPA"],
  Delhi: ["PVR Saket", "INOX Nehru Place", "DLF Promenade", "Jawaharlal Nehru Stadium"],
  Jaipur: ["Raj Mandir", "WTP Cinepolis", "Triton Mall", "SMS Stadium"],
  Bangalore: ["PVR Orion", "INOX Garuda", "Chinnaswamy Stadium", "Phoenix Marketcity"],
  Hyderabad: ["PVR Inorbit", "AMB Cinemas", "Prasads IMAX", "Uppal Stadium"],
  Chennai: ["Sathyam Cinemas", "PVR VR Mall", "Chepauk Stadium"],
  Kolkata: ["INOX Quest", "PVR Avani", "Eden Gardens"],
  Pune: ["PVR Phoenix", "INOX Bund Garden", "Gahunje Stadium"],
  Ahmedabad: ["PVR Acropolis", "Cinepolis Alpha One", "Motera Stadium"],
  Udaipur: ["INOX Celebration Mall", "Cinepolis Forum"],
  Lucknow: ["PVR Phoenix Palassio", "INOX Riverside", "Ekana Stadium"],
  Chandigarh: ["PVR Elante", "INOX Sector 9"],
  Bhopal: ["INOX DB City", "PVR Aashima"],
  Indore: ["INOX Treasure Island", "PVR Phoenix Citadel"],
  Kochi: ["PVR Lulu Mall", "Cinepolis Centre Square"],
  Goa: ["INOX Panjim", "Maquinez Palace"],
  Surat: ["INOX Rahul Raj", "PVR VR Mall"],
  Nagpur: ["INOX Eternity", "PVR Empress City"],
  Patna: ["PVR P&M Mall", "Cinepolis Mithapur"],
  Ranchi: ["INOX Nucleus Mall", "Cinepolis Spar Mall"],
  Guwahati: ["PVR Central Mall", "INOX Gauhati"],
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Mumbai");
  return (
    <AppContext.Provider value={{ search, setSearch, city, setCity }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
