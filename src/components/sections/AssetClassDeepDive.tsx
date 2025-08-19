'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MotionWrap from '../shared/MotionWrap';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

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

const AssetFeature = ({ title, data, progress, range }: any) => {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, range, [30, 0, 0, -30]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0">
      <div className="space-y-8">
        <h3 className="font-headline text-4xl text-foreground">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item: any, index: number) => (
            <motion.div
              key={index}
              custom={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 100 }}
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
        </div>
      </div>
    </motion.div>
  );
};

const AssetClassDeepDive = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <MotionWrap ref={targetRef} className="h-[300vh] bg-muted/30">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ opacity: sectionOpacity }} className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-full">
          {/* Left: Sticky Headline */}
          <div className="lg:col-span-1">
            <div className="sticky top-1/2 -translate-y-1/2">
              <h2 className="font-headline text-3xl md:text-4xl lg:text-h3 text-foreground">
                A Deep Dive into the Frontier Technologies
              </h2>
            </div>
          </div>

          {/* Right: Scrolling Content */}
          <div className="lg:col-span-2 relative h-[300px]">
            <AssetFeature {...assetClasses[0]} progress={scrollYProgress} range={[0.1, 0.3, 0.4, 0.5]} />
            <AssetFeature {...assetClasses[1]} progress={scrollYProgress} range={[0.4, 0.6, 0.7, 0.8]} />
            <AssetFeature {...assetClasses[2]} progress={scrollYProgress} range={[0.7, 0.9, 1.0, 1.1]} />
          </div>
        </motion.div>
      </div>
    </MotionWrap>
  );
};

export default AssetClassDeepDive;
