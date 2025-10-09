import React from "react";
import GlassCard from "./GlassCard";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({
  role,
  title,
  company,
  timeframe,
  description,
  metrics = [],
  tags = [],
  link,
  image,
  delay = 0,
}: {
  role: string;
  title: string;
  company: string;
  timeframe: string;
  description: string;
  metrics?: { value: string; label: string }[];
  tags?: string[];
  link?: string;
  image?: string;
  delay?: number;
}) {
  return (
    <GlassCard hover={true} delay={delay}>
      <div className="flex flex-col h-full">
        {/* Project Image */}
        {image && (
          <div className="mb-6 -mx-6 -mt-6 overflow-hidden rounded-t-xl">
            <div className="relative aspect-video overflow-hidden group/image">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        )}

        <div className="mb-4">
          <span className="text-xs uppercase tracking-wider text-[#0066ff] font-semibold">
            {role}
          </span>
          <h3 className="text-2xl font-bold text-white mt-2 mb-1">{title}</h3>
          <p className="text-sm text-[#94a3b8]">
            {company}
            {timeframe && ` • ${timeframe}`}
          </p>
        </div>

        <p className="text-[#cbd5e1] mb-6 flex-1">{description}</p>

        {metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-[rgba(255,255,255,0.08)]">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#0066ff] mb-1">
                  {metric.value}
                </div>
                <div className="text-xs text-[#94a3b8] leading-tight">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs glass rounded-full border border-[#0066ff] text-[#cbd5e1]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {link && (
          <a
            href={link}
            className="inline-flex items-center gap-2 text-[#0066ff] hover:text-[#00d4ff] transition-colors mt-auto group"
          >
            <span className="font-semibold">View Case Study</span>
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        )}
      </div>
    </GlassCard>
  );
}
