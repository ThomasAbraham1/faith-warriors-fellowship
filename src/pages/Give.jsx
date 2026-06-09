import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaMobile, FaCheckCircle } from 'react-icons/fa';
import HeroSection from '../components/ui/HeroSection';
import SectionHeader from '../components/ui/SectionHeader';
import ScrollReveal from '../components/ui/ScrollReveal';

const reasons = [
  { icon: '🏛️', title: 'Building God\'s House', text: 'Your gift supports the facility, equipment, and resources needed to host powerful services.' },
  { icon: '🌍', title: 'Reaching the Lost', text: 'Fund outreach programs, evangelism, and missions that spread the Gospel near and far.' },
  { icon: '👶', title: 'Raising the Next Generation', text: 'Invest in Sunday School, Youth Ministry, and discipleship programs for children and youth.' },
  { icon: '🤝', title: 'Community Impact', text: 'Resources go toward feeding programs, counseling, and meeting practical needs in the community.' },
];

const Give = () => {
  const [copied, setCopied] = useState('');

  const copy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(''), 2000);
  };

  const bankDetails = [
    { label: 'Bank Name', value: 'Your Bank Name' },
    { label: 'Account Name', value: 'Faith Warriors Fellowship' },
    { label: 'Account Number', value: 'XXXX XXXX XXXX' },
    { label: 'IFSC Code', value: 'XXXX0000000' },
    { label: 'UPI ID', value: 'faithwarriors@upi' },
  ];

  return (
    <div>
      <HeroSection
        title="Give &"
        titleHighlight="Support the Kingdom"
        subtitle="Your generosity fuels the mission. Every gift is an act of worship and an investment in eternity."
        verse="Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
        verseRef="2 Corinthians 9:7"
        minHeight="60vh"
      />

      {/* Why Give */}
      <section className="section-pad" style={{ backgroundColor: '#FDFAF6' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Why Give" title="Your Gift Makes a Difference" subtitle="When you give, you partner with God in building His kingdom." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl p-6 text-center shadow-md border border-slate-100">
                  <div className="text-4xl mb-4">{r.icon}</div>
                  <h3 className="font-bold text-slate-800 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{r.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{r.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="section-pad" style={{ backgroundColor: '#0F1B2D' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="How to Give" title="Bank Transfer Details" subtitle="You can give via bank transfer or UPI. All transactions are secure." light />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bank */}
            <ScrollReveal>
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-600 flex items-center justify-center">
                    <FaUniversity className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Bank Transfer</h3>
                    <p className="text-slate-400 text-xs">NEFT / RTGS / IMPS</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {bankDetails.filter(d => d.label !== 'UPI ID').map((detail) => (
                    <div key={detail.label} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                      <span className="text-slate-400 text-sm">{detail.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-mono text-sm">{detail.value}</span>
                        <button
                          onClick={() => copy(detail.value, detail.label)}
                          className="text-xs text-amber-400 hover:text-amber-300 transition-colors"
                        >
                          {copied === detail.label ? <FaCheckCircle className="text-green-400" /> : '📋'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* UPI */}
            <ScrollReveal delay={0.1}>
              <div className="glass-card p-8 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-600 flex items-center justify-center mb-4">
                  <FaMobile className="text-white text-lg" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>UPI Payment</h3>
                <p className="text-slate-400 text-sm mb-6">Scan the QR code or use the UPI ID</p>
                {/* QR Placeholder */}
                <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <div className="text-center">
                    <p className="text-slate-400 text-xs">QR Code</p>
                    <p className="text-slate-500 text-xs mt-1">Coming Soon</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-amber-400 font-mono text-sm bg-amber-600/10 px-3 py-1.5 rounded-lg border border-amber-500/30">faithwarriors@upi</code>
                  <button onClick={() => copy('faithwarriors@upi', 'UPI')} className="text-slate-400 hover:text-amber-400 transition-colors">
                    {copied === 'UPI' ? <FaCheckCircle className="text-green-400" /> : '📋'}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 p-5 rounded-2xl bg-amber-600/10 border border-amber-500/20 text-center">
              <p className="text-amber-300 text-sm">
                💛 After giving, please WhatsApp us at <strong>+91 00000 00000</strong> with your name and amount for our records. God bless your generosity!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Give;
