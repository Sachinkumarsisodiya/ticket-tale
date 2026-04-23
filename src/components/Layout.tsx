import { Header } from "./Header";
import { Footer } from "./Footer";
import { AppProvider } from "@/context/AppContext";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </AppProvider>
  );
}
