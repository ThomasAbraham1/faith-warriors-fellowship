import { motion } from 'framer-motion';
import HeroSection from '../components/ui/HeroSection';
import SectionHeader from '../components/ui/SectionHeader';
import ScrollReveal from '../components/ui/ScrollReveal';

const beliefs = [
  { num: '01', title: 'The Holy Trinity', text: 'We believe in one God: Father, Son, and Holy Spirit — three persons, one God, eternally existing in perfect unity.' },
  { num: '02', title: 'Jesus Christ', text: 'We believe Jesus Christ is the Son of God — fully God and fully man — who died for our sins and rose on the third day.' },
  { num: '03', title: 'Salvation by Grace', text: 'We believe in salvation by grace through faith in Jesus Christ alone. It is the gift of God, not earned by works.' },
  { num: '04', title: 'The Holy Bible', text: 'We believe the Bible is the inspired, infallible, and authoritative Word of God — our ultimate guide for faith and life.' },
  { num: '05', title: 'Water Baptism', text: 'We believe in water baptism as an outward declaration of an inward transformation — a public confession of faith in Christ.' },
  { num: '06', title: 'Baptism of the Holy Spirit', text: 'We believe in the baptism of the Holy Spirit as a distinct experience that empowers believers for witness and service.' },
  { num: '07', title: 'Healing & Miracles', text: 'We believe in divine healing, miracles, and the gifts of the Spirit operating in the church today.' },
  { num: '08', title: 'Second Coming', text: 'We believe in the glorious second coming of Jesus Christ — a blessed hope for all believers.' },
];

const Beliefs = () => {
  return (
    <div>
      <HeroSection
        title="What We"
        titleHighlight="Believe"
        subtitle="Our Statement of Faith — the bedrock truths upon which Faith Warriors Fellowship is built."
        minHeight="55vh"
      />

      <section className="section-pad" style={{ backgroundColor: '#FDFAF6' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Statement of Faith"
            title="Our Core Beliefs"
            subtitle="These foundational truths shape everything we do — how we worship, serve, and live together as a community."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {beliefs.map((b, i) => (
              <ScrollReveal key={b.num} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(200,151,42,0.1)' }}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 flex gap-5 group transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-110 transition-transform duration-200">
                      <span className="text-white font-bold text-xs">{b.num}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{b.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Scripture banner */}
          <ScrollReveal delay={0.3}>
            <div className="mt-14 rounded-3xl p-10 text-center relative overflow-hidden" style={{ backgroundColor: '#0F1B2D' }}>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #C8972A, transparent 70%)' }} />
              <p className="relative text-2xl md:text-3xl text-white italic font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                "Faith is the substance of things hoped for, the evidence of things not seen."
              </p>
              <p className="relative text-amber-400 font-semibold mt-4">— Hebrews 11:1</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Beliefs;
