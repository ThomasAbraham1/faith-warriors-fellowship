import { motion } from 'framer-motion';
import {
  FaUsers, FaBookOpen, FaPray, FaMusic, FaBullhorn,
  FaHeart, FaChild, FaVideo,
} from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import HeroSection from '../components/ui/HeroSection';
import SectionHeader from '../components/ui/SectionHeader';
import ScrollReveal from '../components/ui/ScrollReveal';

const ministries = [
  {
    icon: FaChild,
    name: 'Sunday School',
    description: 'Nurturing children in the Word of God through age-appropriate teaching, stories, and activities that build a strong foundation of faith.',
    gradient: 'from-sky-500 to-blue-600',
    tag: 'Children',
  },
  {
    icon: FaUsers,
    name: 'Youth Ministry',
    description: 'Empowering the next generation to discover their identity in Christ through dynamic worship, relevant teaching, and meaningful community.',
    gradient: 'from-violet-500 to-purple-600',
    tag: 'Youth',
  },
  {
    icon: FaHeart,
    name: "Women's Fellowship",
    description: 'A sisterhood where women are encouraged, equipped, and empowered to fulfill their God-given potential in every area of life.',
    gradient: 'from-rose-500 to-pink-600',
    tag: 'Women',
  },
  {
    icon: FaUsers,
    name: "Men's Fellowship",
    description: 'Building godly men of character, integrity, and purpose who lead their families and communities with wisdom and faith.',
    gradient: 'from-teal-500 to-emerald-600',
    tag: 'Men',
  },
  {
    icon: FaMusic,
    name: 'Worship Ministry',
    description: 'Leading the congregation into the presence of God through anointed music, creative arts, and a culture of heartfelt praise.',
    gradient: 'from-amber-500 to-yellow-600',
    tag: 'Arts',
  },
  {
    icon: FaPray,
    name: 'Prayer Ministry',
    description: 'The engine of the church — interceding for the congregation, city, and nations, believing God for breakthroughs through fervent prayer.',
    gradient: 'from-indigo-500 to-blue-700',
    tag: 'Prayer',
  },
  {
    icon: FaBullhorn,
    name: 'Evangelism Ministry',
    description: 'Taking the Good News beyond our walls — reaching the lost through outreach, community service, and compassion-driven mission.',
    gradient: 'from-orange-500 to-red-600',
    tag: 'Outreach',
  },
  {
    icon: FaVideo,
    name: 'Media Ministry',
    description: 'Using technology, creativity, and digital platforms to amplify the Gospel and connect people with the message of God\'s kingdom.',
    gradient: 'from-green-500 to-teal-600',
    tag: 'Media',
  },
];

const Ministries = () => {
  return (
    <div>
      <HeroSection
        title="Our"
        titleHighlight="Ministries"
        subtitle="A place for everyone to find their purpose, develop their gifts, and serve God's kingdom together."
        minHeight="55vh"
        ctaPrimary={{ to: '/contact', label: 'Get Involved' }}
      />

      <section className="section-pad" style={{ backgroundColor: '#FDFAF6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Discover"
            title="Find Your Ministry"
            subtitle="There is a place for you here. Explore our ministries and find where you belong."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-7">
            {ministries.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 flex gap-6 group transition-all duration-300"
                >
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${m.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    <m.icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-slate-800 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>{m.name}</h3>
                      <span className="text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">{m.tag}</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{m.description}</p>
                    <button className="inline-flex items-center gap-1.5 text-amber-600 font-semibold text-sm hover:gap-2.5 transition-all duration-200 group-hover:text-amber-500">
                      Learn More <HiArrowRight size={15} />
                    </button>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section style={{ backgroundColor: '#0F1B2D' }} className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Not Sure Where to Start?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-slate-300 mb-8">Reach out to us and we'll help you find the perfect place to serve and grow.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-600 text-white font-bold hover:bg-amber-500 transition-all duration-200 shadow-lg hover:scale-105 transform">
              Contact Us <HiArrowRight />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Ministries;
