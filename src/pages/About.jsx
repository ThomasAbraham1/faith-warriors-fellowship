import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import HeroSection from '../components/ui/HeroSection';
import SectionHeader from '../components/ui/SectionHeader';
import ScrollReveal from '../components/ui/ScrollReveal';
import pastorImg from '../assets/pastor.png';
import heroBg from '../assets/hero_bg.png';

const missionItems = [
  'Preach the Gospel of Jesus Christ',
  'Teach the Word of God',
  'Build strong families',
  'Equip believers for ministry',
  'Reach communities with God\'s love',
];

const leadership = [
  { name: 'Ps. Terry', role: 'Senior Pastor', initials: 'PT', color: 'bg-amber-600', img: pastorImg },
  { name: 'Team Leader', role: 'Associate Pastor', initials: 'TL', color: 'bg-blue-600', img: null },
  { name: 'Worship Leader', role: 'Worship Ministry', initials: 'WL', color: 'bg-purple-600', img: null },
  { name: 'Youth Leader', role: 'Youth Ministry', initials: 'YL', color: 'bg-green-600', img: null },
];

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us — Faith Warriors Fellowship</title>
        <meta name="description" content="Learn about Faith Warriors Fellowship — our vision, mission, history, and the leadership team that serves our community under Pastor Terry." />
        <link rel="canonical" href="https://faithwarriorsfellowship.org/about" />
      </Helmet>
      <HeroSection
        title="About"
        titleHighlight="Faith Warriors Fellowship"
        subtitle="A vibrant community raising disciples who walk in faith, demonstrate God's love, and impact their generation."
        minHeight="60vh"
        ctaPrimary={{ to: '/contact', label: 'Join Us Sunday' }}
      />

      {/* Vision & Mission */}
      <section className="section-pad" style={{ backgroundColor: '#FDFAF6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader label="Our Purpose" title="Vision & Mission" center={false} />
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-100 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-600/10 flex items-center justify-center">
                      <span className="text-amber-600 font-bold text-lg">✦</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>Our Vision</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    To raise disciples of Jesus Christ who walk in faith, demonstrate God's love, and impact their generation through the power of the Holy Spirit.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-amber-600/10 flex items-center justify-center">
                      <span className="text-amber-600 font-bold text-lg">✦</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h3>
                  </div>
                  <ul className="space-y-3">
                    {missionItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FaCheckCircle className="text-amber-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-slate-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <div>
              <SectionHeader label="Our History" title="Our Story" center={false} />
              <ScrollReveal delay={0.1}>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Faith Warriors Fellowship was founded with a simple yet powerful vision — to create a community where people could encounter the living God, grow in His Word, and be equipped to make a difference in the world around them.
                  </p>
                  <p>
                    Under the passionate leadership of Pastor Terry, the church has grown into a thriving congregation that embraces people from all walks of life. We believe the church should be a place where everyone feels welcomed, valued, and transformed.
                  </p>
                  <p>
                    From our Sunday worship gatherings to our weekday small groups and outreach programs, everything we do is rooted in a deep love for God and people.
                  </p>
                  <blockquote className="border-l-4 border-amber-500 pl-5 py-2 my-6 italic text-slate-700">
                    "For we walk by faith, not by sight." <span className="not-italic text-amber-600 font-medium">– 2 Corinthians 5:7</span>
                  </blockquote>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor */}
      <section className="section-pad" style={{ backgroundColor: '#0F1B2D' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Senior Pastor" title="Meet Pastor Terry" light />
          <ScrollReveal>
            <div className="glass-card p-8 md:p-12 grid md:grid-cols-3 gap-10 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-amber-500/50 shadow-2xl shadow-amber-600/20">
                    <img src={pastorImg} alt="Pastor Terry" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-amber-600 rounded-xl px-3 py-1.5 text-white text-xs font-bold shadow-lg">Senior Pastor</div>
                </div>
              </div>
              <div className="md:col-span-2 text-white">
                <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Ps. Terry</h3>
                <p className="text-amber-400 font-medium mb-5">Senior Pastor, Faith Warriors Fellowship</p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Pastor Terry is a passionate servant of God with a heart for seeing lives transformed by the power of the Gospel. With a burning desire to see people encounter Jesus and walk in their God-given destiny, Pastor Terry leads Faith Warriors Fellowship with vision, faith, and love.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Known for dynamic, Word-based preaching and a heart of compassion, Pastor Terry believes that every person has a purpose and a calling — and that the local church is the vehicle God uses to help people discover and fulfil that calling.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-pad" style={{ backgroundColor: '#F7F3EE' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Leadership" title="Our Leadership Team" subtitle="Servant leaders committed to guiding our community with wisdom and grace." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((l, i) => (
              <ScrollReveal key={l.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} className="bg-white rounded-2xl p-6 text-center shadow-md border border-slate-100">
                  <div className="mx-auto mb-4 w-20 h-20 rounded-full overflow-hidden border-2 border-amber-200">
                    {l.img ? (
                      <img src={l.img} alt={l.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className={`w-full h-full ${l.color} flex items-center justify-center text-white text-xl font-bold`}>
                        {l.initials}
                      </div>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-800 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{l.name}</h4>
                  <p className="text-amber-600 text-sm font-medium">{l.role}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
