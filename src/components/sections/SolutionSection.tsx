'use client';
import { motion } from 'framer-motion';
import MotionWrap from '../shared/MotionWrap';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Anchor, Globe, Layers } from 'lucide-react';

const pillars = [
  {
    icon: Anchor,
    title: 'Sovereign Capital',
    description: 'Direct QIA backing provides a stable, long-term capital base, differentiating the fund from LPs with shorter investment horizons.',
  },
  {
    icon: Globe,
    title: 'Geographic Arbitrage',
    description: 'A strategic presence in Doha, Dubai, and Cairo provides a unique vantage point to access Western, Eastern, and high-growth emerging markets.',
  },
  {
    icon: Layers,
    title: 'Multi-Strategy Mandate',
    description: 'The flexibility to move capital between liquid public markets and illiquid private ventures to maximize alpha generation.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const SolutionSection = () => {
  return (
    <MotionWrap>
      <div className="text-center mb-16">
        <motion.h2
          className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          "THE FUND": Bridging Venture Capital Agility with Sovereign Stability.
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Card
              className="h-full bg-background/50 border-2 border-transparent hover:border-primary/50 transition-colors duration-300 shadow-lg"
            >
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </MotionWrap>
  );
};

export default SolutionSection;
