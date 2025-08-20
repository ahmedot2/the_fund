'use client';
import { motion } from 'framer-motion';
import MotionWrap from '../shared/MotionWrap';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const assetClasses = [
  {
    title: 'Artificial Intelligence',
    video: '/ai-background.mp4',
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
    video: '/quantum-background.mp4',
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
    video: '/crypto-background.mp4',
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

const AssetClassDeepDive = () => {
    
  return (
    <MotionWrap className="bg-muted/30">
        <div className="text-center mb-16">
            <motion.h2 
                className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                A Deep Dive into the Frontier Technologies
            </motion.h2>
        </div>

        <div className="space-y-24">
            {assetClasses.map((asset, index) => (
                <motion.div 
                    key={index}
                    className="relative rounded-xl overflow-hidden"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {asset.video && (
                        <>
                            <div className="absolute inset-0 z-0">
                                <video
                                    src={asset.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/50 z-[1]"></div>
                        </>
                    )}
                    <div className="relative z-[2] p-8 md:p-12">
                        <motion.h3 
                            className={`font-headline text-4xl mb-12 text-center ${asset.video ? 'text-white' : 'text-foreground'}`}
                            variants={cardVariants}
                        >
                            {asset.title}
                        </motion.h3>
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            variants={containerVariants}
                        >
                            {asset.data.map((item, itemIndex) => (
                            <motion.div
                                key={itemIndex}
                                variants={cardVariants}
                                whileHover={{ scale: 1.03, y: -5, transition: { type: 'spring', stiffness: 300 } }}
                            >
                                <Card className={`h-full border-transparent hover:border-primary/30 shadow-md transition-all duration-300 ${asset.video ? 'bg-background/10 text-white border-white/20 hover:border-white/50' : 'bg-background/50'}`}>
                                <CardHeader>
                                    <CardTitle className={`text-lg font-body font-semibold ${asset.video ? 'text-white' : ''}`}>{item.headline}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className={`${asset.video ? 'text-white/80' : 'text-muted-foreground'} text-sm leading-relaxed`}>{item.body}</p>
                                </CardContent>
                                </Card>
                            </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </div>
    </MotionWrap>
  );
};

export default AssetClassDeepDive;
