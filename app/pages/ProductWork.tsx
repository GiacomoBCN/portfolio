import React from "react";
import ProjectListingCard from "../components/work/ProjectListingCard";

export default function ProductWork() {
  const projects = [
    {
      category: "DESIGN SYSTEMS · ENTERPRISE",
      title: "Dow Jones Design System",
      role: "Lead Design Technologist",
      year: "2022-2025",
      description: "Governance of a unified design system adopted across B2B and B2C brands, boosting team productivity by 30% and reducing component complexity by 20%.",
      metrics: [
        { value: "60+", label: "Designers" },
        { value: "200K+", label: "References" },
        { value: "30%", label: "Efficiency" }
      ],
      tags: ["Figma", "React", "Design Tokens", "Storybook", "CI/CD"],
      slug: "DowJones"
    },
    {
      category: "PRODUCT STRATEGY · B2B",
      title: "VoD Platform Redesign",
      role: "Product Consultant",
      year: "2024",
      description: "Redesigned cross-device VOD experience, cutting interaction steps by 40% and achieving WCAG AA compliance across TV, mobile, and in-car displays.",
      metrics: [
        { value: "40%", label: "Steps Reduced" },
        { value: "WCAG AA", label: "Compliant" },
        { value: "5", label: "Platforms" }
      ],
      tags: ["Figma", "UX Research", "Multi-platform", "Accessibility"],
      slug: "VoDCaseStudy"
    },
    {
      category: "GROWTH · BUSINESS IMPACT",
      title: "XpuntoCero Digital Transformation",
      role: "Product Designer & Front-End",
      year: "2019-2022",
      description: "Rebranded SaaS company with PWA redesign, increasing mobile traffic by 40%, leads by 15%, and customer satisfaction by 30%.",
      metrics: [
        { value: "40%", label: "Traffic" },
        { value: "15%", label: "Leads" },
        { value: "30%", label: "Satisfaction" }
      ],
      tags: ["PWA", "WordPress", "Branding", "Front-End"],
      slug: "XpuntoCero"
    },
    {
      category: "PRODUCT STRATEGY · B2B SAAS",
      title: "SGPV Product Evolution",
      role: "Product Designer & Front-End",
      year: "2019-2022",
      description: "Led multi-year product evolution from PhoneGap to Flutter, serving 15 B2B clients with AI-powered features, reducing task time by 25%.",
      metrics: [
        { value: "15", label: "Clients" },
        { value: "25%", label: "Faster" },
        { value: "30%", label: "Satisfaction" }
      ],
      tags: ["Flutter", "PhoneGap", "AI", "Mobile", "B2B"],
      slug: "SGPVEvolution"
    },
    {
      category: "PRODUCT MANAGEMENT · PORTFOLIO",
      title: "E-Commerce Product Management",
      role: "Project Manager & Product Designer",
      year: "2019-2022",
      description: "Managed multiple e-commerce projects with 95% client satisfaction, 90% on-time delivery, and 20% boost in team productivity.",
      metrics: [
        { value: "95%", label: "Satisfaction" },
        { value: "90%", label: "On-Time" },
        { value: "20%", label: "Productivity" }
      ],
      tags: ["WordPress", "WooCommerce", "Agile", "Stakeholder Management"],
      slug: "EcommerceManagement"
    },
    {
      category: "TECHNICAL LEADERSHIP · SCALABILITY",
      title: "Back Office Unification",
      role: "Product Designer & Front-End",
      year: "2019-2022",
      description: "Unified 15 client portals with shared CSS and assets, reducing redundant work and enabling scalable updates across all platforms.",
      metrics: [
        { value: "15", label: "Portals" },
        { value: "99%", label: "Code Reuse" },
        { value: "80%", label: "Efficiency" }
      ],
      tags: ["Bootstrap", "CSS", "Scalability", "Multi-tenant"],
      slug: "BackOffice"
    },
    {
      category: "B2B SAAS · FIELD OPERATIONS",
      title: "TuPlanRedondo PWA",
      role: "Product Designer & Front-End",
      year: "2020-2021",
      description: "Streamlined evaluation user flows with a PWA for McDonald's franchise, saving 30% time and boosting satisfaction by 25%.",
      metrics: [
        { value: "30%", label: "Time Saved" },
        { value: "25%", label: "Satisfaction" },
        { value: "Real-time", label: "Data" }
      ],
      tags: ["PWA", "Bootstrap", "JavaScript", "Field Ops"],
      slug: "TuPlanRedondo"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 glass rounded-full text-blue-400 text-base md:text-lg uppercase tracking-[0.2em] font-semibold">
              All Projects
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Product Work
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Strategic product leadership with measurable business impact
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Over 8+ years, I've led product initiatives from enterprise design systems 
            to B2B SaaS transformations. Each project demonstrates cross-functional 
            leadership, strategic thinking, and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectListingCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}