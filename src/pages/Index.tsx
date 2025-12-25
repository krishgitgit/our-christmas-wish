import { Helmet } from 'react-helmet-async';
import Snowfall from '@/components/Snowfall';
import FloatingSymbols from '@/components/FloatingSymbols';
import HeroSection from '@/components/HeroSection';
import LoveNote from '@/components/LoveNote';
import PhotoCollage from '@/components/PhotoCollage';
import CoverSection from '@/components/CoverSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Our Love Story | Counting Down to December 8th, 2027</title>
        <meta name="description" content="A special Christmas countdown to our big day. With love, sunflowers, and infinite devotion." />
      </Helmet>

      {/* Animated Snowfall */}
      <Snowfall />
      
      {/* Floating Symbols */}
      <FloatingSymbols />

      {/* Main Content */}
      <main className="relative">
        {/* Hero with Countdown */}
        <HeroSection />

        {/* Love Note Section */}
        <LoveNote />

        {/* Photo Collage */}
        <PhotoCollage />

        {/* Cover Photo and PDF Download */}
        <CoverSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Index;
