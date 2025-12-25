import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import coverPhoto from '@/assets/cover-photo.jpg';

const CoverSection = () => {
  const handleDownload = () => {
    // Create a dummy PDF download - in real usage, link to an actual PDF
    const link = document.createElement('a');
    link.href = coverPhoto; // For demo, downloading the cover image
    link.download = 'our-love-story.pdf';
    link.click();
  };

  return (
    <section className="py-20 px-4 bg-gradient-snow relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-6xl opacity-20">🎄</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20">🎄</div>
        <div className="absolute top-1/2 right-10 text-4xl opacity-20">🌻</div>
        <div className="absolute top-1/3 left-10 text-4xl opacity-20">🧿</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-script text-christmas-red">
            Our Story
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span>🌻</span>
            <span className="text-christmas-gold text-2xl">∞</span>
            <span>🧿</span>
          </div>
        </motion.div>

        {/* Cover Photo and Download Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Cover Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card group">
              <img
                src={coverPhoto}
                alt="Our beautiful cover photo"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-christmas-red/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 text-2xl animate-pulse-glow">🌻</div>
              <div className="absolute top-4 right-4 text-2xl animate-pulse-glow">🌻</div>
              <div className="absolute bottom-4 left-4 text-xl">🧿</div>
              <div className="absolute bottom-4 right-4 text-christmas-gold text-3xl">∞</div>
            </div>

            {/* Frame Decoration */}
            <div className="absolute -inset-2 border-4 border-christmas-gold/30 rounded-2xl -z-10"></div>
            <div className="absolute -inset-4 border-2 border-christmas-red/20 rounded-3xl -z-20"></div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="bg-card p-8 rounded-2xl shadow-card border border-christmas-red/10">
              {/* Decorative Header */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <span className="text-3xl">📖</span>
                <h3 className="text-2xl md:text-3xl font-script text-christmas-red">
                  Download Our Memories
                </h3>
              </div>

              <p className="text-muted-foreground font-serif text-lg mb-8 leading-relaxed">
                Take a piece of our love story with you. This special collection 
                captures our most cherished moments together, wrapped in the magic 
                of the holiday season.
              </p>

              {/* Symbols Row */}
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <span className="text-2xl">🌻</span>
                <span className="text-christmas-gold text-xl">∞</span>
                <span className="text-2xl">🧿</span>
                <span className="text-xl">❤️</span>
                <span className="text-2xl">🎄</span>
              </div>

              {/* Download Button */}
              <Button
                onClick={handleDownload}
                size="lg"
                className="w-full lg:w-auto bg-christmas-red hover:bg-christmas-red-light text-christmas-cream shadow-christmas hover:shadow-glow transition-all duration-300 font-serif text-lg px-8 py-6 rounded-xl group"
              >
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
                Download PDF
                <span className="ml-2">📥</span>
              </Button>

              {/* Decorative Footer */}
              <div className="mt-8 pt-6 border-t border-christmas-gold/20">
                <p className="text-sm text-muted-foreground font-serif italic">
                  "Every love story is beautiful, but ours is my favorite." 
                  <span className="ml-2">💕</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoverSection;
