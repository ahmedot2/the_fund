'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FinancialsSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Headline animation
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0]);

  // Metric animation
  const metricScale = useTransform(scrollYProgress, [0.1, 0.3, 0.45], [0.5, 1, 0.5]);
  const metricOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.45], [0, 1, 0]);

  // "The Ask" animation
  const askScale = useTransform(scrollYProgress, [0.5, 0.7], [0.5, 1]);
  const askOpacity = useTransform(scrollYProgress, [0.5, 0.7, 0.95], [0, 1, 1]);

  return (
    <section ref={targetRef} className="relative w-full h-[300vh] bg-background">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        <motion.h2
          style={{ opacity: headlineOpacity }}
          className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground"
        >
          A Disciplined Framework for Profitable Growth.
        </motion.h2>

        <motion.div
          style={{ scale: metricScale, opacity: metricOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <p className="font-headline font-black text-6xl md:text-8xl lg:text-h1 text-primary">
            4:1
          </p>
          <p className="text-xl md:text-2xl text-foreground mt-2">Target LTV:CAC Ratio</p>
          <p className="max-w-md text-muted-foreground mt-4">
            The industry benchmark for a sustainable and profitable business model.
          </p>
        </motion.div>

        <motion.div
          style={{ scale: askScale, opacity: askOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">The Ask</p>
          <p className="font-headline font-black text-6xl md:text-8xl lg:text-h1 text-foreground leading-none">
            $1 Billion
          </p>
          <p className="text-xl md:text-3xl lg:text-4xl text-foreground mt-4">Initial Investment</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialsSection;
