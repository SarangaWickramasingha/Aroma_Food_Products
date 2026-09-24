import { useRef, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './page/Home';
import Product from './page/Product';
import Story from './page/Story';
import Blog from './page/Blog';
import Contact from './page/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const homeRef = useRef(null);
  const productRef = useRef(null);
  const storyRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  // Smooth scroll functions
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollToProduct = () => {
    productRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToStory = () => {
    storyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToBlog = () => {
    blogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll spy for active navbar section & scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      setShowScrollTop(window.scrollY > 400);

      const homePos = homeRef.current?.offsetTop || 0;
      const productPos = productRef.current?.offsetTop || 0;
      const storyPos = storyRef.current?.offsetTop || 0;
      const blogPos = blogRef.current?.offsetTop || 0;
      const contactPos = contactRef.current?.offsetTop || 0;

      if (scrollPos >= contactPos - 100) {
        setActiveSection('contact');
      } else if (scrollPos >= blogPos - 100) {
        setActiveSection('blog');
      } else if (scrollPos >= storyPos - 100) {
        setActiveSection('story');
      } else if (scrollPos >= productPos - 100) {
        setActiveSection('product');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F5F0E8] text-[#1A1008] font-sans">
      {/* Global Fixed Floating Navigation */}
      <Navbar
        scrollToHome={scrollToHome}
        scrollToProduct={scrollToProduct}
        scrollToStory={scrollToStory}
        scrollToBlog={scrollToBlog}
        scrollToContact={scrollToContact}
        activeSection={activeSection}
      />

      {/* Main Pages */}
      <main>
        <div ref={homeRef}>
          <Home
            nextpage={scrollToProduct}
            Storypage={scrollToStory}
          />
        </div>

        <Product
          ref={productRef}
          Storypage={scrollToStory}
        />

        <Story
          ref={storyRef}
        />

        <Blog
          ref={blogRef}
        />

        <Contact
          ref={contactRef}
        />
      </main>

      {/* Luxury Footer */}
      <Footer
        scrollToHome={scrollToHome}
        scrollToProduct={scrollToProduct}
        scrollToStory={scrollToStory}
        scrollToBlog={scrollToBlog}
        scrollToContact={scrollToContact}
      />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToHome}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#C44A3A] text-white shadow-2xl transition-all duration-300 hover:bg-[#A7382B] hover:scale-110 active:scale-95 focus:outline-none"
        >
          <span className="text-xl font-bold">↑</span>
        </button>
      )}
    </div>
  );
}

export default App;