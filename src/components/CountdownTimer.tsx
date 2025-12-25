import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const targetDate = new Date('2027-12-08T00:00:00');
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeBlocks.map((block, index) => (
        <motion.div
          key={block.label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-xl bg-theme-cream/10 backdrop-blur-sm border border-theme-gold/30 flex items-center justify-center shadow-glow">
              <motion.span
                key={block.value}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-3xl md:text-5xl font-bold text-theme-cream font-serif"
              >
                {String(block.value).padStart(2, '0')}
              </motion.span>
            </div>
            <div className="absolute -top-2 -right-2 text-lg">
              {index % 2 === 0 ? '🌻' : '🌷'}
            </div>
          </div>
          <span className="mt-3 text-sm md:text-base text-theme-gold-light uppercase tracking-widest font-serif">
            {block.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;