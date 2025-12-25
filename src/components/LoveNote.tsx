import { motion } from 'framer-motion';

const LoveNote = () => {
  return (
    <section className="min-h-screen bg-gradient-snow flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl">🌻</div>
        <div className="absolute bottom-10 right-10 text-9xl">🌻</div>
        <div className="absolute top-1/2 left-1/4 text-7xl text-christmas-gold">∞</div>
        <div className="absolute top-1/3 right-1/4 text-6xl">🧿</div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto relative"
      >
        {/* Christmas Card Style Container */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card relative overflow-hidden border-2 border-christmas-red/20">
          {/* Decorative Corner Elements */}
          <div className="absolute top-4 left-4 text-4xl animate-pulse-glow">🎄</div>
          <div className="absolute top-4 right-4 text-4xl animate-pulse-glow">🎄</div>
          <div className="absolute bottom-4 left-4 text-3xl">🌻</div>
          <div className="absolute bottom-4 right-4 text-3xl">🌻</div>
          
          {/* Gold Border Accent */}
          <div className="absolute inset-4 border-2 border-christmas-gold/20 rounded-2xl pointer-events-none"></div>

          <div className="relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center mb-8"
            >
              <span className="text-christmas-gold text-2xl">✨</span>
              <h2 className="text-4xl md:text-6xl font-script text-christmas-red mt-2">
                My Dearest Love
              </h2>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span>🌻</span>
                <span className="text-christmas-gold text-2xl">∞</span>
                <span>🧿</span>
              </div>
            </motion.div>

            {/* Love Note Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-6 text-center font-serif text-lg md:text-xl leading-relaxed text-foreground/90"
            >
              <p>
                This Christmas, I want you to know that you are the greatest gift 
                I've ever received. Like a sunflower always turning towards the sun, 
                my heart always turns to you. 🌻
              </p>
              
              <p>
                Our love, represented by the infinity symbol, knows no bounds and 
                will last forever. ∞ Every moment with you feels like magic, and 
                I cherish each one.
              </p>
              
              <p>
                Just as the Nazar protects against all harm, my love for you is 
                a shield that will always keep you safe and cherished. 🧿
              </p>

              <p>
                On December 8th, 2027, a new chapter of our beautiful story begins. 
                Until then, and forever after, know that you are my everything.
              </p>

              <motion.p
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-christmas-red font-script text-3xl md:text-4xl pt-4"
              >
                Forever & Always Yours ❤️
              </motion.p>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-christmas-red/10 rounded-full">
                <span>🌻</span>
                <span className="text-christmas-gold">∞</span>
                <span>🧿</span>
                <span className="text-christmas-red font-script text-xl">With All My Love</span>
                <span>🧿</span>
                <span className="text-christmas-gold">∞</span>
                <span>🌻</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Holly Decoration */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-4xl">
          🎀
        </div>
      </motion.div>
    </section>
  );
};

export default LoveNote;
