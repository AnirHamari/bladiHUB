import Hero from "../components/Hero";
import ResourcesDirectory from "../components/ResourcesDirectory";
import OrientationHub from "../components/OrientationHub";
import HelpBoard from "../components/HelpBoard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        {/* Vercel Deployment Sync Test - {new Date().toLocaleTimeString()} */}
        <ResourcesDirectory />
        <OrientationHub />
        <HelpBoard />
      </main>
      <Footer />
    </div>
  );
}
