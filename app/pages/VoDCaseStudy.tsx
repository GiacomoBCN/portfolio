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
} from "lucide-react";
import OverviewCard from "../components/work/OverviewCard";
import DecisionTable from "../components/work/DecisionTable";
import GlassCard from "../components/portfolio/GlassCard";
import ProjectIntroCard from "../components/work/ProjectIntroCard";
import ProjectGallery from "../components/work/ProjectGallery";
import { getImagePath } from "@/utils/image";

export default function VoDPlatform() {
  const keyDecisions = [
    {
      point: "Navigation Architecture",
      options: [
        "Keep 3-axis system",
        "Reduce to 2-axis (vertical + horizontal)",
        "Single axis with deep menus",
      ],
      rationale:
        "Two-axis navigation (vertical rail + horizontal tabs) provides clear mental model while reducing cognitive load. Scales perfectly across devices from TV remotes to touchscreens.",
      impact: "40% reduction in interaction steps",
    },
    {
      point: "Landing Experience",
      options: [
        "Keep 'Who's watching?' gate",
        "Direct to homepage",
        "Direct to Continue Watching",
      ],
      rationale:
        "Removed welcome screen entirely, landing directly on Continue Watching. Users get immediate value without friction. Profile switching moved to top-right utility cluster.",
      impact: "60% faster profile access",
    },
    {
      point: "Accessibility Standards",
      options: [
        "Basic contrast fixes",
        "WCAG AA compliance",
        "WCAG AAA compliance",
      ],
      rationale:
        "WCAG AA provides strong accessibility without over-constraining design. Essential for TV viewing from 3 meters and inclusive design for all users.",
      impact: "WCAG AA compliant",
    },
    {
      point: "Component System Approach",
      options: [
        "Device-specific designs",
        "Responsive single design",
        "Adaptive box-first grid",
      ],
      rationale:
        'Box-first grid adapts intelligently to each context (TV, mobile, tablet, car) while maintaining design consistency. Single component system scales from 5" phones to 75" TVs.',
      impact: "Unified design language",
    },
  ];

  const achievements = [
    {
      icon: Zap,
      metric: "40%",
      label: "Interaction Reduction",
      description: "Fewer clicks/taps for common user journeys",
    },
    {
      icon: Eye,
      metric: "60%",
      label: "Faster Profile Switch",
      description: "From ≥10 taps to just 4 taps",
    },
    {
      icon: CheckCircle,
      metric: "WCAG AA",
      label: "Accessibility",
      description: "Contrast ratios & focus states compliant",
    },
    {
      icon: Monitor,
      metric: "4 Devices",
      label: "Multi-Platform",
      description: "TV, mobile, tablet, in-car displays",
    },
  ];

  const interactionImprovements = [
    {
      task: "Switch from Watch → Live TV to Shop → Groceries",
      before: "9 taps",
      after: "6 taps",
      improvement: "–33%",
    },
    {
      task: "Go from landing hero to first row card",
      before: "2 taps",
      after: "1 tap",
      improvement: "–50%",
    },
    {
      task: "Open profile switcher from deep in content",
      before: "≥10 taps",
      after: "4 taps",
      improvement: "–60%",
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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-sm text-gray-400 mb-6">
            Home &gt; Product Work &gt; VoD Platform Redesign
          </p>
          <div className="mb-4">
            <span className="text-xs uppercase tracking-wider text-blue-400">
              PRODUCT CONSULTING · MULTI-PLATFORM
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            VoD Platform Redesign
          </h1>
          <p className="text-lg text-gray-400 mb-4">
            Product Consultant · Confidential Client (Dubai)
          </p>
          <p className="text-xl text-gray-300 mb-8">
            Redesigned cross-device VOD experience with 40% fewer interaction
            steps (calculated via click-path analysis) and WCAG AA compliance
            across TV, mobile, and in-car displays.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Consultant",
              "Heuristic Evaluation",
              "End-to-end UX/UI Process",
              "Figma",
              "Multi-platform Design",
              "UX Strategy",
              "WCAG 2.2 AA",
              "TV/10-foot UI",
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
        image={getImagePath("images/projects/Vod-1.png")}
        title="Evaluating & Redesigning a Multi-Device Streaming Experience"
        showGradient={false}
      >
        <p className="text-gray-300 leading-relaxed">
          A Dubai-based client commissioned me to review and redesign the
          initial prototype of their VOD Platform. The platform needed to serve
          content across multiple contexts: traditional TV viewing, mobile
          on-the-go, tablet browsing, and in-car entertainment systems.
        </p>
        <p className="text-gray-300 leading-relaxed">
          My role was to evaluate usability, visual clarity, and interaction
          flow through heuristic review, identify accessibility gaps against
          WCAG standards, and propose a unified home screen concept that could
          scale seamlessly across all devices while reducing user friction.
        </p>
      </ProjectIntroCard>

      {/* Overview */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <OverviewCard icon={AlertCircle} title="The Challenge">
              Complex 3-axis navigation causing user friction. Poor legibility
              with light text over artwork. Weak focus indicators for TV
              viewing. Unnecessary entry gates before content access.
            </OverviewCard>

            <OverviewCard icon={User} title="My Role">
              <p className="font-semibold mb-2">Product Design Consultant</p>
              <ul className="space-y-1 text-xs">
                <li>• Heuristic evaluation & accessibility audit</li>
                <li>
                  • Cross-platform design strategy (TV, mobile, tablet, car)
                </li>
              </ul>
            </OverviewCard>

            <OverviewCard icon={TrendingUp} title="Impact">
              <ul className="space-y-1">
                <li>• 40% reduction in interaction steps</li>
                <li>• WCAG AA compliant accessibility</li>
                <li>• Unified design language across devices</li>
                <li>• 60% faster profile switching</li>
              </ul>
            </OverviewCard>

            <OverviewCard icon={Calendar} title="Timeline">
              6 months evaluation & redesign · Multi-device design system ·
              Scaled across TV, mobile, tablet, in-car
            </OverviewCard>
          </div>
        </div>
      </section>

      {/* Metrics Showcase */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Redesign Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <ProjectGallery
        title="Design Evolution"
        images={[
          {
            src: getImagePath("images/projects/Vod-2.png"),
            alt: "Before and After Comparison",
          },
          {
            src: getImagePath("images/projects/Vod-3.png"),
            alt: "Multi-platform Views",
          },
          {
            src: getImagePath("images/projects/Vod-4.png"),
            alt: "Navigation System",
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
              A Dubai-based client was developing a VOD platform for the MENA
              region to compete with global streaming services. The platform
              needed to serve content across multiple contexts: traditional TV
              viewing for families, mobile for commuters, tablet for casual
              browsing, and in-car entertainment systems for passengers.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The initial prototype showcased rich functionality but presented
              significant usability hurdles. Navigation was fragmented across
              three axes (icon belt, tab row, horizontal carousels), forcing
              users to zig-zag through complex interaction flows. Light text
              over artwork created poor contrast, weak focus indicators made TV
              viewing difficult from 3 meters away, and an unnecessary "Who's
              watching?" welcome screen added friction before users could access
              content.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The streaming market in the MENA region was becoming increasingly
              competitive, with global players entering the space. Users
              expected seamless, intuitive experiences similar to Netflix and
              Disney+, but localized for regional preferences and viewing
              contexts. The platform needed a governance model that could scale
              across all devices while maintaining usability and accessibility
              standards.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem & Evaluation */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              02
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                The Problem & Evaluation
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24 space-y-6">
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Heuristic Review Findings
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Through systematic heuristic evaluation, I identified critical
                  usability issues that were creating friction across all device
                  types. The problems extended beyond simple design flaws-they
                  represented fundamental interaction model issues.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Complex interaction flow:</strong> High click/tap
                      counts for basic tasks due to 3-axis navigation system
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Legibility challenges:</strong> Light text over
                      artwork with poor contrast ratios failing WCAG standards
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Weak focus indicators:</strong> Nearly invisible
                      focus states made TV navigation from 3 meters extremely
                      difficult
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Unnecessary friction:</strong> "Who's watching?"
                      welcome screen blocked immediate content access
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Accessibility Gaps
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The accessibility audit revealed multiple WCAG violations that
                  would exclude users with visual impairments and create poor
                  experiences for all users in challenging viewing conditions
                  (bright rooms, distance viewing, etc.).
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Contrast ratios below WCAG AA standards (&lt; 4.5:1 for
                      normal text)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Focus indicators not meeting 3:1 contrast requirement
                      against adjacent colors
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Color-only information without text labels or icons
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>

                    <span>
                      Insufficient touch target sizes for mobile (&lt; 44px)
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Click-Path Analysis
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To quantify the interaction cost, I mapped common user
                  journeys and counted every click, tap, or remote control press
                  required. The results revealed significant friction that would
                  fatigue users and reduce engagement.
                </p>
                <div className="text-gray-400 text-sm">
                  See detailed comparison in the interaction improvements table
                  below.
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
              03
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

      {/* Section 4: The Redesign */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              04
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                The Redesign Solution
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24 space-y-6">
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  2-Axis Navigation System
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Introduced a vertical rail for primary navigation (Watch,
                  Play, Learn, Shop, WiFi, My Home, etc.) combined with a
                  lightweight horizontal tab bar for contextual filtering (Live
                  TV, VOD, Catch-up, TV Guide). This clear structure eliminated
                  zig-zag navigation patterns.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Vertical rail remains persistent across all screens for
                      wayfinding
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Horizontal tabs provide contextual filtering within each
                      section
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Clear mental model: vertical for "where," horizontal for
                      "what"
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Removed Welcome Screen Friction
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Eliminated the "Who's watching?" welcome screen entirely.
                  Users now land directly on Continue Watching, immediately
                  surfacing valuable content. Profile switching moved to a
                  top-right utility cluster accessible from anywhere.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Instant access to content without unnecessary gates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Profile switcher in persistent top-right utility bar
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Continue Watching becomes primary value proposition
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  WCAG AA Compliance
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Implemented comprehensive accessibility improvements to meet
                  WCAG 2.1 AA standards across all platforms. These changes
                  improved the experience for all users, not just those with
                  disabilities.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Contrast ratios of 4.5:1+ for all text elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Bold, persistent focus states with 3:1+ contrast against
                      backgrounds
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Color-blind safe iconography and information architecture
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Touch targets sized appropriately for mobile (44x44px
                      minimum)
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Box-First Component System
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Developed a scalable component grid that adapts intelligently
                  across TV (10-foot UI), mobile (touch), tablet (hybrid), and
                  in-car displays. Single design language maintains consistency
                  while respecting platform-specific interaction models.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Adaptive grid scales from 5" phones to 75" TVs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Platform-specific interaction patterns (remote vs touch)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Consistent visual language across all devices</span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Interaction Improvements Table */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              05
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Measured Interaction Improvements
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24">
            <GlassCard>
              <div className="p-6">
                <p className="text-gray-300 leading-relaxed mb-6">
                  By mapping click-paths before and after the redesign, I
                  quantified the interaction cost reduction for common user
                  journeys on TV (remote control). The results demonstrate
                  significant friction removal across all tasks.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="pb-4 pr-4 text-blue-400 font-semibold">
                          Task (TV Example)
                        </th>
                        <th className="pb-4 pr-4 text-blue-400 font-semibold">
                          Original Prototype
                        </th>
                        <th className="pb-4 pr-4 text-blue-400 font-semibold">
                          Redesigned Flow
                        </th>
                        <th className="pb-4 text-blue-400 font-semibold">
                          Improvement
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {interactionImprovements.map((item, index) => (
                        <tr key={index} className="border-b border-gray-800">
                          <td className="py-4 pr-4">{item.task}</td>
                          <td className="py-4 pr-4">{item.before}</td>
                          <td className="py-4 pr-4">{item.after}</td>
                          <td className="py-4">
                            <span className="font-bold text-green-400">
                              {item.improvement}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Outcomes & Deliverables */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              06
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Outcomes & Deliverables
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              The redesigned system was delivered as mid-fidelity Figma mockups
              with adaptive layouts across all target devices. The client's
              internal team continues implementation based on these proposals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    Design System Deliverables
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Comprehensive Figma documentation covering all device
                    contexts with adaptive component system.
                  </p>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    <li>• TV/10-foot UI layouts</li>
                    <li>• Mobile touch interface</li>
                    <li>• Tablet hybrid experience</li>
                    <li>• In-car display adaptations</li>
                  </ul>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    Accessibility Documentation
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    WCAG AA compliance guidelines with specific contrast ratios,
                    focus states, and interaction patterns.
                  </p>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    <li>• Contrast ratio specifications</li>
                    <li>• Focus indicator guidelines</li>
                    <li>• Color-blind safe palette</li>
                    <li>• Touch target sizing rules</li>
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
                      <strong>TV design requires different thinking:</strong>{" "}
                      What works on mobile doesn't translate to 10-foot
                      experiences. Focus indicators must be bold, text must be
                      high-contrast, and navigation requires clear
                      vertical/horizontal axes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
                    <span>
                      <strong>
                        Accessibility improvements benefit everyone:
                      </strong>{" "}
                      Better contrast helped users in bright rooms. Stronger
                      focus states improved TV viewing. Clear hierarchy reduced
                      cognitive load universally.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
                    <span>
                      <strong>Remove friction before adding features:</strong>{" "}
                      The biggest win came from removing the welcome screen, not
                      adding functionality. Sometimes the best design decision
                      is deletion.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
                    <span>
                      <strong>Quantify interaction costs:</strong> Mapping
                      click-paths (e.g., "9 taps → 6 taps = –33%") gave
                      stakeholders concrete proof. Data-driven storytelling.
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <GlassCard>
              <div className="text-center py-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Want to see more work?
                </h2>
                <p className="text-[#cbd5e1] mb-8 max-w-2xl mx-auto">
                  This is just one example of how I lead cross-functional teams
                  to deliver measurable business impact through strategic design
                  and technical leadership.
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
      </section>
    </div>
  );
}
