import { ArrowUp } from 'lucide-react';
import Logo from './Logo';
import {
  site,
  navItems,
  footerRoasts,
  footerCopy,
  qualityBadges,
} from '../data/site';

const Footer = ({
  scrollToHome,
  scrollToProduct,
  scrollToStory,
  scrollToBlog,
  scrollToContact
}) => {
  const scrollHandlers = {
    home: scrollToHome,
    product: scrollToProduct,
    story: scrollToStory,
    blog: scrollToBlog,
    contact: scrollToContact,
  };

  return (
    <footer className="relative bg-espresso-950 text-white pt-20 pb-10 overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 -z-0 h-96 w-96 rounded-full bg-brand-red/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 -z-0 h-96 w-96 rounded-full bg-brand-amber/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Top Callout Banner */}
        <div className="mb-16 flex flex-col items-center justify-between gap-8 rounded-3xl bg-gradient-to-r from-espresso-800 via-[#3A2214] to-espresso-800 p-8 border border-white/10 shadow-2xl sm:p-12 lg:flex-row">
          <div className="max-w-xl text-center lg:text-left">
            <span className="section-kicker text-gold-soft">
              {footerCopy.calloutKicker}
            </span>
            <h3 className="heading-serif mt-2 text-2xl text-white sm:text-3xl">
              {footerCopy.calloutHeading}
            </h3>
            <p className="mt-2 text-sm text-white/70">
              {footerCopy.calloutBody}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="btn btn-primary px-8"
            >
              {footerCopy.calloutPrimary}
            </button>
            <button
              onClick={scrollToStory}
              className="btn btn-ghost-light px-7"
            >
              {footerCopy.calloutSecondary}
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-16 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <button
              onClick={scrollToHome}
              className="group flex cursor-pointer items-center text-left focus:outline-none"
              aria-label={site.brand.logoHomeAriaLabel}
            >
              <Logo className="transition-transform duration-300 group-hover:scale-[1.03] origin-left" />
            </button>
            <p className="mt-4 text-sm leading-relaxed text-white/65 max-w-sm">
              {site.brand.blurb}
            </p>

            {/* Quality Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {qualityBadges.map(({ id, icon: Icon, text }) => (
                <span
                  key={id}
                  className="pill bg-white/5 border border-white/10 text-gold-soft font-semibold"
                >
                  <Icon size={12} />
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <p className="section-kicker font-bold text-gold-soft mb-4 text-xs">
              {footerCopy.exploreHeading}
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              {navItems.map(({ section, footerTitle }) => (
                <li key={section}>
                  <button
                    onClick={scrollHandlers[section]}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    {footerTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Coffee Specialties */}
          <div>
            <p className="section-kicker font-bold text-gold-soft mb-4 text-xs">
              {footerCopy.roastsHeading}
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              {footerRoasts.map(({ id, title }) => (
                <li key={id}>
                  <button
                    onClick={scrollToProduct}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {footerCopy.copyright}
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToHome}
              className="hover:text-gold-soft transition cursor-pointer flex items-center gap-1.5 font-semibold"
            >
              <ArrowUp size={14} />
              {footerCopy.backToTop}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;