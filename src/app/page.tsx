import AboutMe from "@/components/portfolio/AboutMe";
import ContactSection from "@/components/portfolio/ContactSection";
import ExperienceRiver from "@/components/portfolio/ExperienceRiver";
import ExperimentsGrid from "@/components/portfolio/ExperimentsGrid";
import Footer from "@/components/portfolio/Footer";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";

export default function Home() {
  return (
    <main className="bg-background text-foreground relative min-h-screen overflow-x-hidden">
      {/* SECTION: Header */}
      <Header />

      {/* SECTION: Hero */}
      <Hero />

      {/* SECTION: About Me */}
      <AboutMe />

      {/* SECTION: Experience River */}
      <ExperienceRiver />

      {/* SECTION: Experiments / Projects */}
      <ExperimentsGrid />

      {/* TODO: NEW SECTION - Blog Preview | PLAN: Fetch latest 3 posts | DESIGN: Simple cards */}

      {/* SECTION: Contact */}
      <ContactSection />

      {/* SECTION: Footer */}
      <Footer />
    </main>
  );
}
