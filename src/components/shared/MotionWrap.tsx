'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type MotionWrapProps = {
  children: React.ReactNode;
  className?: string;
};

const MotionWrap = ({ children, className }: MotionWrapProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cn("w-full max-w-7xl mx-auto py-24 sm:py-32 px-6 lg:px-8", className)}
    >
      {children}
    </motion.section>
  );
};

export default MotionWrap;
