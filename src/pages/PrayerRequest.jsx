import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/ui/HeroSection';
import SectionHeader from '../components/ui/SectionHeader';
import ScrollReveal from '../components/ui/ScrollReveal';

const prayerCategories = [
  { value: 'salvation', label: '✝️ Salvation' },
  { value: 'healing', label: '🙏 Healing' },
  { value: 'family', label: '👨‍👩‍👧 Family' },
  { value: 'finances', label: '💰 Finances' },
  { value: 'deliverance', label: '⚡ Deliverance' },
  { value: 'guidance', label: '🧭 Guidance' },
  { value: 'relationships', label: '❤️ Relationships' },
  { value: 'other', label: '🕊️ Other' },
];

const PrayerRequest = () => {
  const [form, setForm] = useState({ name: '', email: '', category: '', request: '', anonymous: false });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: val });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setForm({ name: '', email: '', category: '', request: '', anonymous: false });
  };

  return (
    <div>
      <Helmet>
        <title>Prayer Request — Faith Warriors Fellowship</title>
        <meta name="description" content="Submit a confidential prayer request to the Faith Warriors Fellowship prayer team. We believe in the power of prayer and are here to intercede for you." />
        <link rel="canonical" href="https://faithwarriorsfellowship.org/prayer-request" />
      </Helmet>
      <HeroSection
        title="Prayer"
        titleHighlight="Request"
        subtitle="God hears every prayer. Share your request with us and our prayer team will be interceding for you."
        verse="Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."
        verseRef="Philippians 4:6"
        minHeight="60vh"
      />

      <section className="section-pad" style={{ backgroundColor: '#FDFAF6' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="We're Praying for You"
            title="Submit Your Prayer Request"
            subtitle="Your request is confidential and will be handled with care, love, and discretion by our dedicated prayer team."
          />

          {submitted ? (
            <ScrollReveal>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center p-12 bg-white rounded-3xl shadow-lg border border-slate-100"
              >
                <div className="text-6xl mb-5">🙏</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Request Received!</h3>
                <p className="text-slate-500 mb-2">Our prayer team has received your request.</p>
                <p className="text-amber-600 font-medium">"The effective, fervent prayer of a righteous man avails much." – James 5:16</p>
              </motion.div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder={form.anonymous ? 'Anonymous' : 'John Doe'}
                        disabled={form.anonymous}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all text-slate-800 bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-1.5">Email (Optional)</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="For follow-up prayer"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all text-slate-800 bg-slate-50"
                      />
                    </div>
                  </div>

                  {/* Anonymous toggle */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" name="anonymous" checked={form.anonymous} onChange={handleChange} className="sr-only" />
                      <div className={`w-11 h-6 rounded-full transition-colors duration-200 ${form.anonymous ? 'bg-amber-500' : 'bg-slate-200'}`} />
                      <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${form.anonymous ? 'translate-x-5' : 'translate-x-0'}`} />
                    </div>
                    <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">Submit anonymously</span>
                  </label>

                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">Prayer Category</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {prayerCategories.map(cat => (
                        <button
                          key={cat.value}
                          type="button"
                          onClick={() => setForm({ ...form, category: cat.value })}
                          className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all duration-200 ${
                            form.category === cat.value
                              ? 'bg-amber-600 border-amber-600 text-white shadow-md'
                              : 'border-slate-200 text-slate-600 hover:border-amber-300 hover:text-amber-600'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1.5">Your Prayer Request</label>
                    <textarea
                      name="request"
                      value={form.request}
                      onChange={handleChange}
                      placeholder="Share your heart with us. You can be as specific or as brief as you like. God knows every detail..."
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all text-slate-800 bg-slate-50 resize-none"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 text-xs text-amber-700 flex items-start gap-2">
                    <span>🔒</span>
                    <span>Your prayer request is completely confidential and will only be shared with our trained prayer team. We handle all requests with care and discretion.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-600 text-white font-bold text-sm hover:bg-amber-500 transition-all duration-200 shadow-lg shadow-amber-600/25 hover:scale-[1.01] transform"
                  >
                    🙏 Submit Prayer Request
                  </button>
                </form>
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.2}>
            <div className="mt-8 text-center">
              <p className="text-slate-500 text-sm">
                Need immediate prayer? Call us at <a href="tel:+910000000000" className="text-amber-600 font-semibold hover:text-amber-500">+91 00000 00000</a> or WhatsApp our prayer team.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default PrayerRequest;
