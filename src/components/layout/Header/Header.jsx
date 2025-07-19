import { useState, useEffect } from "react";
import ThemeToggle from "../../ui/ThemeToggle";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Close menu on window resize (when switching to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h3>Rubén Álvarez</h3>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li><a href="#about" onClick={closeMenu}>Sobre mí</a></li>
            <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
          </ul>
        </nav>

        {/* Theme Toggle and Mobile Menu */}
        <div className="header__actions">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button 
            className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`header__mobile-nav ${isMenuOpen ? 'header__mobile-nav--open' : ''}`}>
          <ul className="header__mobile-nav-list">
            <li><a href="#about" onClick={closeMenu}>Sobre mí</a></li>
            <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
          </ul>
        </nav>

        {/* Overlay */}
        {isMenuOpen && (
          <div className="header__overlay" onClick={closeMenu}></div>
        )}
      </div>
    </header>
  );
};

export default Header;