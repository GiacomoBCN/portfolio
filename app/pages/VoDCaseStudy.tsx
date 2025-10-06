"use client";
import React from "react";
import Link from "next/link";
import CaseStudyTemplate from "./CaseStudyTemplate";

export default function VoDCaseStudy() {
  const projectData = {
    // Hero data
    title: "VoD Platform Redesign",
    company: "Confidential Client (Dubai)",
    role: "Lead Product Designer & UX Consultant",
    year: "2020-2021",
    tags: ["UX Strategy", "Multi-platform", "B2B", "Accessibility", "TV Design"],
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",

    // Intro card data
    introCard: {
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=600&fit=crop",
      title: "Overview",
      content: [
        "The Client, based in Dubai, commissioned me to review and redesign the initial prototype of the VOD Platform. My role was to evaluate usability, visual clarity, and interaction flow, and to propose a unified home screen concept that could scale seamlessly across TV, mobile, tablet, and in-car displays.",
        "The platform needed to serve content across multiple contexts: traditional TV viewing, mobile on-the-go, tablet browsing, and in-car entertainment systems. The challenge was to create a cohesive experience that felt native to each platform while maintaining a unified design language."
      ]
    },

    // Overview data
    overview: {
      challenge: [
        "Complex 3-axis navigation causing user friction",
        "Poor legibility with light text over artwork",
        "Weak focus indicators for TV viewing",
        "Unnecessary entry gates before content access"
      ],
      role: [
        "Lead Product Designer & UX Consultant",
        "Heuristic evaluation & accessibility audit",
        "Cross-platform design strategy (TV, mobile, tablet, car)"
      ],
      impact: [
        "40% reduction in interaction steps",
        "WCAG AA compliant accessibility",
        "Unified design language across devices",
        "60% faster profile switching"
      ],
      timeline: [
        "6 months evaluation & redesign",
        "Multi-device design system",
        "Scaled across TV, mobile, tablet, in-car"
      ]
    },

    // Profile data
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    responsibilities: [
      "Conducted heuristic review and usability evaluation of initial prototype",
      "Identified accessibility gaps against WCAG standards",
      "Mapped user click-paths to quantify interaction costs",
      "Designed vertical rail navigation and horizontal tab system",
      "Created scalable component grid for TV, mobile, tablet, and car displays",
      "Delivered WCAG AA compliant design system in Figma"
    ],

    // Business context
    businessContext: [
      "A Dubai-based client commissioned me to review and redesign the initial prototype of their VOD Platform. The platform needed to serve content across multiple contexts: traditional TV viewing, mobile on-the-go, tablet browsing, and in-car entertainment systems.",
      "Market Challenge: The streaming market in the MENA region was becoming increasingly competitive, with global players entering the space. Users expected seamless, intuitive experiences similar to Netflix and Disney+, but localized for regional preferences and viewing contexts.",
      "Business Goal: Transform the prototype into a production-ready platform that could scale across all devices while reducing user friction, improving accessibility, and surfacing valuable content faster to increase engagement and retention."
    ],

    // Challenge
    challenge: {
      userProblems: [
        "Navigation fragmented across three axes (icon belt, tab row, horizontal carousels)",
        "Users had to zig-zag to complete basic tasks",
        "Light text over artwork created poor contrast and legibility issues",
        "Weak focus indicators made TV viewing difficult from 3 meters away",
        "Unnecessary 'Who's watching?' welcome screen added friction",
        "Experience was tiring and error-prone for casual viewers"
      ],
      businessConstraints: [
        "Must work across vastly different form factors (TV, mobile, tablet, car)",
        "Need to support both touch and remote control inputs",
        "Regional content requirements and localization needs",
        "Platform must scale for future device types",
        "Budget constraints for development resources"
      ],
      technicalComplexity: [
        "Different interaction models per platform (10-foot UI for TV vs touch)",
        "Performance optimization for various device capabilities",
        "Accessibility compliance across all platforms",
        "Component system must adapt to screen sizes from 5\" phones to 75\" TVs",
        "Focus management for remote control navigation"
      ]
    },

    // Leadership approach
    leadershipApproach: {
      people: [
        "Led heuristic evaluation with stakeholders",
        "Presented accessibility audit findings to leadership",
        "Collaborated with Dubai-based client team remotely",
        "Educated team on WCAG standards and TV design patterns",
        "Facilitated design reviews across time zones"
      ],
      product: [
        "Defined clear hypothesis: reduce to 2-axis navigation",
        "Set measurable goal: -40% interaction reduction",
        "Prioritized accessibility as core requirement, not afterthought",
        "Created scalable design system for all devices",
        "Focused on 'Continue Watching' as primary value proposition"
      ],
      execution: [
        "Started with heuristic review to identify pain points",
        "Mapped click-paths to quantify interaction costs",
        "Designed vertical rail + horizontal tab system",
        "Built box-first component grid for scalability",
        "Delivered mid-fidelity Figma mockups with adaptive layouts"
      ]
    },

    // Key decisions
    keyDecisions: [
      {
        point: "Navigation Architecture",
        options: ["Keep 3-axis system", "Reduce to 2-axis (vertical + horizontal)", "Single axis with deep menus"],
        rationale: "Two-axis navigation (vertical rail + horizontal tabs) provides clear mental model while reducing cognitive load. Scales perfectly across devices.",
        impact: "40% reduction in interaction steps"
      },
      {
        point: "Landing Experience",
        options: ["Keep 'Who's watching?' gate", "Direct to homepage", "Direct to Continue Watching"],
        rationale: "Removed welcome screen entirely, landing directly on Continue Watching. Users get immediate value without friction.",
        impact: "Faster time-to-content"
      },
      {
        point: "Accessibility Standards",
        options: ["Basic contrast fixes", "WCAG AA compliance", "WCAG AAA compliance"],
        rationale: "WCAG AA provides strong accessibility without over-constraining design. Essential for TV viewing and inclusive design.",
        impact: "Compliant with international standards"
      },
      {
        point: "Component System Approach",
        options: ["Device-specific designs", "Responsive single design", "Adaptive box-first grid"],
        rationale: "Box-first grid adapts intelligently to each context (TV, mobile, tablet, car) while maintaining design consistency.",
        impact: "Unified design language across all platforms"
      }
    ],

    // Outcomes
    outcomes: {
      metrics: [
        {
          value: "40%",
          label: "Interaction Reduction",
          context: "Fewer clicks/taps needed for common user journeys"
        },
        {
          value: "WCAG AA",
          label: "Accessibility Compliance",
          context: "Contrast ratios, focus states, color-blind safe"
        },
        {
          value: "60%",
          label: "Faster Profile Switch",
          context: "From ≥10 taps to just 4 taps"
        },
        {
          value: "4 devices",
          label: "Unified Design System",
          context: "TV, mobile, tablet, in-car displays"
        }
      ],
      before: [
        "Switch from Watch → Live TV to Shop → Groceries: 9 taps",
        "Go from landing hero to first row card: 2 taps",
        "Open profile switcher from content: ≥10 taps",
        "Light text over artwork: poor contrast",
        "Fragmented 3-axis navigation"
      ],
      after: [
        "Switch from Watch → Live TV to Shop → Groceries: 6 taps (–33%)",
        "Go from landing hero to first row card: 1 tap (–50%)",
        "Open profile switcher from content: 4 taps (–60%)",
        "WCAG AA compliant contrast ratios",
        "Clear 2-axis navigation (vertical + horizontal)"
      ]
    },

    // Learnings
    learnings: [
      {
        title: "TV design requires different thinking than mobile",
        description: "What works on a phone doesn't translate to a 10-foot experience. Focus indicators must be bold and persistent. Text must be larger and high-contrast. Remote control navigation requires a clear vertical/horizontal axis system, not the scattered tap-anywhere approach that works on touch screens."
      },
      {
        title: "Accessibility improvements benefit everyone",
        description: "Designing for WCAG AA compliance didn't just help users with disabilities—it improved the experience for everyone. Better contrast helped users in bright rooms. Stronger focus states helped all TV viewers. Clear visual hierarchy reduced cognitive load for casual users."
      },
      {
        title: "Remove friction before adding features",
        description: "The biggest win came from removing the 'Who's watching?' welcome screen, not from adding new functionality. Users don't want gates—they want content. Sometimes the best design decision is deletion."
      },
      {
        title: "Quantify interaction costs to build consensus",
        description: "Mapping click-paths and quantifying interaction steps (e.g., '9 taps → 6 taps = –33%') gave stakeholders concrete proof that the redesign worked. Data-driven storytelling is more persuasive than subjective opinions about 'good UX.'"
      }
    ],

    // Tech stack
    techStack: [
      "Figma", "WCAG 2.1 AA", "Heuristic Evaluation", "User Journey Mapping",
      "Component Design Systems", "Responsive Design", "Accessibility Auditing",
      "TV/10-foot UI Design", "Multi-platform Design"
    ]
  };

  return <CaseStudyTemplate projectData={projectData} />;
}
