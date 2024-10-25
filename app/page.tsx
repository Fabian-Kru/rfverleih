import Navbar from "@/components/navbar";
import AnimatedHero from "@/components/hero1";
import CTASection from "@/components/cta";
import Footer from "@/components/Footer";
import Component from "@/components/cr";
import Callbackcta from "@/components/callbackcta";

export default function Home() {
  return (
    <div>
      <main className="w-full flex flex-col items-center bg-neutral-950">
        <div className="w-full flex flex-col items-center bg-neutral-950">
          <Navbar />
        </div>
        <div className="p-4 sm:p-8 md:p-16 lg:p-24 w-full flex flex-col items-center">
          <AnimatedHero />
          <Component />
          <CTASection />
          <Callbackcta />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
}
