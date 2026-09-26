import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import NavItem from './NavItem';

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

  const handleNav = (fn) => {
    setMenuOpen(false);
    fn?.();
  };

  const mobileLinks = [
    { title: 'Home', section: 'home', target: scrollToHome },
    { title: 'Coffee Collection', section: 'product', target: scrollToProduct },
    { title: 'Our Craft', section: 'story', target: scrollToStory },
    { title: 'Journal', section: 'blog', target: scrollToBlog },
    { title: 'Contact Us', section: 'contact', target: scrollToContact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-espresso-900/90 backdrop-blur-md py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/10'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Brand Logo */}
        <button
          onClick={() => handleNav(scrollToHome)}
          className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-brand-red to-brand-amber text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
            <span className="text-xl font-bold font-serif">A</span>
          </div>
          <div>
            <span className="block text-[22px] font-extrabold tracking-[0.28em] text-white font-serif drop-shadow-md">
              AROMA
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.35em] text-gold-soft -mt-1">
              Food Products
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex xl:gap-12">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-white/90 xl:gap-10">
            <NavItem
              title="Home"
              isActive={activeSection === 'home'}
              scoll={() => handleNav(scrollToHome)}
            />
            <NavItem
              title="Coffee"
              isActive={activeSection === 'product'}
              scoll={() => handleNav(scrollToProduct)}
            />
            <NavItem
              title="Our Craft"
              isActive={activeSection === 'story'}
              scoll={() => handleNav(scrollToStory)}
            />
            <NavItem
              title="Journal"
              isActive={activeSection === 'blog'}
              scoll={() => handleNav(scrollToBlog)}
            />
            <NavItem
              title="Contact"
              isActive={activeSection === 'contact'}
              scoll={() => handleNav(scrollToContact)}
            />
          </ul>

          <button
            onClick={() => handleNav(scrollToContact)}
            className="cursor-pointer rounded-full bg-brand-red px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-brand-red-hover hover:shadow-lg hover:scale-105 focus:outline-none"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => handleNav(scrollToContact)}
            className="cursor-pointer rounded-full bg-brand-red px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md hover:bg-brand-red-hover"
          >
            Contact
          </button>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20 focus:outline-none border border-white/15"
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
        <div className="fade-slide-in mx-4 mt-3 flex flex-col gap-2 rounded-2xl border border-white/15 bg-espresso-900/95 p-5 text-white shadow-2xl backdrop-blur-2xl lg:hidden">
          {mobileLinks.map(({ title, section, target }) => (
            <button
              key={section}
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
      )}
    </header>
  );
};

export default Navbar;