'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShieldCheck, Cpu, Crown } from 'lucide-react';
import MotionWrap from '../shared/MotionWrap';
import { cn } from '@/lib/utils';

const hubData = [
  {
    id: 'doha',
    icon: Crown,
    title: 'Doha (QIA)',
    subtitle: 'Sovereign Foundation & Capital',
    description: "The institutional anchor providing the long-term, patient sovereign capital and strategic mandate. This is the source of the fund's stability and global network access.",
  },
  {
    id: 'dubai',
    icon: ShieldCheck,
    title: 'Dubai (DIFC)',
    subtitle: 'Legal & Governance',
    description: 'A robust, internationally-aligned regulatory framework providing the tax efficiency and credibility needed to attract institutional capital. This hub acts as the regulatory shield.',
  },
  {
    id: 'cairo',
    icon: Cpu,
    title: 'Cairo',
    subtitle: 'Operations & Investment',
    description: 'A deep talent pool of 350,000+ IT professionals and a top regional startup ecosystem. This hub is the engine for on-the-ground deal flow.',
  },
];

type HubId = 'doha' | 'dubai' | 'cairo';

const SVGVisual = ({ activeHub }: { activeHub: HubId }) => {
    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
      };

    return (
        <div className="relative w-full max-w-sm h-[400px] lg:w-[400px] lg:h-[500px] mx-auto">
            {/* Hubs - Positioned with translate for precision */}
            <motion.div
                className="absolute"
                style={{ top: '2.5rem', left: '50%', translateX: '-50%' }}
                animate={{ opacity: activeHub === 'doha' ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4">
                    <Crown className="w-10 h-10 text-primary flex-shrink-0" />
                    <p className="font-headline text-lg">Doha</p>
                </div>
            </motion.div>
            <motion.div
                className="absolute"
                style={{ bottom: '2.5rem', left: '0' }}
                animate={{ opacity: activeHub === 'dubai' ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4">
                    <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0" />
                    <p className="font-headline text-lg">Dubai</p>
                </div>
            </motion.div>
            <motion.div
                className="absolute"
                 style={{ bottom: '2.5rem', right: '0' }}
                animate={{ opacity: activeHub === 'cairo' ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4">
                     <Cpu className="w-10 h-10 text-primary flex-shrink-0" />
                    <p className="font-headline text-lg">Cairo</p>
                </div>
            </motion.div>

             {/* SVG Lines */}
             <svg width="100%" height="100%" viewBox="0 0 400 500" className="absolute top-0 left-0 pointer-events-none">
                 {/* Doha to Dubai */}
                <motion.path 
                    d="M 200 80 V 250 L 50 430"
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="2"
                    variants={pathVariants}
                    animate={activeHub === 'dubai' || activeHub === 'cairo' ? 'visible' : 'hidden'}
                />
                 {/* Doha to Cairo */}
                <motion.path 
                    d="M 200 80 V 250 L 350 430"
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="2"
                    variants={pathVariants}
                    animate={activeHub === 'dubai' || activeHub === 'cairo' ? 'visible' : 'hidden'}
                />
                {/* Dubai to Cairo */}
                <motion.path 
                    d="M 70 450 H 330" 
                    fill="none" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth="1.5" 
                    strokeDasharray="5 5"
                    variants={pathVariants}
                    animate={activeHub === 'cairo' ? 'visible' : 'hidden'}
                 />
            </svg>
        </div>
    )
}


const TriHubSection = () => {
  const [activeHub, setActiveHub] = useState<HubId>('doha');

  return (
    <MotionWrap className="flex flex-col">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
        >
            <h2 className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground">
                The Tri-Hub Model: Sovereign Foundation, Dual Execution
            </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* LEFT: Sticky Visual */}
            <div className="hidden lg:flex items-start justify-center sticky top-24 h-screen">
                <SVGVisual activeHub={activeHub} />
            </div>

             {/* Mobile: Visual on top */}
             <div className="flex lg:hidden items-start justify-center mb-12">
                <SVGVisual activeHub={activeHub} />
            </div>

            {/* RIGHT: Scrolling Text Content */}
            <div className="flex flex-col gap-32 md:gap-48 lg:gap-64">
                {hubData.map((hub) => (
                    <motion.div
                        key={hub.id}
                        className="space-y-4"
                        onViewportEnter={() => setActiveHub(hub.id as HubId)}
                        viewport={{ amount: 0.5, margin: "-50% 0px -50% 0px" }}
                    >
                        <p className="font-headline text-accent text-lg">{hub.subtitle}</p>
                        <h3 className="font-headline text-3xl md:text-4xl text-foreground">{hub.title}</h3>
                        <p className="text-muted-foreground md:text-lg max-w-md">{hub.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </MotionWrap>
  );
};

export default TriHubSection;
