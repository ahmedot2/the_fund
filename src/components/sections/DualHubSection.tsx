'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Cpu } from 'lucide-react';

const DualHubSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start center', 'end end'],
  });

  const dubaiX = useTransform(scrollYProgress, [0, 0.3, 0.5], ['-100%', '0%', '0%']);
  const dubaiOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  
  const cairoX = useTransform(scrollYProgress, [0.3, 0.6, 0.8], ['100%', '0%', '0%']);
  const cairoOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  const line1PathLength = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const line2PathLength = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <section ref={targetRef} className="w-full min-h-[150vh] py-24 sm:py-32 px-6 lg:px-8 relative">
      <div className="sticky top-1/4 left-0 w-full">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
            className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground"
          >
            A Symbiotic Structure for Growth and Governance.
          </motion.h2>
        </div>
        <div className="max-w-5xl mx-auto relative h-[400px] flex items-center justify-between">
            {/* Hub Cards */}
            <motion.div style={{ x: dubaiX, opacity: dubaiOpacity }} className="w-2/5">
                <Card className="shadow-2xl">
                    <CardHeader className="items-center">
                        <ShieldCheck className="w-10 h-10 text-primary mb-2" />
                        <CardTitle className="text-center font-headline text-lg">Dubai (DIFC)<br/>Legal & Governance</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-sm text-muted-foreground">
                        A robust, internationally-aligned regulatory framework providing the tax efficiency and credibility needed to attract institutional capital. This hub acts as the regulatory shield.
                    </CardContent>
                </Card>
            </motion.div>
            <motion.div style={{ x: cairoX, opacity: cairoOpacity }} className="w-2/5">
                <Card className="shadow-2xl">
                    <CardHeader className="items-center">
                        <Cpu className="w-10 h-10 text-primary mb-2" />
                        <CardTitle className="text-center font-headline text-lg">Cairo<br/>Operations & Investment</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-sm text-muted-foreground">
                        A deep talent pool of 350,000+ IT professionals and a top regional startup ecosystem. This hub is the engine for on-the-ground deal flow.
                    </CardContent>
                </Card>
            </motion.div>

            {/* SVG Lines */}
            <div className="absolute top-0 left-0 w-full h-full">
                <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none">
                    <motion.path
                        d="M 400 150 Q 500 100 600 150"
                        fill="transparent"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeDasharray="0 1"
                        style={{ pathLength: line1PathLength }}
                    />
                    <motion.text
                        x="500"
                        y="120"
                        textAnchor="middle"
                        fill="hsl(var(--foreground))"
                        fontSize="14"
                        style={{ opacity: line1PathLength }}
                    >
                        Capital & Compliance
                    </motion.text>
                    
                    <motion.path
                        d="M 600 250 Q 500 300 400 250"
                        fill="transparent"
                        stroke="hsl(var(--accent))"
                        strokeWidth="2"
                        strokeDasharray="0 1"
                        style={{ pathLength: line2PathLength }}
                    />
                    <motion.text
                        x="500"
                        y="280"
                        textAnchor="middle"
                        fill="hsl(var(--foreground))"
                        fontSize="14"
                        style={{ opacity: line2PathLength }}
                    >
                        Value & Growth
                    </motion.text>
                </svg>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DualHubSection;
