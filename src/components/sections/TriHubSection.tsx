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
        visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } },
      };

    const HubElement = ({ id, icon: Icon, title, x, y }: { id: HubId, icon: React.ElementType, title: string, x: number, y: number }) => (
        <motion.g 
            animate={{ opacity: activeHub === id ? 1 : 0.5 }} 
            transition={{ duration: 0.5 }}
        >
            <foreignObject x={x} y={y} width="150" height="60">
                <div className="flex items-center gap-3 text-foreground">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <span className="font-headline text-lg">{title}</span>
                </div>
            </foreignObject>
        </motion.g>
    );

    return (
        <div className="relative w-full max-w-md h-[450px] mx-auto">
             <svg width="100%" height="100%" viewBox="0 0 400 450" className="absolute top-0 left-0">
                {/* Hubs rendered inside SVG */}
                <HubElement id="doha" icon={Crown} title="Doha" x={140} y={10} />
                <HubElement id="dubai" icon={ShieldCheck} title="Dubai" x={20} y={380} />
                <HubElement id="cairo" icon={Cpu} title="Cairo" x={250} y={380} />

                 {/* SVG Lines */}
                 {/* Doha to Dubai */}
                <motion.path 
                    d="M 200 60 V 250 L 80 390"
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="2"
                    variants={pathVariants}
                    animate={activeHub === 'dubai' || activeHub === 'cairo' ? 'visible' : 'hidden'}
                />
                 {/* Doha to Cairo */}
                <motion.path 
                    d="M 200 60 V 250 L 320 390"
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="2"
                    variants={pathVariants}
                    animate={activeHub === 'dubai' || activeHub === 'cairo' ? 'visible' : 'hidden'}
                />
                {/* Dubai to Cairo */}
                <motion.path 
                    d="M 100 425 H 300" 
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
            {/* LEFT: Sticky Visual */}
            <div className="hidden lg:flex items-start justify-center sticky top-24 h-screen">
                <SVGVisual activeHub={activeHub} />
            </div>

             {/* Mobile: Visual on top */}
             <div className="flex lg:hidden items-start justify-center mb-12">
                <SVGVisual activeHub={activeHub} />
            </div>

            {/* RIGHT: Scrolling Text Content */}
            <div className="flex flex-col gap-24 md:gap-32 lg:gap-48">
                {hubData.map((hub) => (
                    <motion.div
                        key={hub.id}
                        className="space-y-4"
                        onViewportEnter={() => setActiveHub(hub.id as HubId)}
                        viewport={{ amount: 0.4, margin: "-40% 0px -40% 0px" }}
                         initial={{ opacity: 0.3 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ duration: 0.5 }}
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
