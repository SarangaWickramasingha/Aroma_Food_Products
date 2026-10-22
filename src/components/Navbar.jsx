import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import NavItem from './NavItem';
import Logo from './Logo';
import CtaButton from './CtaButton';
import { navItems, navCta, site } from '../data/site';

const Navbar = ({
  scrollToHome,
  scrollToProduct,
  scrollToStory,
  scrollToBlog,
  scrollToContact,
  activeSection = 'home'
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock the page, support Escape, and reset the drawer when resizing to desktop.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  const handleNav = (fn) => {
    setMenuOpen(false);
    fn?.();
  };

  /** Maps a data-driven section id to the scroll handler App passes in. */
  const scrollHandlers = {
    home: scrollToHome,
    product: scrollToProduct,
    story: scrollToStory,
    blog: scrollToBlog,
    contact: scrollToContact,
  };

  /**
   * The "Contact Us" CTA is the only contact control in the bar, so the contact
   * section is dropped from both the nav list and the drawer. `navItems` keeps
   * the entry because the footer still links to it.
   */
  const navSections = navItems.filter(({ section }) => section !== 'contact');

  const mobileLinks = navSections.map(({ section, mobileTitle }) => ({
    title: mobileTitle,
    section,
    target: scrollHandlers[section],
  }));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-espresso-900/90 backdrop-blur-md py-2.5 sm:py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/10'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 sm:py-6'
      }`}
    >
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-10 lg:px-16">
        {/* Brand Logo */}
        <button
          onClick={() => handleNav(scrollToHome)}
          className="group flex shrink-0 items-center text-left focus:outline-none cursor-pointer"
          aria-label={site.brand.logoHomeAriaLabel}
        >
          <Logo className="transition-transform duration-300 group-hover:scale-[1.03] origin-left" />
        </button>

        {/* Desktop Nav Items */}
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex xl:gap-12">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-white/90 xl:gap-10">
            {navSections.map(({ section, title }) => (
              <NavItem
                key={section}
                title={title}
                isActive={activeSection === section}
                scoll={() => handleNav(scrollHandlers[section])}
              />
            ))}
          </ul>

          <CtaButton onClick={() => handleNav(scrollToContact)}>
            {navCta.label}
          </CtaButton>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:hidden">
          <CtaButton onClick={() => handleNav(scrollToContact)}>
            {navCta.label}
          </CtaButton>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20 focus:outline-none border border-white/15"
          >
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-0 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="fade-slide-in relative z-10 mx-4 mt-3 flex max-h-[calc(100dvh-6rem)] flex-col gap-2 overflow-y-auto overscroll-contain rounded-2xl border border-white/15 bg-espresso-900/95 p-4 text-white shadow-2xl backdrop-blur-2xl sm:mx-6 sm:p-5 lg:hidden"
          >
            {mobileLinks.map(({ title, section, target }) => (
              <button
                key={section}
                type="button"
                onClick={() => handleNav(target)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-[16px] font-medium transition ${
                  activeSection === section
                    ? 'bg-brand-red/20 text-gold-soft font-semibold'
                    : 'hover:bg-white/10'
                }`}
              >
                <span>{title}</span>
                <ArrowRight size={16} />
              </button>
            ))}
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;