'use client';
import { motion } from 'framer-motion';
import MotionWrap from '../shared/MotionWrap';
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

const summaryPoints = [
  'A unique opportunity to capture value in the $30+ billion MENA fintech market.',
  'A robust Dual-Hub Model that mitigates risk while harnessing high-growth potential.',
  'A strategic alignment with the QIA\'s mission to secure the future for generations to come.',
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 13 },
  },
};

const ConclusionSection = () => {
  return (
    <MotionWrap className="text-center bg-muted/30">
      <motion.h2
        className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      >
        Investing Today for the Returns of Tomorrow.
      </motion.h2>

      <ul className="max-w-3xl mx-auto my-12 space-y-6 text-left">
        {summaryPoints.map((point, index) => (
          <motion.li key={index} className="flex items-start gap-4" variants={itemVariants}>
            <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <span className="text-lg text-muted-foreground">{point}</span>
          </motion.li>
        ))}
      </ul>
      
      <motion.div variants={itemVariants} className="my-12 p-8 border-2 border-dashed border-primary/50 rounded-lg bg-background">
          <p className="text-xl text-muted-foreground">Reiterated Ask</p>
          <p className="font-headline text-4xl md:text-5xl lg:text-h2 text-foreground mt-2">Formal Approval for the $1 Billion Initial Funding</p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="font-headline text-2xl text-foreground">Next Steps</h3>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Legal formalization, recruitment of key leadership, and operational setup of the hubs.
        </p>
      </motion.div>

      <motion.footer 
        className="mt-24 pt-12 border-t"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="font-headline text-5xl text-primary">THE FUND</p>
        <p className="mt-4 text-2xl text-foreground">Thank You.</p>
        <p className="mt-8 text-sm text-muted-foreground">
          Contact: Office of H.E. Sheikh Jabr Bin Jasim Bin Thani Al Thani
        </p>
      </motion.footer>
    </MotionWrap>
  );
};

export default ConclusionSection;
