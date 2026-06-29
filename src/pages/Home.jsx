import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaUsers, FaBookOpen, FaPray, FaMusic, FaBullhorn,
  FaHeart, FaChild, FaVideo,
} from 'react-icons/fa';
import { HiArrowRight, HiClock } from 'react-icons/hi';
import HeroSection from '../components/ui/HeroSection';
import SectionHeader from '../components/ui/SectionHeader';
import ScrollReveal from '../components/ui/ScrollReveal';
import whoWeAreImg from '../assets/church-neutral.jpg';

const ministries = [
  { icon: FaChild, name: 'Sunday School', color: 'from-blue-500 to-blue-600' },
  { icon: FaUsers, name: 'Youth Ministry', color: 'from-purple-500 to-purple-600' },
  { icon: FaHeart, name: "Women's Fellowship", color: 'from-pink-500 to-pink-600' },
  { icon: FaUsers, name: "Men's Fellowship", color: 'from-teal-500 to-teal-600' },
  { icon: FaMusic, name: 'Worship Ministry', color: 'from-amber-500 to-amber-600' },
  { icon: FaPray, name: 'Prayer Ministry', color: 'from-indigo-500 to-indigo-600' },
  { icon: FaBullhorn, name: 'Evangelism Ministry', color: 'from-rose-500 to-rose-600' },
  { icon: FaVideo, name: 'Media Ministry', color: 'from-green-500 to-green-600' },
];

const testimonials = [
  {
    name: 'Sarah M.',
    category: 'Salvation',
    text: 'I came broken and lost, but through this church community, I found Jesus and my life has never been the same. His grace truly transforms!',
    initials: 'SM',
    color: 'bg-amber-600',
  },
  {
    name: 'David K.',
    category: 'Healing',
    text: 'The doctors said there was no cure, but God had a different plan. After the prayer team prayed for me, I was completely healed. All glory to God!',
    initials: 'DK',
    color: 'bg-blue-600',
  },
  {
    name: 'Grace T.',
    category: 'Family Restoration',
    text: 'My marriage was on the brink of collapse. Through pastoral counseling and prayer, God restored our family. We are stronger than ever!',
    initials: 'GT',
    color: 'bg-purple-600',
  },
];

const serviceTimes = [
  { name: 'Sunday Worship', time: '10:00 AM', icon: '⛪' },
  { name: 'Midweek Service', time: 'TBA', icon: '📖' },
  { name: 'Prayer Meeting', time: 'TBA', icon: '🙏' },
  { name: 'Bible Study', time: 'Sat 7:00-8:30 PM', icon: '✝️' },
];

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Faith Warriors Fellowship — Walking in Faith, Living in Victory</title>
        <meta name="description" content="Faith Warriors Fellowship — A vibrant church community in Noida, Uttar Pradesh. Join us for Sunday worship at 10 AM, Bible study, prayer meetings, and community life." />
        <link rel="canonical" href="https://faithwarriorsfellowship.org/" />
      </Helmet>
      {/* Hero */}
      <HeroSection
        title="Welcome to"
        titleHighlight="Faith Warriors Fellowship"
        subtitle="We are delighted to welcome you. Our desire is to see people encounter Jesus, grow in faith, and walk in the victory He has prepared for them."
        verse="For we walk by faith, not by sight."
        verseRef="2 Corinthians 5:7"
        ctaPrimary={{ to: '/about', label: 'Who We Are' }}
        ctaSecondary={{ to: '/contact', label: 'Plan Your Visit' }}
      />

      {/* Service Times Strip */}
      <section style={{ backgroundColor: '#0F1B2D' }} className="py-8 border-y border-amber-600/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceTimes.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.1}>
                <div className="flex items-center gap-3 p-3">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">{s.name}</p>
                    <p className="text-amber-400 font-semibold text-sm">{s.time}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-pad" style={{ backgroundColor: '#FDFAF6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img src={whoWeAreImg} alt="Who We Are" className="w-full h-full object-cover" />
                </div>
              </div>
            </ScrollReveal>
            <div>
              <SectionHeader
                label="Who We Are"
                title="A Place to Believe, Belong & Become"
                subtitle="Faith Warriors Fellowship is a vibrant community of believers committed to seeing lives transformed by the power of the Gospel."
                center={false}
              />
              <ScrollReveal delay={0.2}>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: '🎯', title: 'Our Vision', text: 'To raise disciples of Jesus Christ who walk in faith, demonstrate God\'s love, and impact their generation through the power of the Holy Spirit.' },
                    { icon: '📣', title: 'Our Mission', text: 'Preach the Gospel, teach the Word, build strong families, equip believers for ministry, and reach communities with God\'s love.' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                      <span className="text-2xl mt-0.5">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-amber-600 text-white font-semibold text-sm hover:bg-amber-500 transition-all duration-200 shadow-lg shadow-amber-600/25 hover:scale-105 transform"
                >
                  Learn More <HiArrowRight />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="section-pad" style={{ backgroundColor: '#0F1B2D' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Ministries"
            title="Find Your Place to Serve"
            subtitle="We have a place for everyone. Discover a ministry where you can grow and make a difference."
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ministries.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass-card p-6 text-center cursor-pointer group"
                >
                  <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    <m.icon className="text-white text-xl" />
                  </div>
                  <p className="text-white font-medium text-sm">{m.name}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link
                to="/ministries"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-amber-500 text-amber-400 font-semibold text-sm hover:bg-amber-500 hover:text-white transition-all duration-200"
              >
                Explore All Ministries <HiArrowRight />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad" style={{ backgroundColor: '#F7F3EE' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Testimonies"
            title="What God Has Done"
            subtitle="Real stories of lives transformed by the grace and power of God."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-7 shadow-md border border-slate-100 relative"
                >
                  <div className="text-5xl text-amber-200 font-serif absolute top-4 right-6">"</div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                      <span className="text-xs text-amber-600 font-medium px-2 py-0.5 bg-amber-50 rounded-full">{t.category}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic">{t.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: '#0F1B2D' }} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #C8972A 0%, transparent 60%), radial-gradient(circle at 70% 50%, #C8972A 0%, transparent 60%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Take the Next Step?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-slate-300 text-lg mb-10">Whether you're new to faith or looking for a church home, we would love to meet you.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-9 py-4 rounded-full bg-amber-600 text-white font-bold text-sm hover:bg-amber-500 transition-all duration-200 shadow-lg hover:scale-105 transform">
                Plan Your Visit
              </Link>
              <Link to="/prayer-request" className="px-9 py-4 rounded-full border-2 border-white/30 text-white font-bold text-sm hover:border-amber-400 hover:text-amber-400 transition-all duration-200 hover:scale-105 transform">
                Submit a Prayer Request
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
