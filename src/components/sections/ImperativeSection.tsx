'use client';
import { motion } from 'framer-motion';
import AnimatedLineChart from '@/components/charts/AnimatedLineChart';
import SummarySuggester from '@/components/ai/SummarySuggester';
import MotionWrap from '../shared/MotionWrap';

const bodyText = "The global economic landscape is being reshaped by a \"computational arms race\" in AI and a seismic shift toward decentralized, digital systems. Within this transformation, the MENA region's maturing fintech ecosystem presents an unprecedented opportunity, projected to grow from USD 8.92 billion in 2024 to USD 31.96 billion by 2032. Legacy financial institutions are too slow to capture this value, creating a clear market gap for an agile, sovereign-backed, and technologically-focused investment vehicle.";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 13 } },
};

const ImperativeSection = () => {
  return (
    <MotionWrap className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground">
            Capitalizing on a Pivotal Moment in the MENA Financial Landscape.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {bodyText}
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="space-y-4 text-center">
          <AnimatedLineChart />
          <p className="text-lg font-semibold text-foreground">
            MENA Fintech Market Growth (<span className="text-primary">20.1% CAGR</span>)
          </p>
          <p className="text-sm text-muted-foreground">Source: Industry Analysis 2024</p>
        </motion.div>
      </div>
      <SummarySuggester originalText={bodyText} />
    </MotionWrap>
  );
};

export default ImperativeSection;
