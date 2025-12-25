import { motion } from 'framer-motion';

const FloatingSymbols = () => {
  const symbols = [
    { emoji: '🌻', top: '10%', left: '5%', delay: 0 },
    { emoji: '🌻', top: '30%', right: '8%', delay: 1 },
    { emoji: '∞', top: '50%', left: '3%', delay: 2, isText: true },
    { emoji: '🧿', top: '70%', right: '5%', delay: 0.5 },
    { emoji: '🌻', top: '85%', left: '10%', delay: 1.5 },
    { emoji: '∞', top: '20%', right: '3%', delay: 2.5, isText: true },
    { emoji: '🧿', top: '45%', right: '2%', delay: 3 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {symbols.map((symbol, index) => (
        <motion.div
          key={index}
          className={`absolute text-3xl md:text-4xl ${symbol.isText ? 'text-christmas-gold font-bold' : ''}`}
          style={{
            top: symbol.top,
            left: symbol.left,
            right: symbol.right,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            delay: symbol.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="animate-pulse-glow inline-block">
            {symbol.emoji}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingSymbols;
