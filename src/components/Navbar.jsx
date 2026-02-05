import { useState, useEffect, useRef } from 'react';
import { Terminal, Menu, X } from './Icons';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [hoveredLink, setHoveredLink] = useState(null);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navLinksRef = useRef({});

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Detect active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '#home';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = `#${sectionId}`;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update underline position
  useEffect(() => {
    const targetLink = hoveredLink || activeSection;
    const element = navLinksRef.current[targetLink];

    if (element) {
      const { offsetLeft, offsetWidth } = element;
      const underlineWidth = offsetWidth * 1; // 65% of link width
      const underlineLeft = offsetLeft + (offsetWidth - underlineWidth) / 2; // Center it
      setUnderlineStyle({
        left: `${underlineLeft}px`,
        width: `${underlineWidth}px`,
        opacity: 1,
      });
    } else {
      setUnderlineStyle({ opacity: 0 });
    }
  }, [hoveredLink, activeSection]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-primary/10 shadow-[0_0_20px_rgba(74,222,128,0.05)]'
          : 'bg-background/50 backdrop-blur-sm'
      }`}
    >
      <nav className="container px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <Terminal className="h-5 w-5 text-primary transition-transform duration-200 group-hover:scale-110" />
            <span className="font-semibold">Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 mr-4">
            <div className="relative flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                const isHovered = hoveredLink === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    ref={(el) => (navLinksRef.current[link.href] = el)}
                    className={`relative px-4 py-2 text-sm transition-colors duration-200 ${
                      isActive
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {/* Terminal cursor/prefix indicator */}
                    <span
                      className={`absolute left-0 top-1/2 -translate-y-1/2 text-primary transition-all duration-200 ${
                        isHovered
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-2'
                      }`}
                    >
                      >
                    </span>
                    <span className={isHovered ? 'ml-3' : ''}>{link.label}</span>
                  </a>
                );
              })}

              {/* Animated underline */}
              <div
                className="absolute bottom-0 h-[2px] bg-primary transition-all duration-300 ease-out"
                style={{
                  left: underlineStyle.left,
                  width: underlineStyle.width,
                  opacity: underlineStyle.opacity,
                }}
              />
            </div>

            <a
              href="#contact"
              className="btn btn-primary text-sm h-9 px-4 ml-4 relative overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm transition-colors flex items-center gap-2 group ${
                      isActive
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {link.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    )}
                  </a>
                );
              })}
              <a
                href="#contact"
                className="btn btn-primary text-sm h-9 px-4 w-fit"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
