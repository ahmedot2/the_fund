'use client';
import { motion } from 'framer-motion';
import MotionWrap from '../shared/MotionWrap';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const visions = [
  {
    title: 'Economic Diversification',
    body: 'Investing beyond traditional asset classes into the high-growth technology sectors of the future.',
  },
  {
    title: 'Technological Advancement',
    body: 'Positioning Qatar at the forefront of AI, quantum, and blockchain innovation.',
  },
  {
    title: 'Global Influence',
    body: 'Creating a world-class investment vehicle that enhances Qatar\'s position as a global financial and strategic hub.',
  },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

const VisionSection = () => {
  return (
    <MotionWrap>
      <div className="text-center mb-16">
        <motion.h2
          className="font-headline text-3xl md:text-4xl lg:text-h2 text-foreground"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          A Strategic Partnership to Drive Economic Diversification and Innovation.
        </motion.h2>
      </div>
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        >
        <Accordion type="single" collapsible className="w-full space-y-4">
          {visions.map((vision, index) => (
            <motion.div key={index} variants={cardVariants}>
              <AccordionItem value={`item-${index}`} className="border-b-0">
                <AccordionTrigger className="text-left font-headline text-xl md:text-2xl bg-muted/30 hover:bg-muted/60 p-6 rounded-lg data-[state=open]:bg-primary/10 data-[state=open]:text-primary transition-all duration-300">
                  {vision.title}
                </AccordionTrigger>
                <AccordionContent className="p-6 text-muted-foreground text-base leading-relaxed bg-muted/20 rounded-b-lg">
                  {vision.body}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </MotionWrap>
  );
};

export default VisionSection;
