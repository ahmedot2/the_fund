'use client';
import { motion } from 'framer-motion';
import MotionWrap from '../shared/MotionWrap';
import AnimatedDonutChart from '@/components/charts/AnimatedDonutChart';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 13 } },
};

const AllocationSection = () => {
  return (
    <MotionWrap className="bg-muted/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground">
            Deploying Capital with Precision and Strategic Foresight.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Our capital allocation strategy is designed for balanced growth, combining high-potential venture investments with stable, income-generating assets to manage risk and maximize returns across market cycles.
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <AnimatedDonutChart />
        </motion.div>
      </div>
    </MotionWrap>
  );
};

export default AllocationSection;
