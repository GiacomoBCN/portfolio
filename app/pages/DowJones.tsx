"use client";
import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { ArrowLeft, AlertCircle, User, TrendingUp, Calendar, Users, Target, Zap } from "lucide-react";
import OverviewCard from "../components/work/OverviewCard";
import DecisionTable from "../components/work/DecisionTable";
import GlassCard from "../components/portfolio/GlassCard";  
import LeadershipCard from "../components/portfolio/LeadershipCard";  
import MetricShowcase from "../components/casestudy/MetricShowcase";
import LeadershipProfile from "../components/casestudy/LeadershipProfile";
import ProjectIntroCard from "../components/work/ProjectIntroCard";

export default function DowJones() {
  // TODO: Add real content - this is placeholder structure
  
  const keyDecisions = [
    {
      point: "Governance Model",
      options: ["Centralized team", "Distributed contributors", "Hybrid model"],
      rationale: "Hybrid approach balanced central oversight with brand autonomy. Essential for 8-brand adoption.",
      impact: "100% brand adoption"
    },
    {
      point: "Component Complexity",
      options: ["Simple atoms only", "Complex compositions", "Tiered system"],
      rationale: "Tiered system provided flexibility while maintaining consistency. Reduced component count by 20%.",
      impact: "20% less complexity"
    },
    {
      point: "Documentation Strategy",
      options: ["Code comments", "Separate docs site", "Integrated Storybook"],
      rationale: "Storybook integration kept docs close to code, increasing usage and reducing maintenance burden.",
      impact: "30% faster onboarding"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="fixed top-24 left-6 z-40">
        <Link
        href={createPageUrl("ProductWork")}
          className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-[#cbd5e1] hover:text-white hover:border-[#0066ff] transition-all"
        >
          <ArrowLeft size={20} />
          <span className="hidden md:inline">Back to Projects</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-sm text-gray-400 mb-6">
            Home &gt; Product Work &gt; Dow Jones Design System
          </p>
          <div className="mb-4">
            <span className="text-xs uppercase tracking-wider text-blue-400">
              DESIGN SYSTEMS · ENTERPRISE
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Dow Jones Design System
          </h1>
          <p className="text-lg text-gray-400 mb-4">
            Lead Design Technologist · 2022-2025
          </p>
          <p className="text-xl text-gray-300 mb-8">
            Governance of a unified design system serving 8 brands, aligning 60+ designers and generating 200K+ component references.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Figma", "React", "Design Tokens", "Storybook", "CI/CD"].map((tag, i) => (
              <span key={i} className="px-4 py-2 glass rounded-full text-sm text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Card */}
      <ProjectIntroCard 
        image="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=600&fit=crop"
        title="Building a Unified System at Scale"
      >
        <p className="text-gray-300 leading-relaxed">
          Dow Jones operates multiple B2B and B2C brands including Barron's, MarketWatch, and others. Each brand had evolved independently with separate design teams, creating inconsistency and duplicated effort across the organization.
        </p>
        <p className="text-gray-300 leading-relaxed">
          As Lead Design Technologist, I established governance processes, component architecture, and design token systems that enabled 8 brands to share a unified foundation while maintaining their unique brand identities. The system now powers 200K+ component references across the organization.
        </p>
      </ProjectIntroCard>

      {/* Overview */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <OverviewCard icon={AlertCircle} title="The Challenge">
              8 brands with inconsistent UIs. Designers duplicating work. No single source of truth for components.
            </OverviewCard>
            
            <OverviewCard icon={User} title="My Role">
              <p className="font-semibold mb-2">Lead Design Technologist</p>
              <ul className="space-y-1 text-xs">
                <li>• Design system governance</li>
                <li>• Cross-brand alignment</li>
                <li>• Component architecture</li>
                <li>• Team enablement</li>
              </ul>
            </OverviewCard>
            
            <OverviewCard icon={TrendingUp} title="Impact">
              <ul className="space-y-1">
                <li>• 60+ designers aligned</li>
                <li>• 200K+ component references</li>
                <li>• 30% productivity boost</li>
                <li>• 20% less complexity</li>
              </ul>
            </OverviewCard>
            
            <OverviewCard icon={Calendar} title="Timeline">
              3 years ongoing · Team of 12+ designers · 8 brand collaborators
            </OverviewCard>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Project Leadership
          </h2>
          <LeadershipProfile
            role="Lead Design Technologist"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
            responsibilities={[
              "Established design system governance model across 8 brands",
              "Led component architecture and design token strategy",
              "Facilitated alignment meetings with 60+ designers",
              "Built Figma libraries and React component ecosystem",
              "Defined contribution guidelines and approval workflows",
              "Tracked adoption metrics and system health KPIs"
            ]}
          />
        </div>
      </section>

      {/* Section 1: Business Context */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">01</div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Business Context
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24">
            <p className="text-gray-300 leading-relaxed mb-4">
              Dow Jones operates multiple B2B and B2C brands including Barron's, MarketWatch, and others. Each brand had evolved independently with separate design teams, creating inconsistency and duplicated effort across the organization.
            </p>
          </div>
        </div>
      </section>

      {/* Key Decisions */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">02</div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Key Decisions & Trade-offs
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24">
            <DecisionTable decisions={keyDecisions} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <GlassCard>
            <div className="text-center py-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Want to see more work?
              </h2>
              <p className="text-[#cbd5e1] mb-8 max-w-2xl mx-auto">
                This is just one example of how I lead cross-functional teams to deliver 
                measurable business impact through strategic design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                href={createPageUrl("ProductWork")}
                  className="px-8 py-4 bg-[#0066ff] rounded-xl text-white font-semibold hover:bg-[#0052cc] transition-all glow-blue hover:scale-105"
                >
                  View All Projects
                </Link>
                <a
                  href="mailto:consulting@giacomobianchi.tech"
                  className="px-8 py-4 glass rounded-xl text-white font-semibold hover:bg-[#0066ff] hover:border-[#0066ff] transition-all"
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
