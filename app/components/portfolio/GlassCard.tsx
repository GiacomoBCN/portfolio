import React from "react";
import { motion } from "framer-motion";

export default function GlassCard({ 
  children, 
  className = "", 
  hover = true,
  delay = 0 
}: { 
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`glass rounded-xl p-6 transition-all duration-300 ${
        hover ? "glass-hover cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}