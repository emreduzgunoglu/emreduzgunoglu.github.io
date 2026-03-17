import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />

      {/* Map Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-lg overflow-hidden shadow-2xl"
            style={{ height: "500px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.3663614964257!2d32.6184681!3d39.977917399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d331efb28fca1b%3A0x20c97c140038beac!2sAvukat%20%C4%B0layda%20MERAY%2F%20Eryaman!5e0!3m2!1str!2str!4v1773770412241!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Meray Hukuk ve Danışmanlık Konum"
            />
          </div>
        </div>
      </section>
    </>
  );
}
