import ScrollReveal from './ScrollReveal';

const SectionHeader = ({
  label,
  title,
  subtitle,
  light = false,
  center = true,
}) => {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {label && (
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-[0.2em] uppercase rounded-full bg-amber-600/10 text-amber-500 border border-amber-500/30">
            {label}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className={`font-heading text-4xl md:text-5xl font-bold leading-tight mb-4 ${
            light ? 'text-white' : 'text-slate-900'
          }`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <div className={`gold-divider ${center ? 'mx-auto' : ''} mb-5`} />
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p
            className={`text-lg max-w-2xl leading-relaxed ${
              center ? 'mx-auto' : ''
            } ${light ? 'text-slate-300' : 'text-slate-600'}`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
};

export default SectionHeader;
