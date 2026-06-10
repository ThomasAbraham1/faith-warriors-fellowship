import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaHeadphones } from 'react-icons/fa';
import { HiCalendar, HiUser } from 'react-icons/hi';
import HeroSection from '../components/ui/HeroSection';
import SectionHeader from '../components/ui/SectionHeader';
import ScrollReveal from '../components/ui/ScrollReveal';

const sermons = [
  { id: 1, title: 'Walking in Covenant Faith', speaker: 'Ps. Terry', date: 'June 1, 2025', series: 'Faith That Works', duration: '45 min', tag: 'Faith' },
  { id: 2, title: 'The Power of the Resurrection', speaker: 'Ps. Terry', date: 'May 25, 2025', series: 'Easter Series', duration: '52 min', tag: 'Victory' },
  { id: 3, title: 'Hearing the Voice of God', speaker: 'Ps. Terry', date: 'May 18, 2025', series: 'Knowing God', duration: '38 min', tag: 'Prayer' },
  { id: 4, title: 'Faith Over Fear', speaker: 'Ps. Terry', date: 'May 11, 2025', series: 'Faith That Works', duration: '41 min', tag: 'Faith' },
  { id: 5, title: 'The Holy Spirit: Our Helper', speaker: 'Ps. Terry', date: 'May 4, 2025', series: 'Spirit & Fire', duration: '49 min', tag: 'Holy Spirit' },
  { id: 6, title: 'Restoration: God Makes All Things New', speaker: 'Ps. Terry', date: 'April 27, 2025', series: 'New Beginnings', duration: '44 min', tag: 'Healing' },
];

const tags = ['All', 'Faith', 'Victory', 'Prayer', 'Holy Spirit', 'Healing'];

const Sermons = () => {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All' ? sermons : sermons.filter(s => s.tag === activeTag);

  return (
    <div>
      <Helmet>
        <title>Sermons &amp; Messages — Faith Warriors Fellowship</title>
        <meta name="description" content="Listen to powerful Word-based sermons from Faith Warriors Fellowship. Browse messages on faith, victory, prayer, the Holy Spirit, and healing by Ps. Terry." />
        <link rel="canonical" href="https://faithwarriorsfellowship.org/sermons" />
      </Helmet>
      <HeroSection
        title="Sermons &"
        titleHighlight="Messages"
        subtitle="Be nourished by the Word. Listen to anointed messages that will strengthen your faith and transform your walk with God."
        minHeight="55vh"
      />

      <section className="section-pad" style={{ backgroundColor: '#FDFAF6' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Messages" title="Recent Sermons" subtitle="Listen, be encouraged, and grow in your faith." />

          {/* Filter tags */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeTag === tag
                      ? 'bg-amber-600 border-amber-600 text-white shadow-md'
                      : 'border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 group"
                >
                  {/* Thumbnail */}
                  <div className="relative h-40 flex items-center justify-center" style={{ backgroundColor: '#0F1B2D' }}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #C8972A, transparent 70%)' }} />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center shadow-xl shadow-amber-600/40"
                    >
                      <FaPlay className="text-white text-lg ml-1" />
                    </motion.button>
                    <span className="absolute top-3 right-3 text-xs bg-amber-600 text-white px-2.5 py-1 rounded-full font-semibold">{s.tag}</span>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider mb-1">{s.series}</p>
                    <h3 className="font-bold text-slate-800 mb-3 text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{s.title}</h3>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-1">
                        <HiUser size={13} /> {s.speaker}
                      </div>
                      <div className="flex items-center gap-1">
                        <HiCalendar size={13} /> {s.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaHeadphones size={12} /> {s.duration}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <p className="text-slate-500 text-sm mb-4">More sermons coming soon. Subscribe to our YouTube channel to stay updated.</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-red-600 text-white font-semibold text-sm hover:bg-red-500 transition-all duration-200 hover:scale-105 transform"
              >
                🎬 Subscribe on YouTube
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Sermons;
