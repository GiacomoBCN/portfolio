import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function ProjectListingCard({ 
  category,
  title,
  role,
  year,
  description,
  metrics = [],
  tags = [],
  slug
}: { 
  category: string;
  title: string;
  role: string;
  year: string;
  description: string;
  metrics?: { value: string; label: string; }[];
  tags?: string[];
  slug: string;
}) {
  return (
    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-blue-400/30 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] hover:-translate-y-2">
      {/* Category label */}
      <div className="text-xs uppercase tracking-wider text-blue-400 mb-3">
        {category}
      </div>
      
      {/* Project title */}
      <h3 className="text-2xl font-bold text-white mb-2">
        {title}
      </h3>
      
      {/* Meta info */}
      <p className="text-sm text-gray-400 mb-4">
        {role} · {year}
      </p>
      
      {/* Description */}
      <p className="text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>
      
      {/* Metrics row */}
      {metrics.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white/[0.03] rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-400">{metric.value}</div>
              <div className="text-xs text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>
      )}
      
      {/* Tech tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs bg-white/[0.05] border border-white/10 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* CTA link */}
      <Link 
      href={createPageUrl(slug)}
        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
      >
        View Case Study 
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
}