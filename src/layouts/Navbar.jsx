import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaCross } from 'react-icons/fa';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/beliefs', label: 'Our Beliefs' },
  { to: '/ministries', label: 'Ministries' },
  { to: '/sermons', label: 'Sermons' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/give', label: 'Give' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-navy-800/95 backdrop-blur-md shadow-xl shadow-black/30 py-3'
            : 'bg-transparent py-5'
        }`}
        style={{ backgroundColor: scrolled ? 'rgba(15,27,45,0.96)' : 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center shadow-lg shadow-amber-600/30 group-hover:bg-amber-500 transition-colors">
              <FaCross className="text-white text-base" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-bold text-sm tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                Faith Warriors
              </p>
              <p className="text-amber-400 text-xs tracking-widest uppercase font-medium">Fellowship</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    location.pathname === link.to
                      ? 'text-amber-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber-400 rounded-full"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/prayer-request"
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-amber-600 text-white hover:bg-amber-500 transition-all duration-200 shadow-md hover:shadow-amber-500/30 hover:shadow-lg"
            >
              🙏 Prayer Request
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 lg:hidden flex flex-col"
              style={{ backgroundColor: '#0F1B2D' }}
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <span className="text-white font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Faith Warriors</span>
                <button onClick={() => setMenuOpen(false)} className="text-white hover:text-amber-400 transition-colors">
                  <HiX size={22} />
                </button>
              </div>
              <ul className="flex-1 overflow-y-auto p-4 space-y-1">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        location.pathname === link.to
                          ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="p-4 border-t border-white/10">
                <Link
                  to="/prayer-request"
                  className="block w-full text-center px-5 py-3 rounded-full text-sm font-semibold bg-amber-600 text-white hover:bg-amber-500 transition-colors"
                >
                  🙏 Prayer Request
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
