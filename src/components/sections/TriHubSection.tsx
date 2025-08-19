'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Cpu, Crown } from 'lucide-react';
import MotionWrap from '../shared/MotionWrap';

const hubData = [
  {
    icon: Crown,
    title: 'Doha (QIA)',
    subtitle: 'Sovereign Foundation & Capital',
    description: 'The institutional anchor providing the long-term, patient sovereign capital and strategic mandate. This is the source of the fund\'s stability and global network access.',
  },
  {
    icon: ShieldCheck,
    title: 'Dubai (DIFC)',
    subtitle: 'Legal & Governance',
    description: 'A robust, internationally-aligned regulatory framework providing the tax efficiency and credibility needed to attract institutional capital. This hub acts as the regulatory shield.',
  },
  {
    icon: Cpu,
    title: 'Cairo',
    subtitle: 'Operations & Investment',
    description: 'A deep talent pool of 350,000+ IT professionals and a top regional startup ecosystem. This hub is the engine for on-the-ground deal flow.',
  },
];

const TextContent = ({ title, subtitle, description, progress, range }: any) => {
    const opacity = useTransform(progress, range, [0, 1, 1, 0]);
    const y = useTransform(progress, range, [30, 0, 0, -30]);

    return (
        <motion.div style={{ opacity, y }} className="space-y-4 h-full flex flex-col justify-center absolute inset-0">
            <p className="font-headline text-accent text-lg">{subtitle}</p>
            <h3 className="font-headline text-3xl md:text-4xl text-foreground">{title}</h3>
            <p className="text-muted-foreground md:text-lg max-w-md">{description}</p>
        </motion.div>
    )
}

const TriHubSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Headline animation
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  // SVG and Hub animations
  const dohaOpacity = useTransform(scrollYProgress, [0.05, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const dubaiOpacity = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);
  const cairoOpacity = useTransform(scrollYProgress, [0.65, 0.7], [0, 1]);

  const primaryPathLength = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const secondaryPathLength = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);

  return (
    <MotionWrap ref={targetRef} className="h-[350vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        <div className="absolute top-24 left-0 right-0 z-10 px-6">
            <motion.div style={{ opacity: headlineOpacity }} className="text-center">
                <h2 className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground">
                    The Tri-Hub Model: Sovereign Foundation, Dual Execution
                </h2>
            </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full items-center">
            {/* LEFT: SVG VISUAL */}
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-[500px] h-[400px]">
                    {/* HUBS */}
                    <motion.div style={{ opacity: dohaOpacity }} className="absolute top-0 left-1/2 -translate-x-1/2 text-center space-y-2">
                         <Crown className="w-12 h-12 text-primary mx-auto" />
                         <p className="font-headline text-lg">Doha</p>
                    </motion.div>
                    <motion.div style={{ opacity: dubaiOpacity }} className="absolute bottom-0 left-0 text-center space-y-2">
                         <ShieldCheck className="w-12 h-12 text-primary mx-auto" />
                         <p className="font-headline text-lg">Dubai</p>
                    </motion.div>
                    <motion.div style={{ opacity: cairoOpacity }} className="absolute bottom-0 right-0 text-center space-y-2">
                         <Cpu className="w-12 h-12 text-primary mx-auto" />
                         <p className="font-headline text-lg">Cairo</p>
                    </motion.div>
                    
                    {/* SVG LINES */}
                    <svg width="500" height="400" viewBox="0 0 500 400" className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        {/* Primary Lines */}
                        <motion.path d="M 250 60 V 150 L 60 340" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" style={{ pathLength: primaryPathLength }}/>
                        <motion.path d="M 250 60 V 150 L 440 340" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" style={{ pathLength: primaryPathLength }}/>
                        {/* Secondary Line */}
                        <motion.path d="M 80 360 H 420" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeDasharray="5 5" style={{ pathLength: secondaryPathLength }}/>
                    </svg>
                </div>
            </div>

            {/* RIGHT: TEXT CONTENT */}
            <div className="relative w-full h-full px-6 pt-48 lg:pt-0">
                <TextContent {...hubData[0]} progress={scrollYProgress} range={[0.1, 0.3, 0.4, 0.5]} />
                <TextContent {...hubData[1]} progress={scrollYProgress} range={[0.4, 0.6, 0.7, 0.8]} />
                <TextContent {...hubData[2]} progress={scrollYProgress} range={[0.7, 0.9, 1.0, 1.1]} />
            </div>
        </div>

      </div>
    </MotionWrap>
  );
};

export default TriHubSection;
