'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { year: 2024, value: 8.92 },
  { year: 2025, value: 10.71 },
  { year: 2026, value: 12.86 },
  { year: 2027, value: 15.44 },
  { year: 2028, value: 18.54 },
  { year: 2029, value: 22.27 },
  { year: 2030, value: 26.75 },
  { year: 2031, value: 31.00 },
  { year: 2032, value: 31.96 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background/80 backdrop-blur-sm p-2 shadow-sm">
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground">{label}</span>
          <span className="font-bold text-foreground">
            ${payload[0].value.toFixed(2)}B
          </span>
        </div>
      </div>
    );
  }
  return null;
};

const AnimatedLineChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
      className="h-[300px] md:h-[400px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
          <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}B`} />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '3 3' }} />
          <defs>
            <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 8, fill: 'hsl(var(--primary))', stroke: 'hsl(var(--background))', strokeWidth: 2 }}
            animationDuration={1500}
          />
          <ReferenceLine x={2024} stroke="hsl(var(--accent))" strokeDasharray="3 3" label={{ value: "$8.92B", fill: 'hsl(var(--muted-foreground))', fontSize: 12, position: 'insideTopLeft' }} />
          <ReferenceLine x={2032} stroke="hsl(var(--accent))" strokeDasharray="3 3" label={{ value: "$31.96B", fill: 'hsl(var(--muted-foreground))', fontSize: 12, position: 'insideTopRight' }} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default AnimatedLineChart;
