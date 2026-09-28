import { Fragment } from "react";
import { Slides } from "../data/slides";
import ProductImg from "../components/ProductImg";
import Description from "../components/Description";
import {
  homeTrustBar,
  homeTrustBadges,
  homeCta,
} from "../data/Homedetails";
import { activeProductId, selectById } from "../data/site";

function Home({ nextpage, Storypage }) {
  const active = selectById(Slides, activeProductId);

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
            btnText={homeCta.primaryText}
            secondaryBtn={Storypage}
            secondaryBtnText={homeCta.secondaryText}
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
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            {homeTrustBar.items.map(({ id, text }, index) => (
              <Fragment key={id}>
                {index > 0 && (
                  <span className="text-white/40">{homeTrustBar.separator}</span>
                )}
                <span>{text}</span>
              </Fragment>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-semibold text-white/80">
            {homeTrustBadges.map(({ id, icon: Icon, text }) => (
              <div key={id} className="flex items-center gap-1.5">
                <Icon size={14} className="text-amber-400" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;