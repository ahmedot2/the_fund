'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import MotionWrap from '../shared/MotionWrap';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useRef } from 'react';

const assetClasses = [
  {
    title: 'Artificial Intelligence',
    data: [
      {
        headline: 'Market Size & Growth',
        body: 'The global AI market was valued at USD 233.46 billion in 2024 and is projected to reach USD 1.77 trillion by 2032, with a CAGR of 29.20%.',
      },
      {
        headline: 'Key Trends & Drivers',
        body: 'Investment is driven by a "computational arms race," the rise of autonomous agents, and the convergence of AI with other technologies.',
      },
      {
        headline: 'Risks',
        body: 'Regulatory risk is paramount, with frameworks like the EU\'s "AI Act" impacting development and investment.',
      },
    ],
  },
  {
    title: 'Quantum Computing',
    data: [
      {
        headline: 'Market Size & Growth',
        body: 'The global market is projected to grow from USD 1.51 billion in 2025 to USD 11.94 billion by 2033 (CAGR of 29.5%). The "AI in Quantum Computing" sub-sector will reach USD 4.2 billion by 2033 (CAGR of 33.2%).',
      },
      {
        headline: 'Key Trends & Drivers',
        body: 'Advancements in hardware are leading to more fault-tolerant systems with applications in finance, pharmaceuticals, and logistics.',
      },
      {
        headline: 'Risks',
        body: 'Investments are inherently long-term and speculative, facing risks of technical uncertainty and talent scarcity.',
      },
    ],
  },
  {
    title: 'Cryptocurrency / Blockchain',
    data: [
      {
        headline: 'Market Size & Growth',
        body: 'The Middle East market reached USD 110.27 billion in 2024 and is expected to grow to over USD 234 billion by 2033 (CAGR of 8.74%). The UAE alone recorded USD 34 billion in crypto inflows in the last year.',
      },
      {
        headline: 'Key Trends & Drivers',
        body: 'Growth is driven by institutional adoption, decentralized finance (DeFi), and increasing recognition of digital assets as a feasible investment category.',
      },
      {
        headline: 'Risks',
        body: 'The primary risk is regulatory uncertainty due to the lack of a unified global framework.',
      },
    ],
  },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.8 } 
    },
  };


type AssetFeatureProps = {
    title: string;
    data: { headline: string; body: string }[];
    opacity: any;
  };
  
const AssetFeature = ({ title, data, opacity }: AssetFeatureProps) => {
    return (
        <motion.div style={{ opacity }} className="absolute inset-0">
            <div className="flex flex-col gap-8 h-full justify-center">
                <motion.h3 
                    className="font-headline text-4xl text-foreground"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {title}
                </motion.h3>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {data.map((item: any, itemIndex: number) => (
                    <motion.div
                        key={itemIndex}
                        variants={cardVariants}
                        whileHover={{ scale: 1.03, y: -5, transition: { type: 'spring', stiffness: 300 } }}
                    >
                        <Card className="h-full bg-background/50 border-transparent hover:border-primary/30 shadow-md transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="text-lg font-body font-semibold">{item.headline}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                        </CardContent>
                        </Card>
                    </motion.div>
                    ))}
                </motion.div>
            </div>
      </motion.div>
    );
};

const AssetClassDeepDive = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ['start start', 'end end'],
    });
  
    const aiOpacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
    const quantumOpacity = useTransform(scrollYProgress, [0.33, 0.58, 0.66], [0, 1, 0]);
    const cryptoOpacity = useTransform(scrollYProgress, [0.66, 0.9, 1], [0, 1, 1]);
    
  return (
    <MotionWrap className="bg-muted/30">
        <div ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className='w-full'>
                        <h2 className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground">
                            A Deep Dive into the Frontier Technologies
                        </h2>
                    </div>
                    <div className="relative h-[300px] lg:h-[400px] w-full">
                        <AssetFeature title={assetClasses[0].title} data={assetClasses[0].data} opacity={aiOpacity} />
                        <AssetFeature title={assetClasses[1].title} data={assetClasses[1].data} opacity={quantumOpacity} />
                        <AssetFeature title={assetClasses[2].title} data={assetClasses[2].data} opacity={cryptoOpacity} />
                    </div>
                </div>
            </div>
        </div>
    </MotionWrap>
  );
};

export default AssetClassDeepDive;
