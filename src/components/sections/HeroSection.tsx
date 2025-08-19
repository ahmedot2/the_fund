'use client';
import { motion } from 'framer-motion';
import ScrollIndicator from '@/components/shared/ScrollIndicator';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12, delay: 0.7 },
  },
};

const HeroSection = () => {
  return (
    <section className="relative flex h-screen min-h-[700px] w-full flex-col items-center justify-center overflow-hidden p-6">
      <motion.div
        className="grid place-items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-headline font-black text-6xl md:text-8xl lg:text-h1 text-foreground"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {'THE FUND'.split('').map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                },
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          className="mt-6 max-w-3xl font-body text-xl md:text-2xl text-foreground"
          variants={itemVariants}
        >
          A Global, Multi-Strategy Vehicle to Secure Future Alpha in Frontier Technologies
        </motion.h2>

        <motion.p className="mt-4 text-base text-muted-foreground" variants={itemVariants}>
          A Strategic Proposal to the Qatar Investment Authority
        </motion.p>
      </motion.div>
      <motion.div
        className="absolute bottom-6 w-full text-center text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <p>Presented by H.E. Sheikh Jabr Bin Jasim Bin Thani Al Thani | August 2025</p>
      </motion.div>
      <ScrollIndicator text="Discover the Proposal" />
    </section>
  );
};
export default HeroSection;
