"use client";
import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { ArrowLeft, AlertCircle, User, TrendingUp, Calendar } from "lucide-react";
import OverviewCard from "../components/work/OverviewCard";
import GlassCard from "../components/portfolio/GlassCard";
import LeadershipProfile from "../components/casestudy/LeadershipProfile";
import ProjectIntroCard from "../components/work/ProjectIntroCard";

export default function XpuntoCero() {
  // TODO: Add complete content following VoD template structure
  
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

      <section className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-sm text-gray-400 mb-6">
            Home &gt; Product Work &gt; XpuntoCero Digital Transformation
          </p>
          <div className="mb-4">
            <span className="text-xs uppercase tracking-wider text-blue-400">
              GROWTH · BUSINESS IMPACT
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            XpuntoCero Digital Transformation
          </h1>
          <p className="text-lg text-gray-400 mb-4">
            Product Designer & Front-End Developer · 2019-2022
          </p>
          <p className="text-xl text-gray-300 mb-8">
            Rebranded SaaS company with PWA redesign, increasing mobile traffic by 40%, leads by 15%, and customer satisfaction by 30%.
          </p>
          <div className="flex flex-wrap gap-2">
            {["PWA", "WordPress", "Branding", "Front-End", "UX"].map((tag, i) => (
              <span key={i} className="px-4 py-2 glass rounded-full text-sm text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ProjectIntroCard 
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
        title="Transforming a Legacy SaaS Platform"
      >
        <p className="text-gray-300 leading-relaxed">
          XpuntoCero needed to modernize their brand and digital presence to compete in an increasingly crowded SaaS market. The existing platform had outdated branding, poor mobile experience, and low conversion rates.
        </p>
        <p className="text-gray-300 leading-relaxed">
          As Product Designer and Front-End Developer, I led a complete digital transformation including brand redesign, PWA development, and UX optimization that resulted in measurable business growth and improved customer satisfaction.
        </p>
      </ProjectIntroCard>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <OverviewCard icon={AlertCircle} title="The Challenge">
              Outdated brand identity. Poor mobile experience. Low lead conversion rates.
            </OverviewCard>
            
            <OverviewCard icon={User} title="My Role">
              <p className="font-semibold mb-2">Product Designer & Front-End</p>
              <ul className="space-y-1 text-xs">
                <li>• Complete brand redesign</li>
                <li>• PWA development</li>
                <li>• UX optimization</li>
                <li>• Analytics tracking</li>
              </ul>
            </OverviewCard>
            
            <OverviewCard icon={TrendingUp} title="Impact">
              <ul className="space-y-1">
                <li>• 40% mobile traffic increase</li>
                <li>• 15% more leads</li>
                <li>• 30% satisfaction boost</li>
                <li>• 500K€ yearly sales</li>
              </ul>
            </OverviewCard>
            
            <OverviewCard icon={Calendar} title="Timeline">
              18 months · Solo designer + dev team · Full rebrand & PWA launch
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
                <a
                  href="mailto:consulting@giacomobianchi.tech"
                  className="px-8 py-4 glass rounded-xl text-white font-semibold hover:bg-[#0066ff] transition-all"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}