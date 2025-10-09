"use client";
import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import {
  ArrowLeft,
  AlertCircle,
  User,
  TrendingUp,
  Calendar,
  Monitor,
  Smartphone,
  Tablet,
  Car,
  Eye,
  Zap,
  CheckCircle,
  Layers,
  Users,
  Target,
} from "lucide-react";
import OverviewCard from "../components/work/OverviewCard";
import DecisionTable from "../components/work/DecisionTable";
import GlassCard from "../components/portfolio/GlassCard";
import ProjectIntroCard from "../components/work/ProjectIntroCard";
import ProjectGallery from "../components/work/ProjectGallery";
import { getImagePath } from "@/utils/image";

export default function XpuntoCero() {
  const keyDecisions = [
    {
      point: "Design Approach",
      options: ["Incremental refresh", "Full redesign", "Hybrid revamp"],
      rationale:
        "A complete rebranding unified identity and restored trust. Incremental updates weren't enough to reposition a legacy SaaS brand competing against modern platforms.",
      impact: "Stronger market differentiation",
    },
    {
      point: "Technology Stack",
      options: ["Static WordPress", "Custom PWA", "React SPA"],
      rationale:
        "A WordPress-based PWA balanced performance, speed-to-market, and accessibility while enabling caching and offline-first patterns for mobile users.",
      impact: "40% more mobile traffic",
    },
    {
      point: "Visual System",
      options: ["Flat icons", "Stock imagery", "Isometric visuals"],
      rationale:
        "Custom isometric product visuals connected innovation with clarity and reinforced a cohesive multi-product story that differentiated from generic SaaS competitors.",
      impact: "25% higher engagement",
    },
    {
      point: "Validation Method",
      options: ["Heuristics only", "User testing", "Hybrid validation"],
      rationale:
        "Hybrid approach with tree testing + usability sessions reduced navigation friction, clarified messaging hierarchy, and validated IA decisions with real users.",
      impact: "30% higher satisfaction",
    },
  ];

  const achievements = [
    {
      icon: Smartphone,
      metric: "40%",
      label: "Mobile Traffic ↑",
      description: "PWA redesign improved performance & accessibility",
    },
    {
      icon: Target,
      metric: "15%",
      label: "More Leads",
      description: "Streamlined UX increased visitor retention",
    },
    {
      icon: CheckCircle,
      metric: "30%",
      label: "Satisfaction ↑",
      description: "Clearer IA, faster flows, cohesive brand",
    },
    {
      icon: Zap,
      metric: "20%",
      label: "Faster Loads",
      description: "Optimized assets + caching strategy",
    },
    {
      icon: Users,
      metric: "5",
      label: "User Interviews",
      description: "Insights shaped personas & flow fixes",
    },
    {
      icon: Layers,
      metric: "25%",
      label: "Engagement ↑",
      description: "Isometric visuals improved scannability",
    },
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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-sm text-gray-400 mb-6">
            Home &gt; Product Work &gt; XpuntoCero Digital Transformation
          </p>
          <div className="mb-4">
            <span className="text-xs uppercase tracking-wider text-blue-400">
              REBRANDING · DIGITAL TRANSFORMATION
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            XpuntoCero Digital Transformation
          </h1>
          <p className="text-lg text-gray-400 mb-4">
            Product Designer & Front-End Developer
          </p>
          <p className="text-xl text-gray-300 mb-8">
            Rebranded B2B SaaS company with a PWA redesign, increasing mobile
            traffic by 40%, leads by 15%, and customer satisfaction by 30%.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Branding",
              "Strategy",
              "End-to-end UX/UI Process",
              "Figma",
              "Front-End",
              "PWA",
              "WordPress",
              "Elementor",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 glass rounded-full text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Card */}
      <ProjectIntroCard
        image={getImagePath("images/projects/XP0-1.png")}
        title="Transforming a Legacy SaaS Platform"
        showGradient={false}
      >
        <p className="text-gray-300 leading-relaxed">
          XpuntoCero, a B2B SaaS provider specializing in point-of-sale
          solutions for FMCG, Out-of-Home services, and Digital Marketing, faced
          stalled growth from an outdated visual identity and weak mobile
          experience that no longer matched evolving market expectations.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I led end-to-end transformation—from user research and brand redesign
          to front-end PWA implementation—creating a modern, accessible platform
          that restored credibility, improved performance, and clarified product
          storytelling across 8+ SaaS solutions.
        </p>
      </ProjectIntroCard>

      {/* Overview - 3 COLUMNS CENTERED */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OverviewCard icon={AlertCircle} title="The Challenge">
              Legacy brand identity (10+ years unchanged), slow mobile
              experience, and unclear information architecture were limiting
              market reach and credibility against modern SaaS competitors.
            </OverviewCard>

            <OverviewCard icon={User} title="My Role">
              <p className="font-semibold mb-2">
                Product Designer & Front-End Developer
              </p>
              <ul className="space-y-1 text-xs">
                <li>• Desk & competitive research</li>
                <li>• User interviews, personas, IA & wireframes</li>
                <li>• Brand system, icon library, isometric visuals</li>
                <li>• Front-end PWA implementation (WordPress)</li>
              </ul>
            </OverviewCard>

            <OverviewCard icon={TrendingUp} title="Impact">
              <ul className="space-y-1">
                <li>• +40% mobile traffic</li>
                <li>• +15% qualified leads</li>
                <li>• +30% customer satisfaction</li>
                <li>• +25% user engagement</li>
              </ul>
            </OverviewCard>
          </div>
        </div>
      </section>

      {/* Metrics Showcase */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Project Impact
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

      {/* Project Gallery */}
      <ProjectGallery
        title="Design Evolution"
        images={[
          {
            src: getImagePath("images/projects/XP0-2.png"),
            alt: "Before & After - Website Transformation",
          },
          {
            src: getImagePath("images/projects/XP0-3.png"),
            alt: "Brand Identity System - Logo, Icons & Isometric Visuals",
          },
          {
            src: getImagePath("images/projects/XP0-4.png"),
            alt: "Research Process - UX Workflow & Testing",
          },
        ]}
      />

      {/* Section 1: Business Context */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              01
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Business Context
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              XpuntoCero is a B2B IT company specializing in SaaS solutions for
              point-of-sale systems, serving the Fast-Moving Consumer Goods
              (FMCG) sector, Out-of-Home services, and Digital Marketing
              industries. The company had been operating with the same visual
              identity for over a decade, and the digital presence no longer
              reflected the sophistication of their technology offerings.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Customer feedback and sales team insights revealed that the
              outdated brand was creating perception problems during enterprise
              sales cycles. Prospects viewed the company as less innovative than
              newer competitors, despite having superior functionality. The
              mobile experience was particularly weak—slow load times, poor
              navigation, and dated visuals were driving potential customers
              away before they could experience the product value.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Without intervention, XpuntoCero risked continued brand erosion
              and difficulty attracting enterprise clients who expect polished,
              trustworthy digital experiences. The company needed a
              comprehensive transformation that would modernize the brand
              identity, improve technical performance, and clarify the complex
              multi-product offering in a way that resonated with their B2B
              audience.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Research & Design Process */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              02
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Research & Design Process
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24 space-y-6">
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Discovery Phase
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I began with desk research and competitive analysis to
                  understand the B2B SaaS landscape and identify visual and
                  functional patterns that signaled credibility and innovation.
                  This established benchmarks for the redesign.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Conducted competitive scan of 12+ B2B SaaS platforms in
                      POS and digital marketing space
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Documented industry best practices for multi-product
                      navigation and brand consistency
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Identified technical performance gaps through heuristic
                      evaluation
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  User Research
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Through 5 in-depth user interviews with existing customers and
                  prospects, I gathered qualitative insights on pain points,
                  expectations, and decision-making criteria. Affinity mapping
                  revealed patterns around trust signals, product clarity, and
                  mobile usage contexts.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      5 user interviews (mix of current customers and prospects)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Affinity diagram synthesis to identify opportunity areas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Developed personas representing key user segments and
                      their goals
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Information Architecture & Validation
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Tree testing on the existing menu structure revealed
                  navigation friction and unclear labeling. I restructured the
                  IA to reduce cognitive load and validated the new structure
                  through 5 usability tests, iterating based on task completion
                  rates and user feedback.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Tree testing identified 40% task failure rate on old menu
                      structure
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Redesigned IA with clearer hierarchy and product
                      categorization
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      5 usability tests validated new navigation, achieving 85%
                      task success
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Research Workflow Table */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              03
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Research Workflow
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24">
            <GlassCard>
              <div className="p-6">
                <p className="text-gray-300 leading-relaxed mb-6">
                  The research process followed a structured approach from
                  discovery through delivery, combining qualitative and
                  quantitative methods to validate decisions at each stage.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="pb-4 pr-4 text-blue-400 font-semibold">
                          Phase
                        </th>
                        <th className="pb-4 pr-4 text-blue-400 font-semibold">
                          Methods
                        </th>
                        <th className="pb-4 pr-4 text-blue-400 font-semibold">
                          Purpose
                        </th>
                        <th className="pb-4 text-blue-400 font-semibold">
                          Key Outputs
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Discover</td>
                        <td className="py-4 pr-4">
                          Desk research, competitive scan
                        </td>
                        <td className="py-4 pr-4">
                          Map landscape, set benchmarks
                        </td>
                        <td className="py-4">Research findings poster</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Define</td>
                        <td className="py-4 pr-4">
                          5 user interviews, affinity diagram
                        </td>
                        <td className="py-4 pr-4">Surface pains & goals</td>
                        <td className="py-4">Themes & opportunity areas</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Model</td>
                        <td className="py-4 pr-4">Personas, journey mapping</td>
                        <td className="py-4 pr-4">Align team around users</td>
                        <td className="py-4">Persona set & journey notes</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Structure</td>
                        <td className="py-4 pr-4">Tree testing (old menu)</td>
                        <td className="py-4 pr-4">Validate & labels</td>
                        <td className="py-4">Revised & nav schema</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Validate</td>
                        <td className="py-4 pr-4">5 usability tests</td>
                        <td className="py-4 pr-4">Reduce friction in flows</td>
                        <td className="py-4">Task success metrics, fixes</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Deliver</td>
                        <td className="py-4 pr-4">
                          Wireframes, brand system, PWA implementation
                        </td>
                        <td className="py-4 pr-4">Ship faster, on-brand</td>
                        <td className="py-4">Component library, live site</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Key Decisions */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              04
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Key Design Decisions & Trade-offs
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24">
            <DecisionTable decisions={keyDecisions} />
          </div>
        </div>
      </section>

      {/* Design System & Brand Work */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              05
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Design System & Brand Identity
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24 space-y-6">
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Visual Communication Strategy
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I designed visuals to communicate before text—using color,
                  typography, and imagery to tell the brand story intuitively.
                  Each visual element was grounded in user research insights to
                  ensure resonance with the B2B audience.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Logo redesign:</strong> Simple, memorable, and
                      reflective of the brand's technical essence
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Icon library (SVG):</strong> Functional visual
                      aids that guide users through product features
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Isometric product illustrations:</strong> Custom
                      visuals that differentiated XpuntoCero from generic SaaS
                      stock imagery
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Brand Consistency Across Touchpoints
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A unified visual language strengthens brand recognition and
                  builds trust. I ensured consistency across web, marketing
                  materials, and product interfaces—reinforcing the brand's
                  presence at every user interaction.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Complete logo suite for different contexts (horizontal,
                      stacked, monochrome)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Color system and typography guidelines for brand coherence
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Component library ensuring consistent UI patterns across
                      8+ product pages
                    </span>
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
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              06
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Outcomes & Business Impact
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              The transformation delivered measurable improvements across
              acquisition, engagement, and satisfaction while establishing a
              maintainable front-end foundation and a recognizable modern brand
              language that repositioned XpuntoCero as a credible enterprise
              SaaS provider.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    Lead Generation & Marketing
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Streamlined user paths and clearer value proposition
                    messaging contributed to a 15% lift in qualified leads.
                    Conversion rates improved by 20% through modernized visuals
                    and faster, more engaging website experience.
                  </p>
                  <ul className="space-y-1 text-gray-400 text-xs">
                    <li>• 15% increase in qualified leads</li>
                    <li>• 20% improvement in conversion rates</li>
                    <li>• Better tracking and attribution</li>
                  </ul>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    UX & Performance
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    PWA architecture delivered 40% increase in mobile traffic
                    and 20% faster load times. Customer satisfaction increased
                    30% through better performance, smoother navigation, and
                    cohesive brand experience across devices.
                  </p>
                  <ul className="space-y-1 text-gray-400 text-xs">
                    <li>• 40% increase in mobile traffic</li>
                    <li>• 20% faster load times</li>
                    <li>• 30% customer satisfaction increase</li>
                  </ul>
                </div>
              </GlassCard>
            </div>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">
                  Key Learnings
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
                    <span>
                      <strong>Brand perception drives B2B decisions:</strong>{" "}
                      Enterprise buyers evaluate platforms based on visual
                      credibility before features. A modern, cohesive brand
                      identity removes friction from sales cycles.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
                    <span>
                      <strong>Mobile performance matters for B2B:</strong> Even
                      in enterprise contexts, decision-makers research on
                      mobile. Fast, accessible experiences increase engagement
                      and retention.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
                    <span>
                      <strong>
                        Visual storytelling reduces cognitive load:
                      </strong>{" "}
                      Custom isometric illustrations allowed users to understand
                      complex multi-product offerings faster than text alone,
                      improving scannability by 25%.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
                    <span>
                      <strong>Validation saves implementation time:</strong>{" "}
                      Tree testing and usability sessions identified navigation
                      issues early, preventing costly redesigns post-launch.
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <GlassCard>
            <div className="text-center py-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Want to see more work?
              </h2>
              <p className="text-[#cbd5e1] mb-8 max-w-2xl mx-auto">
                This case study demonstrates how research-driven design,
                cohesive branding, and performant technical implementation
                create measurable business impact.
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
