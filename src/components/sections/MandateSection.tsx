'use client';
import { motion } from 'framer-motion';
import MotionWrap from '../shared/MotionWrap';

const mandates = [
  {
    title: 'Primary Focus',
    description: 'A hyper-focused strategy targeting Series A and B funding rounds, moving away from speculative mega-deals toward proven business models.',
    highlight: 'Series A and B',
  },
  {
    title: 'Breakout Sub-Sectors',
    description: 'Prioritizing investments in Lending and Banking Infrastructure, which saw funding surges of 201% and 163% in 2024, respectively.',
    highlight: ['201%', '163%'],
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    initial={{ backgroundSize: '0% 100%' }}
    whileInView={{ backgroundSize: '100% 100%' }}
    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
    viewport={{ once: true, amount: 0.8 }}
    className="text-accent font-bold bg-no-repeat bg-bottom bg-gradient-to-r from-accent/30 to-accent/30"
  >
    {children}
  </motion.span>
);

const MandateSection = () => {
  return (
    <MotionWrap>
      <div className="text-center mb-16">
        <motion.h2
          className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          An "AI-First" Strategy Focused on High-Growth Fintech.
        </motion.h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-12">
        {mandates.map((mandate, index) => (
          <motion.div key={index} variants={itemVariants}>
            <h3 className="font-headline text-2xl md:text-3xl text-foreground mb-4">{mandate.title}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {mandate.description
                .split(new RegExp(`(${Array.isArray(mandate.highlight) ? mandate.highlight.join('|') : mandate.highlight})`, 'g'))
                .map((part, i) =>
                  (Array.isArray(mandate.highlight) ? mandate.highlight.includes(part) : part === mandate.highlight) ? (
                    <Highlight key={i}>{part}</Highlight>
                  ) : (
                    part
                  )
                )}
            </p>
          </motion.div>
        ))}
      </div>
    </MotionWrap>
  );
};

export default MandateSection;
