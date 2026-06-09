import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/hero_bg.png';

const HeroSection = ({
  title,
  titleHighlight,
  subtitle,
  verse,
  verseRef,
  ctaPrimary,
  ctaSecondary,
  backgroundImage = heroBg,
  minHeight = '100vh',
  overlay = true,
}) => {
  return (
    <section
      className="relative flex items-center justify-center text-center overflow-hidden"
      style={{ minHeight, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {overlay && <div className="absolute inset-0 hero-overlay" />}

      {/* Animated gold particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-500/10"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="inline-block px-5 py-2 text-xs font-semibold tracking-[0.25em] uppercase rounded-full bg-amber-600/20 text-amber-400 border border-amber-500/40 mb-6">
            Faith Warriors Fellowship
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
          {titleHighlight && (
            <span className="block gold-text">{titleHighlight}</span>
          )}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {verse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mb-10"
          >
            <p className="text-amber-300/80 italic text-base">
              &ldquo;{verse}&rdquo;
              {verseRef && <span className="not-italic text-amber-500/80 font-medium ml-2">— {verseRef}</span>}
            </p>
          </motion.div>
        )}

        {(ctaPrimary || ctaSecondary) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {ctaPrimary && (
              <Link
                to={ctaPrimary.to}
                className="px-8 py-4 rounded-full text-sm font-bold bg-amber-600 text-white hover:bg-amber-500 transition-all duration-200 shadow-lg shadow-amber-600/30 hover:shadow-amber-500/40 hover:scale-105 transform"
              >
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                to={ctaSecondary.to}
                className="px-8 py-4 rounded-full text-sm font-bold bg-transparent text-white border-2 border-white/40 hover:border-amber-400 hover:text-amber-400 transition-all duration-200 hover:scale-105 transform"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2.5 rounded-full bg-amber-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
