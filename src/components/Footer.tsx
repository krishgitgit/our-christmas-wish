import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-theme-blue py-12 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-10 text-4xl">🌻</div>
        <div className="absolute top-4 right-10 text-4xl">🌷</div>
        <div className="absolute bottom-4 left-1/4 text-3xl">🌷</div>
        <div className="absolute bottom-4 right-1/4 text-3xl">🌻</div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Main Message */}
        <h3 className="text-3xl md:text-5xl font-script text-theme-cream mb-6">
          Merry Christmas, My Love
        </h3>

        {/* Symbols */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-2xl">🌻</span>
          <span className="text-theme-gold text-3xl">∞</span>
          <span className="text-2xl">🌷</span>
          <span className="text-2xl">❄️</span>
          <span className="text-2xl">🎄</span>
        </div>

        {/* Countdown Reminder */}
        <p className="text-theme-cream/80 font-serif text-lg mb-4">
          Counting down every second until December 8th, 2027
        </p>

        {/* Love Declaration */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-theme-cream/10 rounded-full backdrop-blur-sm">
          <span>🌻</span>
          <span className="text-theme-cream font-script text-xl">Forever Yours</span>
          <span className="text-theme-gold">∞</span>
          <span>🌷</span>
        </div>

        {/* Christmas Decorations */}
        <div className="mt-8 flex justify-center gap-2">
          {['❄️', '🎁', '🎄', '⭐', '🔔', '🎀', '❄️'].map((emoji, index) => (
            <motion.span
              key={index}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity,
              }}
              className="text-xl"
            >
              {emoji}
            </motion.span>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-8 text-theme-cream/60 text-sm font-serif">
          Made with ❤️ for the most beautiful person in my life
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;