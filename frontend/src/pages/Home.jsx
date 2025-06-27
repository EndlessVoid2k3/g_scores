import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { SearchScore } from "../components/SearchScore";
import { Footer } from "../components/Footer";
import { Dashboard } from "../components/Dashboard";
import { Report } from "../components/Report";
import { Setting } from "../components/Settings";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <Dashboard />
        <SearchScore />
        <Report />
        <Setting />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
