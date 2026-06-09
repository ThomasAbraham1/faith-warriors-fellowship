import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold tracking-wide rounded-full transition-all duration-300 cursor-pointer border-2 ';

  const variants = {
    primary:
      'bg-amber-600 border-amber-600 text-white hover:bg-amber-500 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-600/30',
    secondary:
      'bg-transparent border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white hover:shadow-lg hover:shadow-amber-500/20',
    white:
      'bg-white border-white text-navy-800 hover:bg-cream-100 hover:shadow-lg',
    ghost:
      'bg-transparent border-transparent text-amber-400 hover:text-amber-300 hover:border-amber-400/30',
  };

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
