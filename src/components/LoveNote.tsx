import { motion } from 'framer-motion';

const LoveNote = () => {
  return (
    <section className="min-h-screen bg-gradient-snow flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl">🌻</div>
        <div className="absolute bottom-10 right-10 text-9xl">🌷</div>
        <div className="absolute top-1/2 left-1/4 text-7xl text-theme-gold">∞</div>
        <div className="absolute top-1/3 right-1/4 text-6xl">🌷</div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto relative"
      >
        {/* Handwritten Note Style Container */}
        <div 
          className="bg-theme-cream rounded-sm p-8 md:p-12 shadow-card relative overflow-hidden"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                transparent,
                transparent 31px,
                hsl(220 60% 25% / 0.1) 31px,
                hsl(220 60% 25% / 0.1) 32px
              )
            `,
            backgroundPosition: '0 20px',
          }}
        >
          {/* Paper texture effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent pointer-events-none"></div>
          
          {/* Tape decorations */}
          <div className="absolute -top-2 left-8 w-12 h-6 bg-theme-gold/40 rotate-[-5deg] rounded-sm"></div>
          <div className="absolute -top-2 right-8 w-12 h-6 bg-theme-gold/40 rotate-[5deg] rounded-sm"></div>
          
          {/* Corner flower decorations */}
          <div className="absolute bottom-4 left-4 text-2xl opacity-60">🌻</div>
          <div className="absolute bottom-4 right-4 text-2xl opacity-60">🌷</div>

          <div className="relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center mb-6"
            >
              <h2 className="text-4xl md:text-5xl font-handwritten text-theme-blue">
                My Dearest Love,
              </h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span>🌻</span>
                <span className="text-theme-gold text-2xl">∞</span>
                <span>🌷</span>
              </div>
            </motion.div>

            {/* Handwritten Love Note Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-5 font-handwritten text-2xl md:text-3xl leading-relaxed text-theme-blue-dark"
            >
              <p>
                This Christmas, I want you to know that you are the greatest gift 
                I've ever received. Like a sunflower always turning towards the sun, 
                my heart always turns to you. 🌻
              </p>
              
              <p>
                Our love, like the infinity symbol, knows no bounds and 
                will last forever. ∞ Every moment with you feels like magic, 
                and I cherish each one deeply.
              </p>
              
              <p>
                You are as beautiful and delicate as a tulip in spring, 
                bringing color and joy into every day of my life. 🌷
              </p>

              <p>
                On December 8th, 2027, a new chapter of our beautiful story begins. 
                Until then, and forever after, know that you are my everything.
              </p>

              <motion.p
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-theme-blue font-script text-4xl md:text-5xl pt-4 text-center"
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
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-theme-blue/10 rounded-full">
                <span>🌻</span>
                <span className="text-theme-gold">∞</span>
                <span className="text-theme-blue font-handwritten text-2xl">With All My Love</span>
                <span className="text-theme-gold">∞</span>
                <span>🌷</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Paper corner fold effect */}
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-theme-blue/20 to-transparent rounded-tl-xl"></div>
      </motion.div>
    </section>
  );
};

export default LoveNote;