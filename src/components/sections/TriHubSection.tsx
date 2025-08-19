'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Cpu, Crown } from 'lucide-react';
import MotionWrap from '../shared/MotionWrap';

const TriHubSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // Step 1: Doha appears
  const dohaOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const dohaScale = useTransform(scrollYProgress, [0.1, 0.2], [0.9, 1]);

  // Step 2: Dubai and Cairo appear
  const pillarsOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const pillarsScale = useTransform(scrollYProgress, [0.25, 0.35], [0.95, 1]);

  // Step 3: Lines animation for Capital Flow
  const capitalLine1Path = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const capitalLine2Path = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const capitalTextOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  // Step 4: Lines animation for Execution Loop
  const executionLine1Path = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  const executionLine2Path = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const executionTextOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  return (
    <MotionWrap ref={targetRef} className="min-h-[175vh] bg-muted/30">
      <div className="sticky top-24 left-0 w-full">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground"
            style={{ opacity: dohaOpacity }}
          >
            The Tri-Hub Model: Sovereign Foundation, Dual Execution
          </motion.h2>
        </div>
        
        <div className="max-w-6xl mx-auto relative h-[600px]">
          {/* Doha Card */}
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[45%] lg:w-1/3 z-10"
            style={{ opacity: dohaOpacity, scale: dohaScale }}
          >
            <Card className="shadow-2xl border-2 border-primary/50 bg-background">
              <CardHeader className="items-center">
                <Crown className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="text-center font-headline text-lg">Doha (QIA)</CardTitle>
                <CardDescription className="text-sm font-bold">Sovereign Foundation & Capital</CardDescription>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                The institutional anchor providing the long-term, patient sovereign capital and strategic mandate. This is the source of the fund's stability and global network access.
              </CardContent>
            </Card>
          </motion.div>

          {/* Dubai Card */}
          <motion.div 
            className="absolute bottom-0 left-0 w-[45%] lg:w-1/3"
            style={{ opacity: pillarsOpacity, scale: pillarsScale }}
          >
            <Card className="shadow-2xl bg-background">
              <CardHeader className="items-center">
                <ShieldCheck className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="text-center font-headline text-lg">Dubai (DIFC)</CardTitle>
                 <CardDescription className="text-sm font-bold">Legal & Governance</CardDescription>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                 A robust, internationally-aligned regulatory framework providing the tax efficiency and credibility needed to attract institutional capital. This hub acts as the regulatory shield.
              </CardContent>
            </Card>
          </motion.div>

          {/* Cairo Card */}
          <motion.div 
            className="absolute bottom-0 right-0 w-[45%] lg:w-1/3"
            style={{ opacity: pillarsOpacity, scale: pillarsScale }}
          >
            <Card className="shadow-2xl bg-background">
              <CardHeader className="items-center">
                <Cpu className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="text-center font-headline text-lg">Cairo</CardTitle>
                <CardDescription className="text-sm font-bold">Operations & Investment</CardDescription>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                A deep talent pool of 350,000+ IT professionals and a top regional startup ecosystem. This hub is the engine for on-the-ground deal flow.
              </CardContent>
            </Card>
          </motion.div>
          
          {/* SVG Lines */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="none">
              {/* Sovereign Capital & Mandate Lines */}
              <motion.path d="M 600 180 V 380 L 200 450" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" style={{ pathLength: capitalLine1Path }} />
              <motion.path d="M 600 180 V 380 L 1000 450" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" style={{ pathLength: capitalLine2Path }} />
              <motion.text x="600" y="280" textAnchor="middle" fill="hsl(var(--foreground))" className="font-semibold text-base" style={{ opacity: capitalTextOpacity }}>
                Sovereign Capital & Mandate
              </motion.text>
              
              {/* Execution Loop Lines */}
              <motion.path d="M 270 510 C 450 580, 750 580, 930 510" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="5 5" style={{ pathLength: executionLine1Path }} />
              <motion.text x="600" y="565" textAnchor="middle" fill="hsl(var(--muted-foreground))" className="font-semibold text-sm" style={{ opacity: executionTextOpacity }}>
                Deal Flow & Growth
              </motion.text>

              <motion.path d="M 930 490 C 750 420, 450 420, 270 490" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="5 5" style={{ pathLength: executionLine2Path }} />
              <motion.text x="600" y="445" textAnchor="middle" fill="hsl(var(--muted-foreground))" className="font-semibold text-sm" style={{ opacity: executionTextOpacity }}>
                Governance & Compliance
              </motion.text>
            </svg>
          </div>

        </div>
      </div>
    </MotionWrap>
  );
};

export default TriHubSection;
