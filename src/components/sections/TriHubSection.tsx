'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Cpu, Crown } from 'lucide-react';
import MotionWrap from '../shared/MotionWrap';

const hubData = [
  {
    icon: Crown,
    title: 'Doha (QIA)',
    subtitle: 'Sovereign Foundation & Capital',
    description: 'The institutional anchor providing the long-term, patient sovereign capital and strategic mandate.',
    position: 'top',
  },
  {
    icon: ShieldCheck,
    title: 'Dubai (DIFC)',
    subtitle: 'Legal & Governance',
    description: 'A robust, internationally-aligned regulatory framework providing the tax efficiency and credibility needed to attract institutional capital.',
    position: 'left',
  },
  {
    icon: Cpu,
    title: 'Cairo',
    subtitle: 'Operations & Investment',
    description: 'A deep talent pool of 350,000+ IT professionals and a top regional startup ecosystem.',
    position: 'right',
  },
];

const HubCard = ({ hub, progress, range }: { hub: any; progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const scale = useTransform(progress, range, [0.8, 1]);
  
  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <Card className="w-[45%] lg:w-1/3 shadow-2xl border-2 border-primary/20 bg-background/80 backdrop-blur-sm">
        <CardHeader className="items-center text-center">
          <hub.icon className="w-10 h-10 text-primary mb-2" />
          <CardTitle className="font-headline text-lg">{hub.title}</CardTitle>
          <CardDescription className="text-sm font-bold">{hub.subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="text-center text-sm text-muted-foreground px-4 pb-4">
          {hub.description}
        </CardContent>
      </Card>
    </motion.div>
  )
}

const TriHubSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Animate the headline
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  // Animate the connecting lines
  const line1Opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const line1PathLength = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const line2Opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const line2PathLength = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  return (
    <MotionWrap ref={targetRef} className="h-[300vh] bg-muted/30">
      <div className="sticky top-24 left-0 w-full h-screen overflow-hidden">
        
        <motion.div style={{ opacity: headlineOpacity }} className="text-center mb-16 absolute top-0 left-0 right-0">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground">
            The Tri-Hub Model: Sovereign Foundation, Dual Execution
          </h2>
        </motion.div>

        <div className="relative w-full h-full">
            {/* Cards */}
            <HubCard hub={hubData[0]} progress={scrollYProgress} range={[0.05, 0.25]} />
            <HubCard hub={hubData[1]} progress={scrollYProgress} range={[0.35, 0.55]} />
            <HubCard hub={hubData[2]} progress={scrollYProgress} range={[0.65, 0.85]} />
            
            {/* SVG Lines in the background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex items-center justify-center">
              <svg width="600" height="400" viewBox="0 0 600 400" className="max-w-4xl opacity-50">
                  {/* Line from Doha area to Dubai Area */}
                   <motion.path 
                    d="M 300 100 L 150 300" 
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="2" 
                    style={{ opacity: line1Opacity, pathLength: line1PathLength }}
                    />
                   {/* Line from Doha area to Cairo Area */}
                   <motion.path 
                    d="M 300 100 L 450 300" 
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="2"
                    style={{ opacity: line1Opacity, pathLength: line1PathLength }}
                     />
                   {/* Line connecting Dubai and Cairo */}
                   <motion.path 
                    d="M 160 310 L 440 310" 
                    fill="none" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth="1.5"
                    strokeDasharray="4 4" 
                    style={{ opacity: line2Opacity, pathLength: line2PathLength }}
                    />
              </svg>
            </div>
        </div>

      </div>
    </MotionWrap>
  );
};

export default TriHubSection;