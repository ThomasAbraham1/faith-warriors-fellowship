import { Link } from 'react-router-dom';
import { FaCross, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/beliefs', label: 'Our Beliefs' },
  { to: '/ministries', label: 'Ministries' },
  { to: '/sermons', label: 'Sermons' },
  { to: '/events', label: 'Events' },
  { to: '/give', label: 'Give' },
  { to: '/contact', label: 'Contact Us' },
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#080f1a' }} className="text-slate-300">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center">
                <FaCross className="text-white text-base" />
              </div>
              <div>
                <p className="text-white font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Faith Warriors Fellowship</p>
                <p className="text-amber-400 text-xs tracking-widest uppercase">Walking in Faith, Living in Victory</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              A community dedicated to raising disciples who walk in faith, demonstrate God's love, and impact their generation.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FaFacebook, href: '#', label: 'Facebook' },
                { icon: FaInstagram, href: '#', label: 'Instagram' },
                { icon: FaYoutube, href: '#', label: 'YouTube' },
                { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-white font-semibold mb-5 uppercase tracking-widest text-xs">Service Times</h4>
            <ul className="space-y-3">
              {[
                { day: 'Sunday Worship', time: '10:00 AM' },
                { day: 'Midweek Service', time: 'TBA' },
                { day: 'Prayer Meeting', time: 'TBA' },
                { day: 'Bible Study', time: 'TBA' },
              ].map(({ day, time }) => (
                <li key={day} className="flex justify-between items-start text-sm">
                  <span className="text-slate-400">{day}</span>
                  <span className="text-amber-400 font-medium ml-2 whitespace-nowrap">{time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <HiLocationMarker className="text-amber-500 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-slate-400">Pillar no -116, Bhangel,<br />Sector 102, Salarpur Khadar,<br />Noida, Uttar Pradesh 201304</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <HiPhone className="text-amber-500 flex-shrink-0" size={16} />
                <a href="tel:+919582271412" className="text-slate-400 hover:text-amber-400 transition-colors">+91 95822 71412</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <HiMail className="text-amber-500 flex-shrink-0" size={16} />
                <a href="mailto:info@faithwarriors.in" className="text-slate-400 hover:text-amber-400 transition-colors">info@faithwarriors.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Faith Warriors Fellowship. All rights reserved.
        </p>
        <p className="text-xs text-slate-600 italic">
          "For we walk by faith, not by sight." – 2 Corinthians 5:7
        </p>
      </div>
    </footer>
  );
};

export default Footer;
