import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import HeroSection from '../components/ui/HeroSection';
import SectionHeader from '../components/ui/SectionHeader';
import ScrollReveal from '../components/ui/ScrollReveal';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us — Faith Warriors Fellowship</title>
        <meta name="description" content="Get in touch with Faith Warriors Fellowship. Visit us on Sundays at 10:30 AM, send us a message, or find our address, phone number, and social media links." />
        <link rel="canonical" href="https://faithwarriorsfellowship.org/contact" />
      </Helmet>
      <HeroSection
        title="Get in"
        titleHighlight="Touch"
        subtitle="We'd love to hear from you. Whether you have a question, need prayer, or want to visit, we're here for you."
        minHeight="55vh"
      />

      <section className="section-pad" style={{ backgroundColor: '#FDFAF6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info Panel */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Information</h2>
                <div className="gold-divider mb-6" style={{ margin: '0 0 24px 0' }} />
              </ScrollReveal>

              <div className="space-y-5 mb-8">
                {[
                  { icon: HiLocationMarker, label: 'Address', value: 'Pillar no -116, Bhangel, Sector 102\nSalarpur Khadar, Noida, UP 201304' },
                  { icon: HiPhone, label: 'Phone', value: '+91 95822 71412' },
                  { icon: HiMail, label: 'Email', value: 'info@faithwarriors.in' },
                ].map((item, i) => (
                  <ScrollReveal key={item.label} delay={i * 0.1}>
                    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                      <div className="w-10 h-10 rounded-xl bg-amber-600/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-amber-600" size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                        <p className="text-slate-700 font-medium text-sm whitespace-pre-line">{item.value}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Service Times */}
              <ScrollReveal delay={0.2}>
                <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <HiClock className="text-amber-600" size={18} />
                    <h4 className="font-semibold text-slate-800">Service Times</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      { name: 'Sunday Worship', time: '10:00 AM' },
                      { name: 'Midweek Service', time: 'TBA' },
                      { name: 'Prayer Meeting', time: 'TBA' },
                      { name: 'Bible Study', time: 'TBA' },
                    ].map(s => (
                      <li key={s.name} className="flex justify-between text-sm">
                        <span className="text-slate-500">{s.name}</span>
                        <span className="text-amber-600 font-semibold">{s.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Socials */}
              <ScrollReveal delay={0.3}>
                <div className="flex items-center gap-3">
                  {[
                    { Icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
                    { Icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
                    { Icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
                    { Icon: FaWhatsapp, href: '#', label: 'WhatsApp', color: 'hover:bg-green-600' },
                  ].map(({ Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={`w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 hover:text-white ${color} transition-all duration-200`}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left">
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Send Us a Message</h3>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-5 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm flex items-center gap-2"
                    >
                      ✅ Message sent! We'll get back to you soon. God bless you!
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                        { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                      ].map(f => (
                        <div key={f.name}>
                          <label className="block text-sm font-medium text-slate-600 mb-1.5">{f.label}</label>
                          <input
                            type={f.type}
                            name={f.name}
                            value={form[f.name]}
                            onChange={handleChange}
                            placeholder={f.placeholder}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all text-slate-800 bg-slate-50"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1.5">Phone (Optional)</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 95822 71412"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all text-slate-800 bg-slate-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1.5">Subject</label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all text-slate-800 bg-slate-50"
                        >
                          <option value="">Select a topic</option>
                          <option>General Inquiry</option>
                          <option>Plan a Visit</option>
                          <option>Pastoral Counseling</option>
                          <option>Ministry Involvement</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-1.5">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all text-slate-800 bg-slate-50 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-amber-600 text-white font-bold text-sm hover:bg-amber-500 transition-all duration-200 shadow-lg shadow-amber-600/25 hover:scale-[1.01] transform"
                    >
                      Send Message ✉️
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Map Placeholder */}
          <ScrollReveal delay={0.2}>
            <div className="mt-14 rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-72">
              <iframe 
                src="https://maps.google.com/maps?q=Faith%20Warriors%20Fellowship,%20Noida&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
