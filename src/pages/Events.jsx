import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HiCalendar, HiClock, HiLocationMarker } from 'react-icons/hi';
import HeroSection from '../components/ui/HeroSection';
import SectionHeader from '../components/ui/SectionHeader';
import ScrollReveal from '../components/ui/ScrollReveal';

const events = [
  {
    title: 'Sunday Worship Service',
    date: 'Every Sunday',
    time: '10:30 AM',
    location: 'Main Auditorium',
    description: 'Join us every Sunday for an uplifting worship experience filled with praise, prayer, and the Word of God.',
    type: 'recurring',
    badge: 'Weekly',
    color: 'from-amber-500 to-amber-700',
  },
  {
    title: 'Midweek Bible Study',
    date: 'Every Wednesday',
    time: 'TBA',
    location: 'Main Hall',
    description: 'Dig deeper into God\'s Word every midweek as we study, discuss, and apply the scriptures to our daily lives.',
    type: 'recurring',
    badge: 'Weekly',
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Prayer Meeting',
    date: 'TBA',
    time: 'TBA',
    location: 'Prayer Room',
    description: 'An hour of focused, corporate intercession. Come and travail in prayer for your family, church, city, and nation.',
    type: 'recurring',
    badge: 'Regular',
    color: 'from-indigo-500 to-purple-700',
  },
  {
    title: 'Water Baptism Classes',
    date: 'Coming Soon',
    time: 'TBA',
    location: 'Church Hall',
    description: 'Preparing new believers for the waters of baptism — a public declaration of their faith in Jesus Christ.',
    type: 'special',
    badge: 'Special',
    color: 'from-teal-500 to-teal-700',
  },
  {
    title: 'Youth Gathering',
    date: 'Coming Soon',
    time: 'TBA',
    location: 'Youth Hall',
    description: 'An exciting gathering for youth — dynamic worship, relevant talks, games, and authentic community.',
    type: 'special',
    badge: 'Youth',
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Summer Camp',
    date: 'Coming Soon',
    time: 'TBA',
    location: 'TBA',
    description: 'An immersive camp experience for children and youth — worship, adventure, discipleship, and lifelong memories.',
    type: 'special',
    badge: 'Camp',
    color: 'from-green-500 to-emerald-700',
  },
  {
    title: 'Special Conference',
    date: 'Coming Soon',
    time: 'TBA',
    location: 'Main Auditorium',
    description: 'Powerful special services and conferences with invited speakers, powerful worship, and life-changing ministry.',
    type: 'special',
    badge: 'Conference',
    color: 'from-rose-500 to-red-700',
  },
];

const Events = () => {
  const recurring = events.filter(e => e.type === 'recurring');
  const special = events.filter(e => e.type === 'special');

  const EventCard = ({ event, i }) => (
    <ScrollReveal delay={i * 0.08}>
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100"
      >
        <div className={`h-3 bg-gradient-to-r ${event.color}`} />
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${event.color} text-white`}>
              {event.badge}
            </span>
          </div>
          <h3 className="font-bold text-slate-800 text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{event.title}</h3>
          <p className="text-slate-500 text-sm mb-4 leading-relaxed">{event.description}</p>
          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <HiCalendar className="text-amber-500 flex-shrink-0" size={14} />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <HiClock className="text-amber-500 flex-shrink-0" size={14} />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <HiLocationMarker className="text-amber-500 flex-shrink-0" size={14} />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );

  return (
    <div>
      <Helmet>
        <title>Events &amp; Gatherings — Faith Warriors Fellowship</title>
        <meta name="description" content="Stay updated with upcoming events at Faith Warriors Fellowship — Sunday worship services, midweek Bible study, prayer meetings, youth gatherings, and special conferences." />
        <link rel="canonical" href="https://faithwarriorsfellowship.org/events" />
      </Helmet>
      <HeroSection
        title="Events &"
        titleHighlight="Gatherings"
        subtitle="There's always something happening at Faith Warriors Fellowship. Find an event and come be part of what God is doing."
        minHeight="55vh"
        ctaPrimary={{ to: '/contact', label: 'Get in Touch' }}
      />

      <section className="section-pad" style={{ backgroundColor: '#FDFAF6' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Recurring" title="Regular Services" subtitle="Gather with us week after week for worship, prayer, and the Word." />
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {recurring.map((e, i) => <EventCard key={e.title} event={e} i={i} />)}
          </div>

          <SectionHeader label="Coming Up" title="Special Events" subtitle="Don't miss these special gatherings and events throughout the year." />
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {special.map((e, i) => <EventCard key={e.title} event={e} i={i} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
