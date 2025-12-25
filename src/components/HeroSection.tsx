import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import christmasHero from '@/assets/christmas-hero.jpg';

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${christmasHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-theme-blue/60 backdrop-blur-[2px]"></div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 text-4xl md:text-5xl animate-pulse-glow">🌻</div>
      <div className="absolute top-8 right-8 text-4xl md:text-5xl animate-pulse-glow">🌷</div>
      <div className="absolute bottom-8 left-8 text-3xl md:text-4xl">🌷</div>
      <div className="absolute bottom-8 right-8 text-3xl md:text-4xl">🌻</div>
      <div className="absolute top-1/4 left-4 text-theme-gold text-4xl md:text-6xl animate-float">∞</div>
      <div className="absolute bottom-1/4 right-4 text-theme-gold text-4xl md:text-6xl animate-float" style={{ animationDelay: '2s' }}>∞</div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Christmas Decorations */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-4 mb-6"
        >
          <span className="text-3xl md:text-4xl">🎄</span>
          <span className="text-3xl md:text-4xl">⭐</span>
          <span className="text-3xl md:text-4xl">🎄</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-script text-theme-cream mb-4 drop-shadow-lg"
        >
          Our Special Day
        </motion.h1>

        {/* Subtitle with Symbols */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="text-2xl md:text-3xl">🌻</span>
          <span className="text-theme-gold text-3xl md:text-4xl">∞</span>
          <span className="text-theme-cream/90 font-serif text-lg md:text-xl">Forever Together</span>
          <span className="text-theme-gold text-3xl md:text-4xl">∞</span>
          <span className="text-2xl md:text-3xl">🌷</span>
        </motion.div>

        {/* Countdown Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-theme-cream/80 font-serif text-xl md:text-2xl mb-8"
        >
          Counting down to <span className="text-theme-gold font-semibold">December 8th, 2027</span>
        </motion.p>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity }
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-theme-cream/60 font-serif text-sm">Scroll Down</span>
            <div className="text-theme-gold text-2xl">↓</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;