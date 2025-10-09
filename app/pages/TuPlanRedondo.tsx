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
  Smartphone,
  Zap,
  CheckCircle,
  BarChart3,
  Users,
  Database,
} from "lucide-react";
import OverviewCard from "../components/work/OverviewCard";
import DecisionTable from "../components/work/DecisionTable";
import GlassCard from "../components/portfolio/GlassCard";
import ProjectIntroCard from "../components/work/ProjectIntroCard";
import ProjectGallery from "../components/work/ProjectGallery";
import { getImagePath } from "@/utils/image";

export default function TuPlanRedondo() {
  const keyDecisions = [
    {
      point: "Technology Approach",
      options: [
        "Native app (iOS/Android)",
        "Hybrid app",
        "Progressive Web App",
      ],
      rationale:
        "PWA eliminated app store friction and installation barriers while enabling instant deployment across all devices. Franchise managers could access the tool immediately through a browser without IT approval or device management overhead.",
      impact: "30% cost savings, zero installation friction",
    },
    {
      point: "Offline Strategy",
      options: [
        "Online-only",
        "Basic caching",
        "Full offline-first architecture",
      ],
      rationale:
        "Field evaluators often work in areas with poor connectivity (restaurant back-of-house, parking lots). Offline-first architecture with local storage and background sync ensured data capture never failed due to network issues.",
      impact: "100% data capture reliability",
    },
    {
      point: "Authentication Model",
      options: ["Open access", "Simple PIN", "Secure credential login"],
      rationale:
        "Employee performance data required secure authentication with role-based access. Managers needed dashboard visibility while field evaluators only accessed evaluation forms. Credential-based login protected sensitive HR data.",
      impact: "Compliance with data privacy requirements",
    },
    {
      point: "Dashboard Complexity",
      options: [
        "Basic reports",
        "Static analytics",
        "Real-time interactive dashboard",
      ],
      rationale:
        "Management needed immediate visibility into evaluation trends to respond quickly to performance issues. Real-time dashboard enabled data-driven decisions without waiting for manual report generation.",
      impact: "Faster response to performance issues",
    },
  ];

  const achievements = [
    {
      icon: Zap,
      metric: "30%",
      label: "Time Savings",
      description: "Reduced manual evaluation time",
    },
    {
      icon: CheckCircle,
      metric: "25%",
      label: "Satisfaction ↑",
      description: "Improved evaluator experience",
    },
    {
      icon: Database,
      metric: "30%",
      label: "Cost Reduction",
      description: "PWA vs native app development",
    },
    {
      icon: BarChart3,
      metric: "Real-time",
      label: "Analytics",
      description: "Instant performance insights",
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
            Home &gt; Product Work &gt; TuPlanRedondo PWA
          </p>
          <div className="mb-4">
            <span className="text-xs uppercase tracking-wider text-blue-400">
              B2B PWA · FIELD OPERATIONS
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            TuPlanRedondo PWA for McDonald's Franchise
          </h1>
          <p className="text-lg text-gray-400 mb-4">
            Product Design & Development Developer
          </p>
          <p className="text-xl text-gray-300 mb-8">
            Streamlined employee evaluation workflows with a Progressive Web
            App, saving 30% time and boosting satisfaction by 25%.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "End-to-end UX/UI Process",
              "Figma",
              "Front-End Development",
              "PWA",
              "HTML5",
              "CSS3",
              "Bootstrap",
              "JavaScript",
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
        image={getImagePath("images/projects/mc-1.png")}
        title="Digitizing Employee Evaluations for Field Operations"
        showGradient={false}
      >
        <p className="text-gray-300 leading-relaxed">
          A McDonald's franchise managing multiple locations needed to modernize
          their employee performance evaluation process. Managers were
          conducting evaluations manually with paper forms, leading to data
          entry errors, delays in reporting, and no centralized way to track
          performance trends across restaurants.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I designed and developed TuPlanRedondo, a Progressive Web App that
          digitized the entire evaluation workflow. The solution enabled field
          managers to conduct assessments on tablets and smartphones,
          automatically sync data to a real-time dashboard, and eliminated the
          need for app downloads through browser-based access. The result: 30%
          time savings, 25% satisfaction improvement, and 30% cost reduction
          compared to native app development.
        </p>
      </ProjectIntroCard>

      {/* Overview - 3 COLUMNS */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OverviewCard icon={AlertCircle} title="The Challenge">
              Manual paper-based evaluations were time-consuming and
              error-prone. No centralized data collection tool existed. Client
              needed lightweight solution without app installation requirements.
            </OverviewCard>

            <OverviewCard icon={User} title="My Role">
              <p className="font-semibold mb-2">
                Product Design & Development Developer
              </p>
              <ul className="space-y-1 text-xs">
                <li>• User research & usability testing</li>
                <li>• UI/UX design & prototyping</li>
                <li>• PWA front-end development</li>
                <li>• Dashboard analytics design</li>
              </ul>
            </OverviewCard>

            <OverviewCard icon={TrendingUp} title="Impact">
              <ul className="space-y-1">
                <li>• 30% time savings on evaluations</li>
                <li>• 25% satisfaction increase</li>
                <li>• 30% cost reduction vs native app</li>
                <li>• Real-time performance insights</li>
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

      {/* Project Gallery */}
      <ProjectGallery
        title="Design & Development"
        images={[
          {
            src: getImagePath("images/projects/mc-2.png"),
            alt: "Design system and user flow documentation",
          },
          {
            src: getImagePath("images/projects/mc-3.png"),
            alt: "Mobile evaluation interface and dashboard",
          },
          {
            src: getImagePath("images/projects/mc-4.png"),
            alt: "PWA architecture - standalone and browser modes",
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
              The McDonald's franchise operated multiple restaurant locations
              and needed a scalable way to conduct employee performance
              evaluations. The existing process relied on paper forms that
              managers filled out during shift observations, then manually
              transferred to spreadsheets for reporting. This workflow was slow,
              prone to transcription errors, and provided no real-time
              visibility into performance trends.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Management wanted a digital solution but faced constraints: field
              evaluators used a mix of personal and company devices (tablets,
              smartphones, laptops), IT resources were limited, and app store
              approval/installation processes were seen as too complex and slow.
              The franchise needed a tool that "just worked" without requiring
              users to download anything or IT teams to manage device
              configurations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Additionally, the solution needed to work reliably in environments
              with poor connectivity—restaurant back-of-house areas, parking
              lots during outdoor evaluations, and remote locations with limited
              cellular coverage. Data capture failures due to network issues
              were unacceptable, as evaluators couldn't return to re-observe
              employee performance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Research & Problem Definition */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              02
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Research & Problem Definition
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24 space-y-6">
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  User Research Process
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I conducted comprehensive research to understand both
                  evaluator workflows and management reporting needs, combining
                  qualitative interviews with iterative usability testing.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Desk research:</strong> Analyzed existing paper
                      forms and spreadsheet workflows
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>5 user interviews:</strong> Field evaluators and
                      restaurant managers to understand pain points
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Affinity mapping:</strong> Synthesized insights
                      into themes around efficiency, accuracy, and reporting
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Personas:</strong> Developed profiles for field
                      evaluators and franchise managers
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Journey mapping:</strong> Documented end-to-end
                      evaluation and reporting workflows
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>10 usability tests:</strong> Iterative testing
                      validated design decisions and interaction patterns
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Key Findings
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Research revealed critical pain points that shaped the product
                  requirements and design approach.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Time waste:</strong> Managers spent 30-40 minutes
                      per evaluation between observation, paper completion, and
                      data entry
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Transcription errors:</strong> Manual data entry
                      from paper to spreadsheets introduced mistakes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Delayed insights:</strong> Weeks passed before
                      management could see performance trends
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>App friction:</strong> Users strongly resisted
                      downloading apps due to device storage concerns
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Connectivity issues:</strong> Evaluators
                      frequently experienced network failures during data
                      submission
                    </span>
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

      {/* Section 4: Design Solution */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              04
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Design & Development Solution
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24 space-y-6">
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Progressive Web App Architecture
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Built as a PWA using HTML5, Bootstrap 4, CSS3, and JavaScript
                  with service workers for offline functionality. Users access
                  the app through any browser—no installation required—but can
                  optionally "install" it for a native-like home screen
                  experience.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Browser mode:</strong> Instant access via URL, no
                      friction
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Standalone mode:</strong> Optional home screen
                      install for native app feel
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Offline-first:</strong> Service workers cache UI
                      and queue data for background sync
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Responsive design:</strong> Single codebase works
                      on tablets, phones, and laptops
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Streamlined Evaluation Interface
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Designed evaluation forms to match the mental model of paper
                  workflows while leveraging digital affordances. Visual
                  indicators (thumbs up/down, color coding) enabled fast data
                  entry during observations.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Employee selection with avatar-based visual identification
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Quick-tap approval/rejection for common criteria (food
                      safety, cleanliness, appearance)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      McDonald's brand colors (green = approved, red = needs
                      improvement) for instant recognition
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Auto-save functionality ensured no data loss if evaluators
                      were interrupted
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Real-Time Management Dashboard
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Built an analytics dashboard that gave franchise management
                  instant visibility into evaluation results. Data synced
                  automatically as evaluators submitted assessments, eliminating
                  the weeks-long delay of manual reporting.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Performance trends by employee, restaurant, and evaluation
                      category
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Visual charts showing approval rates over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Drill-down capability to view individual evaluation
                      details
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Role-based access: managers see all data, evaluators only
                      see their submissions
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Brand-Aligned Visual Design
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Created all icons and visual elements to align with McDonald's
                  brand guidelines while maintaining clarity and usability. The
                  design balanced brand recognition with functional
                  requirements.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      McDonald's golden arches and brand colors throughout the
                      interface
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Custom icons for evaluation categories matching McDonald's
                      visual language
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Clean, professional typography appropriate for franchise
                      operations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Consistent spacing and layout following Bootstrap's
                      responsive grid system
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
              05
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Development & Delivery
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-24">
            <GlassCard>
              <div className="p-6">
                <p className="text-gray-300 leading-relaxed mb-6">
                  As the sole designer and front-end developer, I owned the
                  entire product lifecycle from research through production
                  deployment. The project followed an iterative process with
                  continuous user feedback.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="pb-4 pr-4 text-blue-400 font-semibold">
                          Phase
                        </th>
                        <th className="pb-4 pr-4 text-blue-400 font-semibold">
                          Activities
                        </th>
                        <th className="pb-4 pr-4 text-blue-400 font-semibold">
                          Purpose
                        </th>
                        <th className="pb-4 text-blue-400 font-semibold">
                          Deliverables
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Research</td>
                        <td className="py-4 pr-4">
                          Desk research, 5 interviews, affinity mapping,
                          personas
                        </td>
                        <td className="py-4 pr-4">
                          Understand workflows, pain points, and requirements
                        </td>
                        <td className="py-4">
                          Research findings, user personas, journey maps
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Design</td>
                        <td className="py-4 pr-4">
                          Wireframes, mockups, visual design system
                        </td>
                        <td className="py-4 pr-4">
                          Define UI patterns and user flows
                        </td>
                        <td className="py-4">
                          Figma prototypes, icon library, component specs
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Validate</td>
                        <td className="py-4 pr-4">
                          10 usability tests with evaluators and managers
                        </td>
                        <td className="py-4 pr-4">
                          Verify usability and gather feedback
                        </td>
                        <td className="py-4">
                          Usability findings, design refinements
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Build</td>
                        <td className="py-4 pr-4">
                          HTML5, Bootstrap 4, JavaScript, PWA features
                        </td>
                        <td className="py-4 pr-4">
                          Develop responsive, offline-capable web app
                        </td>
                        <td className="py-4">
                          Working PWA with evaluation and dashboard modules
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 pr-4">Deploy</td>
                        <td className="py-4 pr-4">
                          Hosting setup, SSL configuration, user training
                        </td>
                        <td className="py-4 pr-4">
                          Launch to franchise locations
                        </td>
                        <td className="py-4">
                          Production app, training documentation
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl font-bold text-blue-400 opacity-20">
              06
            </div>
            <div className="flex-1 pt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Business Impact & Results
              </h2>
            </div>
          </div>

          <div className="pl-0 md:pl-24 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              The PWA delivered measurable improvements in efficiency, cost, and
              user satisfaction while establishing a scalable foundation for
              future franchise operations tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    Operational Efficiency
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>
                      <strong>30% time savings:</strong> Evaluations that took
                      30-40 minutes now complete in 20-25 minutes
                    </li>
                    <li>
                      <strong>Eliminated data entry:</strong> Zero manual
                      transcription from paper to spreadsheets
                    </li>
                    <li>
                      <strong>Real-time insights:</strong> Management sees
                      performance data instantly instead of weeks later
                    </li>
                    <li>
                      <strong>100% data reliability:</strong> Offline-first
                      architecture prevented data loss from connectivity issues
                    </li>
                  </ul>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    Cost & User Experience
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>
                      <strong>30% cost reduction:</strong> PWA development
                      cheaper than native iOS + Android apps
                    </li>
                    <li>
                      <strong>Zero installation friction:</strong> Users access
                      via browser without app store approval delays
                    </li>
                    <li>
                      <strong>25% satisfaction increase:</strong> Evaluators and
                      managers praised simplicity and speed
                    </li>
                    <li>
                      <strong>Cross-device compatibility:</strong> Single
                      codebase works on tablets, phones, and laptops
                    </li>
                  </ul>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
