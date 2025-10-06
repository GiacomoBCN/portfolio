"use client";
import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { ArrowLeft } from "lucide-react";
import GlassCard from "../components/portfolio/GlassCard";
import ProjectIntroCard from "../components/work/ProjectIntroCard";

export default function BackOffice() {
  // TODO: Technical scalability focused
  
  return (
    <div className="min-h-screen">
      <div className="fixed top-24 left-6 z-40">
        <Link
        href={createPageUrl("ProductWork")}
          className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-[#cbd5e1] hover:text-white transition-all"
        >
          <ArrowLeft size={20} />
          <span className="hidden md:inline">Back to Projects</span>
        </Link>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-400 mb-6">
            Home &gt; Product Work &gt; Back Office Unification
          </p>
          <div className="mb-4">
            <span className="text-xs uppercase tracking-wider text-blue-400">
              TECHNICAL LEADERSHIP · SCALABILITY
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Back Office Unification
          </h1>
          <p className="text-lg text-gray-400 mb-4">
            Product Designer & Front-End Developer · 2019-2022
          </p>
          <p className="text-xl text-gray-300 mb-8">
            Unified 15 client portals with shared CSS, reducing redundant work by 80%.
          </p>
        </div>
      </section>

      <ProjectIntroCard 
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
        title="Scaling Through Smart Architecture"
      >
        <p className="text-gray-300 leading-relaxed">
          Managing 15 separate client portals meant duplicating design and development work across every instance. Updates required changing 15 codebases, leading to inconsistency and wasted effort.
        </p>
        <p className="text-gray-300 leading-relaxed">
          By creating a shared CSS framework and component library, I unified the architecture across all portals while preserving client-specific branding. This reduced redundant work by 80% and enabled scalable updates across the entire platform ecosystem.
        </p>
      </ProjectIntroCard>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <GlassCard>
            <div className="text-center py-8">
              <Link
              href={createPageUrl("ProductWork")}
                className="px-8 py-4 bg-[#0066ff] rounded-xl text-white font-semibold hover:bg-[#0052cc] transition-all inline-block"
              >
                View All Projects
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}