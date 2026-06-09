import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import HeroSection from '../components/ui/HeroSection';
import SectionHeader from '../components/ui/SectionHeader';
import ScrollReveal from '../components/ui/ScrollReveal';

const categories = ['All', 'Worship Services', 'Baptisms', 'Outreach', 'Special Events', "Children's Ministry"];

// Placeholder gallery items using gradient placeholders
const galleryItems = [
  { id: 1, category: 'Worship Services', title: 'Sunday Worship', color: '#1e3a5f', aspect: 'aspect-[4/3]' },
  { id: 2, category: 'Baptisms', title: 'Water Baptism', color: '#1a4a3a', aspect: 'aspect-square' },
  { id: 3, category: 'Outreach', title: 'Community Outreach', color: '#4a1a1a', aspect: 'aspect-[4/3]' },
  { id: 4, category: "Children's Ministry", title: 'Sunday School', color: '#2a1a4a', aspect: 'aspect-square' },
  { id: 5, category: 'Special Events', title: 'Annual Conference', color: '#3a2a0a', aspect: 'aspect-[16/9]' },
  { id: 6, category: 'Worship Services', title: 'Praise & Worship Night', color: '#0a2a3a', aspect: 'aspect-[4/3]' },
  { id: 7, category: 'Outreach', title: 'Hospital Visitation', color: '#2a3a0a', aspect: 'aspect-square' },
  { id: 8, category: 'Baptisms', title: 'Easter Baptism', color: '#0a1a4a', aspect: 'aspect-[4/3]' },
  { id: 9, category: "Children's Ministry", title: "Children's Camp", color: '#3a0a2a', aspect: 'aspect-[4/3]' },
  { id: 10, category: 'Special Events', title: 'Christmas Service', color: '#1a0a3a', aspect: 'aspect-square' },
  { id: 11, category: 'Worship Services', title: 'Night of Worship', color: '#2a0a1a', aspect: 'aspect-[4/3]' },
  { id: 12, category: 'Outreach', title: 'Food Distribution', color: '#0a3a1a', aspect: 'aspect-square' },
];

const iconMap = {
  'Worship Services': '🎵',
  'Baptisms': '💧',
  'Outreach': '🤝',
  'Special Events': '⭐',
  "Children's Ministry": '👶',
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeTab === 'All' ? galleryItems : galleryItems.filter(g => g.category === activeTab);

  const navLightbox = (dir) => {
    const idx = filtered.findIndex(g => g.id === lightbox.id);
    const next = (idx + dir + filtered.length) % filtered.length;
    setLightbox(filtered[next]);
  };

  return (
    <div>
      <HeroSection
        title="Our"
        titleHighlight="Gallery"
        subtitle="Moments of worship, community, and the work of God captured in pictures."
        minHeight="55vh"
      />

      <section className="section-pad" style={{ backgroundColor: '#FDFAF6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Memories" title="Glimpses of Grace" subtitle="A collection of beautiful moments from our church family." />

          {/* Category tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeTab === cat
                      ? 'bg-amber-600 border-amber-600 text-white shadow-md'
                      : 'border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-600'
                  }`}
                >
                  {cat !== 'All' && <span className="mr-1">{iconMap[cat]}</span>}
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md"
                  style={{ backgroundColor: item.color }}
                  onClick={() => setLightbox(item)}
                >
                  <div className={`${item.aspect} w-full flex flex-col items-center justify-center p-6`}>
                    <span className="text-4xl mb-3">{iconMap[item.category]}</span>
                    <span className="text-white/60 text-xs text-center">{item.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center text-white px-4">
                      <p className="font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</p>
                      <p className="text-xs text-white/70 mt-1">{item.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <ScrollReveal delay={0.3}>
            <p className="text-center text-slate-400 text-sm mt-12 italic">
              📸 More photos coming soon. Follow us on Instagram for the latest updates!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
              style={{ backgroundColor: lightbox.color }}
            >
              <div className="aspect-[4/3] flex flex-col items-center justify-center p-8">
                <span className="text-7xl mb-4">{iconMap[lightbox.category]}</span>
                <h3 className="text-white text-2xl font-bold text-center" style={{ fontFamily: "'Playfair Display', serif" }}>{lightbox.title}</h3>
                <span className="text-white/60 text-sm mt-2">{lightbox.category}</span>
              </div>
              <button onClick={() => setLightbox(null)} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors">
                <HiX size={18} />
              </button>
              <button onClick={() => navLightbox(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-amber-600 transition-colors">
                <HiChevronLeft size={20} />
              </button>
              <button onClick={() => navLightbox(1)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-amber-600 transition-colors">
                <HiChevronRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
