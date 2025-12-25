import { motion } from 'framer-motion';
import couple1 from '@/assets/couple-1.jpg';
import couple2 from '@/assets/couple-2.jpg';
import couple3 from '@/assets/couple-3.jpg';
import couple4 from '@/assets/couple-4.jpg';
import couple5 from '@/assets/couple-5.jpg';
import couple6 from '@/assets/couple-6.jpg';

const photos = [
  { src: couple1, alt: 'Our beautiful moment 1', rotate: -3 },
  { src: couple2, alt: 'Our beautiful moment 2', rotate: 2 },
  { src: couple3, alt: 'Our beautiful moment 3', rotate: -2 },
  { src: couple4, alt: 'Our beautiful moment 4', rotate: 3 },
  { src: couple5, alt: 'Our beautiful moment 5', rotate: -1 },
  { src: couple6, alt: 'Our beautiful moment 6', rotate: 2 },
];

const PhotoCollage = () => {
  return (
    <section className="py-20 px-4 bg-theme-blue/5 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-8xl">🎄</div>
        <div className="absolute bottom-20 right-20 text-8xl">🎄</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-3xl">🌻</span>
            <span className="text-theme-gold text-4xl">∞</span>
            <span className="text-3xl">🌷</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-script text-theme-blue">
            Our Precious Moments
          </h2>
          <p className="mt-4 text-muted-foreground font-serif text-lg">
            Every moment with you is a treasure I hold close to my heart
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: photo.rotate * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className="relative group"
            >
              {/* Polaroid Style Frame */}
              <div className="bg-theme-cream p-3 pb-12 rounded-sm shadow-card hover:shadow-glow transition-all duration-300">
                <div className="aspect-square overflow-hidden rounded-sm">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Polaroid Caption Area */}
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="text-theme-blue/60 font-script text-lg">
                    Us 💕
                  </span>
                </div>

                {/* Decorative Pin */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-theme-blue rounded-full shadow-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-theme-cream rounded-full"></div>
                </div>
              </div>

              {/* Corner Decorations on Hover */}
              <div className="absolute -top-2 -right-2 text-xl opacity-0 group-hover:opacity-100 transition-opacity">
                🌻
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 mt-12"
        >
          <span className="text-2xl">🌻</span>
          <span className="text-theme-gold text-3xl">∞</span>
          <span className="text-theme-blue font-script text-2xl">Forever Together</span>
          <span className="text-theme-gold text-3xl">∞</span>
          <span className="text-2xl">🌷</span>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoCollage;