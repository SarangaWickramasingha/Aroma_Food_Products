import { useState } from 'react';

const Footer = ({
  scrollToHome,
  scrollToProduct,
  scrollToStory,
  scrollToBlog,
  scrollToContact
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-[#120A05] text-white pt-20 pb-10 overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 -z-0 h-96 w-96 rounded-full bg-[#C44A3A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 -z-0 h-96 w-96 rounded-full bg-[#E28834]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Top Callout Banner */}
        <div className="mb-16 flex flex-col items-center justify-between gap-8 rounded-3xl bg-gradient-to-r from-[#2C1A0E] via-[#3A2214] to-[#2C1A0E] p-8 border border-white/10 shadow-2xl sm:p-12 lg:flex-row">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E8D5B0]">
              Pure Ceylon Roastery
            </span>
            <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
              Experience the Aroma of Highland Ceylon Coffee
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Direct estate-to-cup coffee crafted with artisan passion in Ratnapura, Sri Lanka.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="cursor-pointer rounded-full bg-[#C44A3A] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#A7382B] hover:scale-105"
            >
              Get in Touch
            </button>
            <button
              onClick={scrollToStory}
              className="cursor-pointer rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              Explore Our Story
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 pb-16 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#C44A3A] to-[#E28834] text-white shadow-md font-serif font-bold text-xl">
                A
              </div>
              <span className="font-serif text-2xl font-extrabold tracking-[0.25em] text-white">
                AROMA
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/65 max-w-sm">
              Aroma Food Products is dedicated to crafting premium Ceylon single-origin coffee, blending time-honored highland agriculture with master batch roasting.
            </p>

            {/* Quality Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-semibold text-[#E8D5B0]">
                🌱 100% Pure Ceylon
              </span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-semibold text-[#E8D5B0]">
                ✨ Direct Fair Trade
              </span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-semibold text-[#E8D5B0]">
                🏆 Artisan Drum Roasted
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8D5B0] mb-4">
              Explore
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              <li>
                <button
                  onClick={scrollToHome}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToProduct}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Coffee Collection
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToStory}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Our Craft Journey
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToBlog}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Journal & Recipes
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToContact}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Contact Roastery
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Coffee Specialties */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8D5B0] mb-4">
              Coffee Roasts
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              <li>
                <button
                  onClick={scrollToProduct}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Highland Medium-Dark Roast
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToProduct}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Single-Origin Whole Bean
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToProduct}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Fine Ground Filter Roast
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToProduct}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Estate Reserve Selection
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8D5B0] mb-4">
              Stay Connected
            </p>
            <p className="text-xs text-white/60 mb-3">
              Subscribe for roast releases, brewing guides, and seasonal estate updates.
            </p>
            <form onSubmit={handleNewsletter} className="flex flex-col gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/40 outline-none transition focus:border-[#C44A3A]"
              />
              <button
                type="submit"
                className="cursor-pointer rounded-xl bg-[#C44A3A] py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#A7382B]"
              >
                Subscribe
              </button>
              {subscribed && (
                <p className="text-xs font-semibold text-emerald-400 mt-1">
                  ✓ Welcome to the Aroma family!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Aroma Food Products. All rights reserved. Kambadola, Dela, Rathnapura, Sri Lanka.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToHome}
              className="hover:text-[#E8D5B0] transition cursor-pointer flex items-center gap-1.5 font-semibold"
            >
              <span>↑ Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
