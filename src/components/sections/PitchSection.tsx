'use client';
import { motion } from 'framer-motion';
import MotionWrap from '../shared/MotionWrap';

const PitchSection = () => {
  return (
    <>
      <MotionWrap className="text-center bg-background pb-0">
          <motion.div 
              className="relative z-[2] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
          >
              <h2 className="font-headline text-5xl md:text-7xl lg:text-h1 text-foreground">
                  THE PITCH
              </h2>
          </motion.div>
      </MotionWrap>
      <MotionWrap className="text-center bg-background !py-0 max-w-none">
          <div className="relative w-full h-[60vh] md:h-screen flex items-center justify-center">
              <video
                  src="/pitch-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
              />
          </div>
      </MotionWrap>
    </>
  );
};

export default PitchSection;
