"use client";
import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { ArrowLeft, AlertCircle, User, TrendingUp, Calendar, Users, Target, Zap, Code, Layers, GitBranch, CheckCircle } from "lucide-react";
import OverviewCard from "../components/work/OverviewCard";
import DecisionTable from "../components/work/DecisionTable";
import GlassCard from "../components/portfolio/GlassCard";  
import LeadershipCard from "../components/portfolio/LeadershipCard";  
import MetricShowcase from "../components/casestudy/MetricShowcase";
import LeadershipProfile from "../components/casestudy/LeadershipProfile";
import ProjectIntroCard from "../components/work/ProjectIntroCard";
import ProjectGallery from "../components/work/ProjectGallery";
import { getImagePath } from '@/utils/image';

export default function DowJones() {
  
  const keyDecisions = [
    {
      point: "Governance Model",
      options: ["Centralized team", "Distributed contributors", "Hybrid model"],
      rationale: "Hybrid approach balanced central oversight with brand autonomy. Essential for 8-brand adoption.",
      impact: "100% brand adoption"
    },
    {
      point: "Platform Architecture",
      options: ["React-only", "Native per platform", "Token-based cross-platform"],
      rationale: "Supported transformation to platform-agnostic architecture using Style Dictionary. Enabled token automation across web, iOS, and Android.",
      impact: "Cross-platform consistency"
    },
    {
      point: "Component Complexity",
      options: ["Simple atoms only", "Complex compositions", "Tiered system"],
      rationale: "Tiered system with reorganized Storybook architecture provided flexibility while maintaining consistency. Improved discoverability for 60+ designers and 120+ engineers.",
      impact: "20% complexity reduction"
    },
    {
      point: "Documentation Strategy",
      options: ["Code comments", "Separate docs site", "Integrated Storybook"],
      rationale: "Storybook integration kept docs close to code, increasing usage and reducing maintenance burden. Implemented improved QA and accessibility workflows.",
      impact: "30% productivity boost"
    }
  ];

  const achievements = [
    {
      icon: Users,
      metric: "60+",
      label: "Designers Aligned",
      description: "Unified design teams across 8 brands"
    },
    {
      icon: Code,
      metric: "200K+",
      label: "Component References",
      description: "System adoption at scale"
    },
    {
      icon: TrendingUp,
      metric: "30%",
      label: "Productivity Boost",
      description: "Through streamlined workflows and automation"
    },
    {
      icon: Layers,
      metric: "20%",
      label: "Complexity Reduction",
      description: "Via reorganized architecture"
    },
    {
      icon: Target,
      metric: "120+",
      label: "Stakeholders",
      description: "Cross-functional collaboration"
    },
    {
      icon: CheckCircle,
      metric: "WCAG 2.2",
      label: "Accessibility",
      description: "EU & U.S. compliance standards"
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
            Lead Design Technologist
          </p>
          <p className="text-xl text-gray-300 mb-8">
            Governance of a unified design system adopted across B2B and B2C brands, boosting team productivity by 30% and reducing component complexity by 20%.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Figma", "React", "Design Tokens", "Style Dictionary", "Storybook", "SAFe Agile", "WCAG 2.2"].map((tag, i) => (
              <span key={i} className="px-4 py-2 glass rounded-full text-sm text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Card with your actual image */}
   
      <ProjectIntroCard 
        image={getImagePath('images/projects/brand-ds.png')}
        title="Building a Unified System at Scale"
      >
      
        <p className="text-gray-300 leading-relaxed">
          Dow Jones operates multiple B2B and B2C brands including The Wall Street Journal, 
          Factiva, Barron's, and MarketWatch. Each brand had evolved independently with 
          separate design teams, creating inconsistency and duplicated effort.
        </p>
        <p className="text-gray-300 leading-relaxed">
          As Lead Design Technologist, I co-owned the product roadmap and established 
          governance processes that unified 8 brands. Led the reorganization that reduced 
          complexity by 20% while implementing process improvements that boosted productivity 
          by 30%. The system now powers 200K+ component references across 60+ designers and 
          120+ stakeholders, ensuring WCAG 2.2 compliance.
        </p>
      </ProjectIntroCard>

      {/* Overview */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <OverviewCard icon={AlertCircle} title="The Challenge">
              Multiple B2B and B2C brands with inconsistent UIs. Designers duplicating work. No single source of truth for components across platforms.
            </OverviewCard>
            
            <OverviewCard icon={User} title="My Role">
              <p className="font-semibold mb-2">Lead Design Technologist</p>
              <ul className="space-y-1 text-xs">
                <li>• Product roadmap co-ownership</li>
                <li>• Design system governance</li>
                <li>• Component architecture</li>
                <li>• Cross-functional leadership</li>
              </ul>
            </OverviewCard>
            
            <OverviewCard icon={TrendingUp} title="Impact">
              <ul className="space-y-1">
                <li>• 60+ designers aligned</li>
                <li>• 200K+ component references</li>
                <li>• 30% productivity boost</li>
                <li>• 20% complexity reduction</li>
              </ul>
            </OverviewCard>
            
            <OverviewCard icon={GitBranch} title="Scope">
              Cross-platform system · 8 brands · Web, iOS, Android · WCAG 2.2 compliant
            </OverviewCard>
          </div>
        </div>
      </section>

      {/* Metrics Showcase */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Impact & Scale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <GlassCard key={index}>
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                    <achievement.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-sm font-semibold text-blue-400 mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {achievement.description}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Slider */}
            {/* Project Gallery Slider */}
      <ProjectGallery
        title="Project Gallery"
        images={[
          {
            src:  getImagePath('images/projects/token1-ds.png'),
            alt: "Design System"
          },
          {
            src: getImagePath('images/projects/token2-ds.png'),
            alt: "Design Tokens"
          },
          {
            src:  getImagePath('images/projects/token3-ds.png'),
            alt: "Design System"
          }
        ]}
      />
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
          <div className="pl-0 md:pl-24 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Dow Jones is a global provider of news and business intelligence solutions, serving financial, legal, and media professionals through multiple B2B and B2C brands including The Wall Street Journal, Factiva, Barron's, and MarketWatch.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Each brand had evolved independently with separate design teams, creating inconsistency and duplicated effort across the organization. There was no single source of truth for components, and designers were reinventing solutions that already existed elsewhere in the company.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The business needed a unified design system that could scale across platforms (web, iOS, Android) while maintaining brand identity, ensuring accessibility compliance, and enabling high-velocity delivery across product teams.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Governance & Architecture */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">02</div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Governance & Architecture
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24 space-y-6">
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Token-First Design System</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Spearheaded token-first architecture that became the foundation for component reuse and cross-platform consistency. This approach enhanced development speed and reduced design-to-code inconsistency across all brands.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Supported engineering transformation to platform-agnostic architecture using Style Dictionary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Enabled seamless token distribution across web, iOS (SwiftUI), and Android</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Established design tokens as single source of truth for visual properties</span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Repository & Documentation Overhaul</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Led the reorganization of core repositories and Storybook architecture, reducing component complexity by 20% and dramatically improving discoverability and onboarding for both engineers and designers.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Improved component organization and documentation structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Streamlined contribution workflows and approval processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Faster onboarding reduced time-to-productivity for new team members</span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Key Decisions */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">03</div>
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

      {/* Collaboration & Process */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">04</div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Collaboration & Process Excellence
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24 space-y-6">
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Cross-Functional Partnership</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Partnered with over 120 cross-functional stakeholders from product, engineering, and accessibility teams to ensure scalable implementation, high adoption, and alignment across product teams.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Collaborated with analytics teams using Google Analytics and internal dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Informed product improvements and supported data-driven prioritization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Demonstrated "make things happen" mindset through ownership and speed</span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Accessibility & Quality</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Ensured accessibility (A11y) best practices were embedded into the design system, meeting EU and U.S. compliance standards (WCAG 2.2). Implemented comprehensive QA and documentation workflows.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Collaborated with accessibility lead on validation through automated tools and manual testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Screen reader and keyboard navigation testing protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Process improvements driving 30% boost in team productivity</span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">AI-Enhanced Workflow</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Integrated AI tools and automation into the design workflow, leveraging ChatGPT and Vertex AI to streamline content generation, prototyping, and quality checks.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Accelerated documentation and component specification creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Enhanced prototyping speed and iteration velocity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Automated quality checks and consistency validation</span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">05</div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Outcomes & Business Impact
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              The design system contributed to improved UX consistency across all Dow Jones digital properties, reduced friction in user journeys, and delivered measurable gains in engagement and retention. The system enabled scalable cross-platform development and faster time-to-market for new features.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Team Efficiency</h3>
                  <p className="text-gray-300 text-sm">
                    30% boost in productivity through streamlined workflows, improved documentation, and reduced design-to-code inconsistency. 20% reduction in component complexity improved discoverability.
                  </p>
                </div>
              </GlassCard>
              
              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Adoption & Scale</h3>
                  <p className="text-gray-300 text-sm">
                    200K+ component references across the organization. 60+ designers and 120+ stakeholders aligned. 8 brands sharing unified foundation while maintaining unique identities.
                  </p>
                </div>
              </GlassCard>
            </div>
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
                measurable business impact through strategic design and technical leadership.
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