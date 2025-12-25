import { motion } from 'framer-motion';
import coverPhoto from '@/assets/cover-photo.jpg';

const CoverSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-snow relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-6xl opacity-20">🎄</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20">🎄</div>
        <div className="absolute top-1/2 right-10 text-4xl opacity-20">🌻</div>
        <div className="absolute top-1/3 left-10 text-4xl opacity-20">🌷</div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-script text-theme-blue">
            Our Story
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span>🌻</span>
            <span className="text-theme-gold text-2xl">∞</span>
            <span>🌷</span>
          </div>
        </motion.div>

        {/* Cover Photo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-card group">
            <img
              src={coverPhoto}
              alt="Our beautiful cover photo"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-theme-blue/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 text-2xl animate-pulse-glow">🌻</div>
            <div className="absolute top-4 right-4 text-2xl animate-pulse-glow">🌷</div>
            <div className="absolute bottom-4 left-4 text-xl">🌷</div>
            <div className="absolute bottom-4 right-4 text-theme-gold text-3xl">∞</div>
          </div>

          {/* Frame Decoration */}
          <div className="absolute -inset-2 border-4 border-theme-gold/30 rounded-2xl -z-10"></div>
          <div className="absolute -inset-4 border-2 border-theme-blue/20 rounded-3xl -z-20"></div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-lg text-muted-foreground font-serif italic">
            "Every love story is beautiful, but ours is my favorite." 
            <span className="ml-2">💕</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoverSection;