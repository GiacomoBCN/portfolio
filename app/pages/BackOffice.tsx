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
  Zap,
  CheckCircle,
  GitBranch,
  Layers,
  Wrench,
  Cloud,
  ServerCog,
} from "lucide-react";
import OverviewCard from "../components/work/OverviewCard";
import DecisionTable from "../components/work/DecisionTable";
import GlassCard from "../components/portfolio/GlassCard";
import ProjectIntroCard from "../components/work/ProjectIntroCard";
import ProjectGallery from "../components/work/ProjectGallery";
import { getImagePath } from "@/utils/image";

export default function OnlineBackOfficeCaseStudy() {
  const keyDecisions = [
    {
      point: "Architecture Strategy",
      options: [
        "Maintain per-client codebases",
        "Monorepo with themed builds",
        "Single shared core + client themes",
      ],
      rationale:
        "Created a single shared core (HTML structure + components) styled via one CSS and a shared asset folder. Client-specific tokens/themes override variables without touching core markup.",
      impact: "99% code reuse across portals",
    },
    {
      point: "Asset Management",
      options: [
        "Duplicate assets per client",
        "CDN per client",
        "Shared assets with client overrides",
      ],
      rationale:
        "Icons and images were centralized. Only logo and color tokens vary per client. This reduced duplication and guaranteed consistency.",
      impact: "80% faster deployment of visual updates",
    },
    {
      point: "Delivery Pipeline",
      options: [
        "Manual FTP per client",
        "Per-repo Git flow",
        "Git-based propagation to all clients",
      ],
      rationale:
        "Git-driven releases: update once in core, propagate to 15+ client portals via branches. Rollbacks and hotfixes became trivial.",
      impact: "Minutes to roll out changes (vs days)",
    },
    {
      point: "Mobile Strategy",
      options: [
        "Tablet-only",
        "Responsive but tablet-first",
        "Responsive mobile-first",
      ],
      rationale:
        "Reworked layout grid and components to be fully functional on smartphones. This unlocked field usage without extra hardware.",
      impact: "20% hardware cost reduction",
    },
  ];

  const achievements = [
    {
      icon: Layers,
      metric: "99%",
      label: "Code Reuse",
      description: "Single core shared across all portals",
    },
    {
      icon: Zap,
      metric: "80%",
      label: "Efficiency Gain",
      description: "Faster testing & deployment via shared CSS/icons",
    },
    {
      icon: CheckCircle,
      metric: "15+",
      label: "Clients Unified",
      description: "Consistent UX with themed customization",
    },
    {
      icon: Smartphone,
      metric: "20%",
      label: "Cost Savings",
      description: "No tablets required thanks to mobile-first",
    },
  ];

  const rolloutImprovements = [
    {
      task: "Apply a visual fix to a component",
      before: "15 repos / manual uploads",
      after: "1 core change → propagate",
      improvement: "–90% effort",
    },
    {
      task: "Add a new icon to all portals",
      before: "Duplicate in every client",
      after: "Drop once in shared assets",
      improvement: "–95% duplication",
    },
    {
      task: "Release a hotfix",
      before: "Per-client packaging",
      after: "Git branch → merge → deploy",
      improvement: "Hours → Minutes",
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
            Home &gt; Product Work &gt; Online Back Office
          </p>
          <div className="mb-4">
            <span className="text-xs uppercase tracking-wider text-blue-400">
              PRODUCT DESIGN · FRONT-END · SCALABILITY
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Online Back Office Unification
          </h1>
          <p className="text-lg text-gray-400 mb-4">
            Product Designer & Front‑End Developer · XpuntoCero (Barcelona)
          </p>
          <p className="text-xl text-gray-300 mb-8">
            Unified 15 client portals into a scalable system using a single CSS
            and shared assets. Achieved 99% code reuse, 80% efficiency
            improvement in rollouts, and enabled smartphone‑first usage that cut
            hardware costs by 20%.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Figma",
              "Bootstrap 4",
              "CSS3",
              "Git Workflow",
              "Responsive Web",
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
        image={getImagePath("images/projects/OnlineBackOffice-1.png")}
        title="From Client Forks to a Unified, Scalable Platform"
        showGradient={false}
      >
        <p className="text-gray-300 leading-relaxed">
          Over the years, each customer's back‑office portal had drifted with
          bespoke tweaks and duplicated assets. Updates were slow and
          inconsistent, and maintaining parity across clients was becoming
          unsustainable. My mandate: keep each client's branding, but collapse
          maintenance into a single, scalable system.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I redesigned the UI kit, consolidated CSS, and set up a Git‑based
          release model so improvements ship once and land everywhere. The
          result preserved customization while eliminating redundant work.
        </p>
      </ProjectIntroCard>

      {/* Overview */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OverviewCard icon={AlertCircle} title="The Challenge">
              Fragmented forks, duplicated assets, and manual per‑client
              releases made scaling and QA expensive and slow.
            </OverviewCard>

            <OverviewCard icon={User} title="My Role">
              <p className="font-semibold mb-2">Product Designer & Front‑End</p>
              <ul className="space-y-1 text-xs">
                <li>• CSS architecture & component refactor</li>
                <li>• Iconography & shared assets system</li>
                <li>• Release process via Git branches</li>
              </ul>
            </OverviewCard>

            <OverviewCard icon={TrendingUp} title="Impact">
              <ul className="space-y-1">
                <li>• 99% core code reuse</li>
                <li>• 80% faster cross‑client updates</li>
                <li>• 15+ portals unified</li>
                <li>• 20% hardware cost savings</li>
              </ul>
            </OverviewCard>
          </div>
        </div>
      </section>

      {/* Metrics Showcase */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Program Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <GlassCard key={i}>
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                    <a.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {a.metric}
                  </div>
                  <div className="text-sm font-semibold text-blue-400 mb-2">
                    {a.label}
                  </div>
                  <div className="text-xs text-gray-400">{a.description}</div>
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
            src: getImagePath("images/projects/OnlineBackOffice-2.png"),
            alt: "Legacy vs New dashboards",
          },
          {
            src: getImagePath("images/projects/OnlineBackOffice-3.png"),
            alt: "Tables and data views – old vs new",
          },
          {
            src: getImagePath("images/projects/OnlineBackOffice-4.png"),
            alt: "Unified approach diagram & laptop",
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
              XpuntoCero provides back‑office portals for FMCG and out‑of‑home
              clients. Years of customization created inconsistencies and slowed
              delivery. Clients wanted frequent updates without losing their
              branding.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The goal was a unified approach that preserved client identity
              while enabling centralized changes and predictable releases across
              the entire estate.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Problem & Hypothesis */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              02
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Problem & Hypothesis
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24 space-y-6">
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  The Problem
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    • Inconsistent UI across portals due to heavy per‑client
                    customization
                  </li>
                  <li>• Increased development time and QA overhead</li>
                  <li>• Updates could not be applied uniformly</li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Hypothesis
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  By concentrating changes in a single CSS file and a shared
                  image/icon folder, we can roll out UI updates to all portals
                  at once via Git, maintain client customization via themes, and
                  dramatically reduce duplicated work.
                </p>
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
                Key Decisions & Trade‑offs
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24">
            <DecisionTable decisions={keyDecisions} />
          </div>
        </div>
      </section>

      {/* Section 4: The Solution */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              04
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                The Unified Solution
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24 space-y-6">
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Single CSS + Shared Assets
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Re‑architected the styles into one maintainable CSS with
                  variables and mixins. Introduced a shared icon/image library;
                  per‑client themes only override tokens and logos.
                </p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Git‑Based Propagation
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Changes are made in the core, merged through branches, and
                  deployed to all client portals. Hotfixes and rollbacks are
                  safe and auditable.
                </p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Mobile‑First Responsiveness
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The UI now works perfectly on smartphones, removing the need
                  for dedicated tablets in the field and improving adoption
                  across roles.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Interaction / Rollout Improvements */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              05
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Operational Improvements
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24">
            <GlassCard>
              <div className="p-6">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Centralization turned multi‑client maintenance into a
                  productized workflow. Below are representative changes in
                  effort/time to ship.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="pb-4 pr-4 text-blue-400 font-semibold">
                          Task
                        </th>
                        <th className="pb-4 pr-4 text-blue-400 font-semibold">
                          Before
                        </th>
                        <th className="pb-4 pr-4 text-blue-400 font-semibold">
                          After
                        </th>
                        <th className="pb-4 text-blue-400 font-semibold">
                          Improvement
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {rolloutImprovements.map((item, i) => (
                        <tr key={i} className="border-b border-gray-800">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    Front‑End
                  </h3>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    <li>• Unified CSS architecture with tokens</li>
                    <li>• Shared iconography & image library</li>
                    <li>• Bootstrap‑based responsive components</li>
                  </ul>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    Process & Governance
                  </h3>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    <li>• Git release workflow for multi‑client rollouts</li>
                    <li>• Branching model for hotfixes and theming</li>
                    <li>• QA checklist and A/B testing framework</li>
                  </ul>
                </div>
              </GlassCard>
            </div>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">
                  Phase 1 Results
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>
                    → <strong>Scalability:</strong> Re‑styled and deployed
                    across 15+ clients with centralized updates.
                  </li>
                  <li>
                    → <strong>Cost Savings:</strong> Smartphone‑ready experience
                    removed the need for tablets (≈20% hardware savings).
                  </li>
                  <li>
                    → <strong>Development Efficiency:</strong> Focusing on core
                    CSS + icons enabled ~80% faster updates across portals.
                  </li>
                  <li>
                    → <strong>Development Speed:</strong> Centralized design and
                    development enabled future updates to be implemented ~25%
                    faster.
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
                  This case study shows how a design‑led front‑end refactor can
                  unlock scale and lower costs across a legacy estate.
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
