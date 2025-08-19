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
    description: 'A deep talent pool of 350,000+ IT professionals and a top regional startup ecosystem. This is the engine for on-the-ground deal flow.',
  },
];

type HubId = 'doha' | 'dubai' | 'cairo';

const TriHubSection = () => {
  const [activeHub, setActiveHub] = useState<HubId>('doha');

  return (
    <MotionWrap className="flex flex-col">
      <div className="w-full text-center">
        <motion.h2
          className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          The Tri-Hub Model: Sovereign Foundation, Dual Execution
        </motion.h2>
      </div>
      
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-24 md:gap-32 lg:gap-48">
        {hubData.map((hub) => (
          <motion.div
            key={hub.id}
            onViewportEnter={() => setActiveHub(hub.id as HubId)}
            viewport={{ amount: 0.4, margin: "-40% 0px -40% 0px" }}
          >
            <motion.div
              className="flex flex-col items-center text-center"
              animate={{ opacity: activeHub === hub.id ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <hub.icon className="w-10 h-10 text-primary mb-4" />
              <p className="font-headline text-accent text-lg">{hub.subtitle}</p>
              <h3 className="font-headline text-3xl md:text-4xl text-foreground mt-2">{hub.title}</h3>
              <p className="text-muted-foreground md:text-lg mt-4 max-w-md">{hub.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </MotionWrap>
  );
};

export default TriHubSection;
