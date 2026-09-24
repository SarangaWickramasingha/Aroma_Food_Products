import { useState, useEffect } from 'react';
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
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (fn) => {
    setMenuOpen(false);
    fn?.();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1A1008]/90 backdrop-blur-md py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/10'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Brand Logo */}
        <button
          onClick={() => handleNav(scrollToHome)}
          className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#C44A3A] to-[#E28834] text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
            <span className="text-xl font-bold font-serif">A</span>
          </div>
          <div>
            <span className="block text-[22px] font-extrabold tracking-[0.28em] text-white font-serif drop-shadow-md">
              AROMA
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E8D5B0] -mt-1">
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
            className="cursor-pointer rounded-full bg-[#C44A3A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#A7382B] hover:shadow-lg hover:scale-105 focus:outline-none"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => handleNav(scrollToContact)}
            className="cursor-pointer rounded-full bg-[#C44A3A] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#A7382B]"
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
        <div className="fade-slide-in mx-4 mt-3 flex flex-col gap-2 rounded-2xl border border-white/15 bg-[#1A1008]/95 p-5 text-white shadow-2xl backdrop-blur-2xl lg:hidden">
          <button
            onClick={() => handleNav(scrollToHome)}
            className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-[16px] font-medium transition ${
              activeSection === 'home' ? 'bg-[#C44A3A]/20 text-[#E8D5B0] font-semibold' : 'hover:bg-white/10'
            }`}
          >
            <span>Home</span>
            <span>→</span>
          </button>
          <button
            onClick={() => handleNav(scrollToProduct)}
            className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-[16px] font-medium transition ${
              activeSection === 'product' ? 'bg-[#C44A3A]/20 text-[#E8D5B0] font-semibold' : 'hover:bg-white/10'
            }`}
          >
            <span>Coffee Collection</span>
            <span>→</span>
          </button>
          <button
            onClick={() => handleNav(scrollToStory)}
            className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-[16px] font-medium transition ${
              activeSection === 'story' ? 'bg-[#C44A3A]/20 text-[#E8D5B0] font-semibold' : 'hover:bg-white/10'
            }`}
          >
            <span>Our Craft</span>
            <span>→</span>
          </button>
          <button
            onClick={() => handleNav(scrollToBlog)}
            className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-[16px] font-medium transition ${
              activeSection === 'blog' ? 'bg-[#C44A3A]/20 text-[#E8D5B0] font-semibold' : 'hover:bg-white/10'
            }`}
          >
            <span>Journal</span>
            <span>→</span>
          </button>
          <button
            onClick={() => handleNav(scrollToContact)}
            className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-[16px] font-medium transition ${
              activeSection === 'contact' ? 'bg-[#C44A3A]/20 text-[#E8D5B0] font-semibold' : 'hover:bg-white/10'
            }`}
          >
            <span>Contact Us</span>
            <span>→</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;