"use client";
import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import {
  ArrowLeft,
  AlertCircle,
  User,
  TrendingUp,
  Smartphone,
  CheckCircle,
  Layers,
  Users,
  Target,
  Zap,
  Camera,
  Sparkles,
} from "lucide-react";
import OverviewCard from "../components/work/OverviewCard";
import DecisionTable from "../components/work/DecisionTable";
import GlassCard from "../components/portfolio/GlassCard";
import ProjectIntroCard from "../components/work/ProjectIntroCard";
import ProjectGallery from "../components/work/ProjectGallery";
import { getImagePath } from "@/utils/image";

export default function SGPVEvolution() {
  const keyDecisions = [
    {
      point: "Platform Strategy",
      options: ["Keep per-client forks", "Native rewrites", "Unify on Flutter"],
      rationale:
        "Flutter delivered native performance with a single codebase for 15 customized FMCG clients. Native rewrites would multiply cost; legacy hybrid limited OS support and UX potential.",
      impact:
        "Reduced latency, faster release cadence, scalable component model",
    },
    {
      point: "Customization Governance",
      options: ["Maintain forks", "Hardcoded flags", "Theming + config"],
      rationale:
        "Moved from separate codebases to unified configuration and theming system. This cut maintenance burden and regression risk while preserving client-specific branding and workflows.",
      impact: "80% efficiency gain, safer rollouts across all clients",
    },
    {
      point: "Migration Rollout Strategy",
      options: ["Big-bang launch", "Pilot-only", "Pilots → Staged cohorts"],
      rationale:
        "Started with 3 pilot clients to validate migration, gather telemetry, and refine training materials. Then staged cohort deployments to protect business continuity across all 15 implementations.",
      impact: "Zero critical incidents during migration",
    },
    {
      point: "UX Investment Approach",
      options: [
        "Heuristics only",
        "One-off user testing",
        "Continuous research ops",
      ],
      rationale:
        "Interviews, contextual inquiry, and iterative usability tests shaped information architecture, responsive patterns, and the AI-powered image recognition flow that transformed field workflows.",
      impact: "25% task time reduction, 30% satisfaction increase",
    },
  ];

  const achievements = [
    {
      icon: Smartphone,
      metric: "15",
      label: "FMCG Clients",
      description: "Unified app with per-client branding",
    },
    {
      icon: Target,
      metric: "−20%",
      label: "Hardware Cost",
      description: "Mobile-first eliminated tablet dependency",
    },
    {
      icon: Layers,
      metric: "+80%",
      label: "Dev Efficiency",
      description: "Centralized styling streamlined releases",
    },
    {
      icon: Zap,
      metric: "−25%",
      label: "Task Time",
      description: "AI image recognition optimized workflows",
    },
    {
      icon: CheckCircle,
      metric: "+30%",
      label: "Satisfaction",
      description: "Performance + usability improvements",
    },
    {
      icon: Users,
      metric: "10",
      label: "User Interviews",
      description: "Plus contextual inquiry & usability tests",
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
            Home &gt; Product Work &gt; SGPV: Multi-Year Product Evolution
          </p>
          <div className="mb-4">
            <span className="text-xs uppercase tracking-wider text-blue-400">
              MULTI-CLIENT · MODERNIZATION · UX LEADERSHIP
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            SGPV: Leading Multi-Year Product Evolution Across 15 FMCG Clients
          </h1>
          <p className="text-lg text-gray-400 mb-4">
            Product Designer · Front-End Developer
          </p>
          <p className="text-xl text-gray-300 mb-8">
            A two-phase transformation spanning 18 months: first, a responsive
            redesign that eliminated tablet-only constraints and centralized
            assets across 15 clients; then, a strategic migration to Flutter
            that unified everything into a single product, boosted performance,
            and introduced AI-assisted data capture.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Product Strategy",
              "End-to-end UX/UI Process",
              "Design System",
              "Figma",
              "AI",
              "Mobile",
              "B2B",
              "SaaS",
              "Flutter",
              "Dart",
              "PhoneGap",
              "JavaScript",
              "Bootstrap",
              "Agile/SCRUM",
            ].map((tag) => (
              <span
                key={tag}
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
        image={getImagePath("images/projects/sgpv-evo.png")}
        title="From Client Forks to a Unified, Scalable Platform"
        showGradient={false}
      >
        <p className="text-gray-300 leading-relaxed">
          SGPV is a field-operations platform serving merchandisers and sales
          representatives for 15 major FMCG (Fast-Moving Consumer Goods)
          companies -including national and international brands operating
          across Spain, Portugal, and Italy. These field workers visit retail
          locations to audit shelf placement, negotiate product positioning,
          capture promotional compliance data, and close deals for premium shelf
          space.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Over time, versions 5–6 evolved into many client-specific forks to
          accommodate different branding and workflow requirements, creating
          high maintenance costs and uneven user experiences. I led a two-year
          program to modernize and consolidate the product while protecting
          business continuity across all 15 live implementations.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Phase 1 delivered a responsive redesign and centralized assets that
          restored velocity and removed the tablet-only constraint.
          <b />
          Phase 2 unified all clients on a single Flutter app and redesigned key
          flows-like AI-powered image-based data capture—reducing task time and
          improving satisfaction.
        </p>
      </ProjectIntroCard>

      {/* Overview - 3 COLUMNS */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OverviewCard icon={AlertCircle} title="The Challenge">
              Fragmented client forks, tablet-only hardware requirement, and
              legacy hybrid stack drove up costs and slowed delivery across 15
              FMCG implementations serving field merchandisers.
            </OverviewCard>

            <OverviewCard icon={User} title="My Role">
              <p className="font-semibold mb-2">
                Product Designer · UX Lead · Front-End Developer
              </p>
              <ul className="space-y-1 text-xs">
                <li>• Research ops, interviews, usability tests</li>
                <li>• Responsive patterns & centralized styling</li>
                <li>• Front-end refactors (PhoneGap → Flutter)</li>
                <li>• Design system & AI workflow design</li>
                <li>• Stakeholder enablement & rollout</li>
              </ul>
            </OverviewCard>

            <OverviewCard icon={TrendingUp} title="Impact Snapshot">
              <ul className="space-y-1">
                <li>• −20% hardware cost (mobile-first)</li>
                <li>• +80% development efficiency</li>
                <li>• −25% task time via AI recognition</li>
                <li>• +30% user satisfaction (Flutter)</li>
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

      {/* PHASE 1 */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              01
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Phase 1 (v5→v6): Responsive Redesign & Asset Centralization
              </h2>
            </div>
          </div>

          <div className="pl-0 md:pl-24 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              The app had been customized extensively for each FMCG
              client—different branding, workflows, and feature sets—resulting
              in multiple code forks that were difficult to update and manage.
              Additionally, the app was built exclusively for tablet use,
              forcing clients to invest in tablets for their field workforce. As
              smartphone adoption grew among merchandisers, the lack of mobile
              responsiveness became a critical issue.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Phase 1 focused on making the app fully responsive and scalable
              across tablets and smartphones while centralizing the styling and
              icon systems. By refactoring the core CSS and creating a universal
              asset library, we enabled rapid deployment of updates across all
              15 clients without duplicating effort. This phase ran for
              approximately 6 months.
            </p>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Key Improvements
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Mobile-first design:</strong> Eliminated tablet
                      dependency, enabling field workers to use their own
                      smartphones
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Centralized asset library:</strong> Universal CSS
                      and icon sets replaced per-client customizations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Theming system:</strong> Configuration-based
                      branding replaced code forks, reducing regression risk
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Streamlined deployment:</strong> Changes tested
                      once could be deployed to all clients rapidly
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Phase 1 Gallery */}
      <ProjectGallery
        title="Phase 1: Responsive Patterns & Centralized Assets"
        images={[
          {
            src: getImagePath("images/projects/sgpv-1.png"),
            alt: "Responsive design patterns for mobile and tablet",
          },
          {
            src: getImagePath("images/projects/sgpv-2.png"),
            alt: "Centralized CSS and icon system",
          },
          {
            src: getImagePath("images/projects/sgpv-3.png"),
            alt: "Cross-client theming implementation",
          },
        ]}
      />

      {/* PHASE 2 - Research */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              02
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Phase 2 (v6→v7): Research & Flutter Migration Strategy
              </h2>
            </div>
          </div>

          <div className="pl-0 md:pl-24 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Despite the Phase 1 improvements, the hybrid PhoneGap technology
              continued to face performance challenges—particularly with photo
              management on iOS and sluggish responsiveness compared to native
              apps. After extensive evaluation, we selected Flutter to migrate
              to a true cross-platform native solution that would unify all 15
              clients into a single codebase while enabling major UX
              enhancements. This phase ran for approximately one year, including
              research, development, and staged rollout.
            </p>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Research Workflow
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The research program combined desk research with in-context
                  field studies to understand merchandiser workflows and
                  validate design decisions before development.
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
                          Desk research, competitive analysis
                        </td>
                        <td className="py-4 pr-4">
                          Map technical risks, market baselines, and
                          modernization opportunities
                        </td>
                        <td className="py-4">
                          Landscape scan, risk assessment, success metrics
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Define</td>
                        <td className="py-4 pr-4">
                          1 contextual inquiry, 10 user interviews
                        </td>
                        <td className="py-4 pr-4">
                          Understand field workflows across client types and
                          identify friction points
                        </td>
                        <td className="py-4">
                          Personas, empathy maps, journey maps, problem
                          statements
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Design</td>
                        <td className="py-4 pr-4">
                          Wireframes, mockups, modern UI patterns
                        </td>
                        <td className="py-4 pr-4">
                          Simplify critical paths and prepare flows for
                          AI-powered features
                        </td>
                        <td className="py-4">
                          Interaction models, clickable prototypes
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Systemize</td>
                        <td className="py-4 pr-4">
                          Figma design system (components, tokens, specs)
                        </td>
                        <td className="py-4 pr-4">
                          Ensure visual and functional consistency across
                          unified app
                        </td>
                        <td className="py-4">
                          Component library, design tokens, usage guidelines
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Validate</td>
                        <td className="py-4 pr-4">10 usability tests</td>
                        <td className="py-4 pr-4">
                          Verify task time reductions and error rate
                          improvements
                        </td>
                        <td className="py-4">
                          Task completion benchmarks, issue log, refinements
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Deliver</td>
                        <td className="py-4 pr-4">
                          Flutter development, icon/visual assets, rollout
                        </td>
                        <td className="py-4 pr-4">
                          Ship performant unified app and manage staged client
                          migration
                        </td>
                        <td className="py-4">
                          Production Flutter app, training materials, rollout
                          plan
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    Design System
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Built comprehensive Figma system to ensure visual and
                    functional consistency across all modules and client
                    implementations.
                  </p>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    UI Modernization
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Wireframes and mockups focused on clarity, modern
                    interaction patterns, and faster task completion for field
                    workers.
                  </p>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    Visual Identity
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Delivered updated icons, product imagery, and refined visual
                    identity for the unified v7 experience.
                  </p>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    Front-End Development
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Led Flutter migration from hybrid PhoneGap platform,
                    optimizing for native performance and responsiveness.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* AI Feature Explanation - NEW SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              03
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                AI-Powered Data Capture
              </h2>
            </div>
          </div>

          <div className="pl-0 md:pl-24">
            <GlassCard>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Camera className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Transforming Field Data Collection
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Previously, field merchandisers visiting retail locations
                      had to manually enter product codes, shelf placement data,
                      and inventory counts by typing—a slow, tedious, and
                      error-prone process. A single store visit could require
                      dozens of manual entries, consuming valuable time and
                      introducing data quality issues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      The AI Solution
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      I designed a new workflow where users simply photograph
                      shelf labels, product barcodes, or promotional displays.
                      The AI-powered image recognition system automatically
                      extracts product identifiers, prices, placement positions,
                      and quantities—eliminating manual typing entirely.
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">→</span>
                        <span>
                          <strong>One-tap capture:</strong> Photograph instead
                          of type—reducing data entry time by 25%
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">→</span>
                        <span>
                          <strong>Error reduction:</strong> Automated extraction
                          eliminated transcription mistakes
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">→</span>
                        <span>
                          <strong>Instant validation:</strong> Real-time
                          feedback confirmed successful capture before leaving
                          the location
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">→</span>
                        <span>
                          <strong>Offline capability:</strong> Photos processed
                          locally, synced when connection restored
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <p className="text-sm text-gray-300">
                    <strong className="text-blue-400">Impact:</strong> This
                    feature became the most-used capability in v7, with
                    merchandisers reporting it "transformed" their daily
                    workflows. Task completion time dropped 25%, and user
                    satisfaction increased 30% post-migration.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Phase 2 Gallery */}
      <ProjectGallery
        title="Phase 2: Flutter Migration & AI-Powered Workflows"
        images={[
          {
            src: getImagePath("images/projects/sgpv7-1.png"),
            alt: "Flutter home screen and navigation",
          },
          {
            src: getImagePath("images/projects/sgpv7-2.png"),
            alt: "Unified design patterns and performance optimizations",
          },
          {
            src: getImagePath("images/projects/sgpv7-3.png"),
            alt: "AI image recognition workflow",
          },
        ]}
      />

      {/* Key Decisions */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              04
            </div>
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

      {/* Business Impact - CONSOLIDATED */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              05
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Business Impact & Results
              </h2>
            </div>
          </div>

          <div className="pl-0 md:pl-24 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              The two-phase evolution delivered measurable improvements across
              cost, efficiency, and user experience while establishing a
              maintainable platform for future growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    Phase 1 Results
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>
                      <strong>−20% hardware cost:</strong> Mobile-first design
                      eliminated tablet purchases for 15 clients
                    </li>
                    <li>
                      <strong>+80% development efficiency:</strong> Centralized
                      CSS and assets enabled one-to-many deployment
                    </li>
                    <li>
                      <strong>+25% faster updates:</strong> Unified styling
                      accelerated future releases
                    </li>
                    <li>
                      <strong>+15% user satisfaction:</strong> Responsive design
                      better matched field worker needs
                    </li>
                    <li>
                      <strong>Foundation for Phase 2:</strong> Created technical
                      runway for Flutter migration
                    </li>
                  </ul>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    Phase 2 Results
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>
                      <strong>Native performance:</strong> Flutter delivered
                      faster responsiveness and lower latency than hybrid
                    </li>
                    <li>
                      <strong>−25% task completion time:</strong> AI image
                      recognition eliminated manual data entry
                    </li>
                    <li>
                      <strong>−20% time per visit:</strong> Streamlined flows
                      reduced errors and friction
                    </li>
                    <li>
                      <strong>+30% user satisfaction:</strong> Performance and
                      usability gains transformed field experience
                    </li>
                    <li>
                      <strong>Unified codebase:</strong> One app for all clients
                      with configuration-based customization
                    </li>
                    <li>
                      <strong>Zero critical incidents:</strong> Staged rollout
                      protected business continuity
                    </li>
                  </ul>
                </div>
              </GlassCard>
            </div>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">
                  Long-Term Platform Value
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  Beyond immediate metrics, the transformation positioned SGPV
                  as a modern, competitive platform capable of rapid innovation.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>
                      <strong>Scalability for growth:</strong> New clients can
                      be onboarded with configuration instead of code forks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>
                      <strong>AI-ready architecture:</strong> Image recognition
                      proved the platform for future ML capabilities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>
                      <strong>Reduced technical debt:</strong> Eliminated years
                      of legacy code through strategic modernization
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>
                      <strong>Competitive advantage:</strong> Native performance
                      and AI features differentiated SGPV from competing field
                      solutions
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Key Learnings - EXPANDED */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              06
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Key Learnings
              </h2>
            </div>
          </div>

          <div className="pl-0 md:pl-24 space-y-6">
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  1. Governance Beats Heroics
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The Phase 1 theming system—replacing code forks with
                  configuration—was more valuable than any individual feature.
                  Establishing clear governance early (how customization works,
                  who approves changes, what's configurable vs. fixed) prevented
                  chaos as we scaled. The 80% efficiency gain came from
                  structure, not individual developer speed.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  2. Staged Rollout Protects Business Continuity
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Migrating 15 live client implementations to a completely new
                  technology stack (PhoneGap → Flutter) could have been
                  catastrophic with a big-bang launch. Starting with 3 pilot
                  clients gave us real telemetry, surfaced edge cases we hadn't
                  considered, and allowed us to refine training materials before
                  full rollout. The result: zero critical incidents during
                  migration across all clients.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  3. User Research Accelerates Stakeholder Buy-In
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Contextual inquiry with actual merchandisers in retail
                  environments—watching them struggle with manual data entry—was
                  more persuasive than any feature pitch. Video clips of users
                  saying "this takes forever" secured executive approval for the
                  AI image recognition investment faster than ROI projections
                  alone. UX evidence builds conviction.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  4. Balancing Standardization with Client Autonomy
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  FMCG clients had legitimate reasons for
                  customization—different promotional workflows, regional
                  compliance requirements, brand identity needs. The challenge
                  wasn't eliminating customization but moving it from code forks
                  to configuration. Defining clear "customization slots"
                  (branding, workflow toggles, field configurations) while
                  keeping core functionality unified was the key architectural
                  decision that made Phase 2 possible.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  5. Technology Migration Requires Change Management
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The Flutter migration wasn't just a technical challenge—it
                  required training 15 client organizations, managing user
                  expectations about new UI patterns, and ensuring field workers
                  (many older, less tech-savvy) could adapt. We created
                  role-specific training videos, ran pilot sessions with each
                  client's power users, and built "What's New" onboarding flows
                  in the app itself. The 30% satisfaction increase came from
                  managing the human side of change, not just shipping better
                  code.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  6. AI Features Require Thoughtful UX Design
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Image recognition technology alone doesn't solve problems—the
                  workflow design matters more. We iterated on: camera guidance
                  (framing helpers, lighting feedback), confidence thresholds
                  (when to auto-accept vs. ask for confirmation), error recovery
                  (what happens when recognition fails), and offline handling
                  (processing locally vs. cloud). The 25% task time reduction
                  came from these UX decisions, not just the AI model accuracy.
                </p>
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
                Want to discuss multi-client product evolution?
              </h2>
              <p className="text-[#cbd5e1] mb-8 max-w-2xl mx-auto">
                I can share deeper artifacts—research findings, design system
                documentation, and migration playbooks—from the two-year SGPV
                transformation.
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
