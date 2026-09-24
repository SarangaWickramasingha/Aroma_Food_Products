import { Slides } from "../data/slides";
import ProductImg from "../components/ProductImg";
import Description from "../components/Description";

function Home({ nextpage, Storypage }) {
  // Only display Coffee slide on the site
  const coffeeSlides = Slides.filter((s) => s.id === "coffee");
  const active = coffeeSlides[0] || Slides[0];

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden pt-24 pb-12 sm:pt-28"
    >
      {/* Background */}
      <div
        style={{ backgroundImage: `url(${active.bg})` }}
        className="absolute inset-0 bg-cover bg-center"
      />

      {/* Luxury Readability Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-10 px-6 sm:px-10 lg:flex-row lg:justify-between lg:gap-8 lg:px-16">
        {/* Left: Text Info */}
        <div className="fade-slide-in w-full lg:max-w-2xl">
          <Description
            header={active.headline}
            des={active.subtext}
            btn={nextpage}
            btnText="Explore Coffee Collection"
            secondaryBtn={Storypage}
            secondaryBtnText="Our Craft Story"
            theam="white"
            label={active.tagline}
          />
        </div>

        {/* Right: Product Image */}
        <div className="fade-slide-in flex justify-center lg:justify-end">
          <ProductImg
            image={active.productImage}
            alt={active.headline}
            badge={active.badge}
          />
        </div>
      </div>

      {/* Bottom Trust Bar */}
      <div className="relative z-10 mx-auto mt-6 w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/15 pt-6 md:flex-row">
          <div className="flex items-center gap-3 text-xs font-semibold text-white/80">
            <span className="h-2 w-2 rounded-full bg-[#C44A3A]" />
            <span>Pure Ceylon Highland Roast</span>
            <span className="text-white/40">•</span>
            <span>Ratnapura, Sri Lanka</span>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-semibold text-white/80">
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400">🌿</span>
              <span>100% Pure Ceylon Arabica/Robusta</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400">🔥</span>
              <span>Artisan Drum Roasted</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400">✨</span>
              <span>Direct Estate Sourcing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;