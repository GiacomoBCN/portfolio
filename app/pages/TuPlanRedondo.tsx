"use client";
import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { ArrowLeft } from "lucide-react";
import GlassCard from "../components/portfolio/GlassCard";
import ProjectIntroCard from "../components/work/ProjectIntroCard";

export default function TuPlanRedondo() {
  // TODO: B2B SaaS field operations focused

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
            Home &gt; Product Work &gt; TuPlanRedondo PWA
          </p>
          <div className="mb-4">
            <span className="text-xs uppercase tracking-wider text-blue-400">
              B2B SAAS · FIELD OPERATIONS
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            TuPlanRedondo PWA
          </h1>
          <p className="text-lg text-gray-400 mb-4">
            Product Designer & Front-End Developer · 2020-2021
          </p>
          <p className="text-xl text-gray-300 mb-8">
            Streamlined evaluation flows for McDonald's franchise, saving 30%
            time.
          </p>
        </div>
      </section>

      <ProjectIntroCard
        image="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop"
        title="Optimizing Field Operations for McDonald's"
        showGradient={false}
      >
        <p className="text-gray-300 leading-relaxed">
          McDonald's franchise evaluators needed a mobile-first solution to
          conduct assessments efficiently in the field. The existing process was
          paper-based and time-consuming, leading to delays and data entry
          errors.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I designed and developed a Progressive Web App that streamlined
          evaluation workflows, enabling real-time data capture and reducing
          task completion time by 30%. The solution improved evaluator
          satisfaction by 25% through intuitive UX and offline-first
          architecture.
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
