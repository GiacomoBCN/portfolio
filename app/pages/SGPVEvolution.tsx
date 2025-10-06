"use client";
import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { ArrowLeft, AlertCircle, User, TrendingUp, Calendar } from "lucide-react";
import OverviewCard from "../components/work/OverviewCard";
import GlassCard from "../components/portfolio/GlassCard";
import ProjectIntroCard from "../components/work/ProjectIntroCard";

export default function SGPVEvolution() {
  // TODO: Add complete content - merge PhoneGap + Flutter migration story
  
  return (
    <div className="min-h-screen">
      <div className="fixed top-24 left-6 z-40">
        <Link
        href={createPageUrl("ProductWork")}
          className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-[#cbd5e1] hover:text-white hover:border-[#0066ff] transition-all"
        >
          <ArrowLeft size={20} />
          <span className="hidden md:inline">Back to Projects</span>
        </Link>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-400 mb-6">
            Home &gt; Product Work &gt; SGPV Product Evolution
          </p>
          <div className="mb-4">
            <span className="text-xs uppercase tracking-wider text-blue-400">
              PRODUCT STRATEGY · B2B SAAS
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            SGPV Product Evolution
          </h1>
          <p className="text-lg text-gray-400 mb-4">
            Product Designer & Front-End Developer · 2019-2022
          </p>
          <p className="text-xl text-gray-300 mb-8">
            Led multi-year product evolution from PhoneGap to Flutter, serving 15 B2B clients with AI-powered features.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Flutter", "PhoneGap", "AI", "Mobile", "B2B"].map((tag, i) => (
              <span key={i} className="px-4 py-2 glass rounded-full text-sm text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ProjectIntroCard 
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
        title="Multi-Year B2B SaaS Transformation"
      >
        <p className="text-gray-300 leading-relaxed">
          SGPV's legacy PhoneGap application was showing its age with performance issues and limited functionality. As the company grew to serve 15 enterprise B2B clients, the technical debt became a barrier to innovation.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I led a strategic migration to Flutter while introducing AI-powered features, maintaining service continuity for all clients, and reducing task completion times by 25% through improved UX and performance.
        </p>
      </ProjectIntroCard>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <OverviewCard icon={AlertCircle} title="The Challenge">
              Legacy PhoneGap app. Performance issues. Need for modern architecture.
            </OverviewCard>
            <OverviewCard icon={User} title="My Role">
              <p className="font-semibold mb-2">Product Designer & Dev</p>
              <ul className="space-y-1 text-xs">
                <li>• Migration strategy</li>
                <li>• Flutter development</li>
                <li>• AI feature integration</li>
              </ul>
            </OverviewCard>
            <OverviewCard icon={TrendingUp} title="Impact">
              <ul className="space-y-1">
                <li>• 15 B2B clients served</li>
                <li>• 25% faster task completion</li>
                <li>• 30% satisfaction increase</li>
              </ul>
            </OverviewCard>
            <OverviewCard icon={Calendar} title="Timeline">
              3 years · Phased migration · Continuous improvement
            </OverviewCard>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <GlassCard>
            <div className="text-center py-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Want to see more work?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                href={createPageUrl("ProductWork")}
                  className="px-8 py-4 bg-[#0066ff] rounded-xl text-white font-semibold hover:bg-[#0052cc] transition-all glow-blue"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}