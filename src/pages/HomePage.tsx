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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.175837168329!2d32.85384731539754!3d39.91987879420679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xaa6c8c0a0dd8d92!2sK%C4%B1z%C4%B1lay%2C%20Atat%C3%BCrk%20Blv.%2C%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
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
