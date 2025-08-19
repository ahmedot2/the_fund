'use client';
import { motion } from 'framer-motion';
import MotionWrap from '../shared/MotionWrap';

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.8 } 
  },
};

const FinancialsSection = () => {
  return (
    <MotionWrap className="bg-background text-center flex flex-col items-center justify-center gap-24">
      
      <motion.div variants={itemVariants} className="w-full">
        <h2 className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground">
          A Disciplined Framework for Profitable Growth.
        </h2>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full">
        <p className="font-headline font-black text-6xl md:text-8xl lg:text-h1 text-primary">
          4:1
        </p>
        <p className="text-xl md:text-2xl text-foreground mt-2">Target LTV:CAC Ratio</p>
        <p className="max-w-md mx-auto text-muted-foreground mt-4">
          The industry benchmark for a sustainable and profitable business model.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full">
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">The Ask</p>
        <p className="font-headline font-black text-6xl md:text-8xl lg:text-h1 text-foreground leading-none">
          $1 Billion
        </p>
        <p className="text-xl md:text-3xl lg:text-4xl text-foreground mt-4">Initial Investment</p>
      </motion.div>
      
    </MotionWrap>
  );
};

export default FinancialsSection;
