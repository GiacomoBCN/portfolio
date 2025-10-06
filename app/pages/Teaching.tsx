"use client";
import React from "react";
import { GraduationCap, Users, BookOpen, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "../components/portfolio/SectionHeader";
import GlassCard from "../components/portfolio/GlassCard";

export default function Teaching() {
  const courses = [
    {
      name: "User Experience Design",
      program: "Master in Digital Business & Innovation",
      topics: ["User Research", "Wireframing & Prototyping", "Usability Testing", "Design Systems"],
      outcomes: ["Students ship real products", "Industry partnerships", "Portfolio-ready work"],
      tools: ["Figma", "Miro", "UserTesting", "Analytics"]
    },
    {
      name: "Product Management Fundamentals",
      program: "Master in Digital Business & Innovation",
      topics: ["Product Strategy", "Roadmap Planning", "Stakeholder Management", "Metrics & KPIs"],
      outcomes: ["Cross-functional thinking", "Business case development", "Data-driven decisions"],
      tools: ["Product Board", "JIRA", "Analytics", "SQL"]
    },
    {
      name: "Design Thinking Workshop",
      program: "Executive Education",
      topics: ["Ideation Techniques", "Rapid Prototyping", "User-Centered Innovation", "Team Collaboration"],
      outcomes: ["Innovation frameworks", "Prototyping skills", "Team facilitation"],
      tools: ["Miro", "Figma", "Physical Prototyping"]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative px-6 pt-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-[#00d4ff] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-3 glass rounded-full text-[#00d4ff] text-base md:text-lg uppercase tracking-[0.2em] font-semibold">
              Academic Leadership
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Teaching & Research
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-[#cbd5e1] mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            I bring real-world product expertise into the classroom, 
            teaching 500+ students how to build products that matter.
          </motion.p>
        </motion.div>
      </section>

      {/* Overview Stats */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Teaching Stats */}
            <GlassCard>
              <h3 className="text-2xl font-bold text-white mb-6">Teaching Experience</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' }}>
                    <GraduationCap size={24} className="text-[#00d4ff]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00d4ff]">7 years</div>
                    <div className="text-sm text-[#94a3b8]">EAE Business School</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' }}>
                    <Users size={24} className="text-[#00d4ff]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00d4ff]">500+</div>
                    <div className="text-sm text-[#94a3b8]">Students mentored</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' }}>
                    <BookOpen size={24} className="text-[#00d4ff]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00d4ff]">2</div>
                    <div className="text-sm text-[#94a3b8]">Master's programs</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' }}>
                    <TrendingUp size={24} className="text-[#00d4ff]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00d4ff]">19 teams</div>
                    <div className="text-sm text-[#94a3b8]">Managed annually</div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Right: Quick Facts */}
            <GlassCard delay={0.1}>
              <h3 className="text-2xl font-bold text-white mb-6">Teaching Approach</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-[rgba(255,255,255,0.08)]">
                  <h4 className="font-semibold text-white mb-2">Practice-Informed Pedagogy</h4>
                  <p className="text-[#cbd5e1] text-sm leading-relaxed">
                    Every lecture connects to real industry challenges I've solved. 
                    Students learn by doing, not just listening.
                  </p>
                </div>

                <div className="pb-4 border-b border-[rgba(255,255,255,0.08)]">
                  <h4 className="font-semibold text-white mb-2">Industry Partnerships</h4>
                  <p className="text-[#cbd5e1] text-sm leading-relaxed">
                    Students work on actual business problems with live clients, 
                    preparing them for real-world product roles.
                  </p>
                </div>

                <div className="pb-4 border-b border-[rgba(255,255,255,0.08)]">
                  <h4 className="font-semibold text-white mb-2">Portfolio Development</h4>
                  <p className="text-[#cbd5e1] text-sm leading-relaxed">
                    Every project becomes a case study students can showcase. 
                    Focus on outcomes, not just deliverables.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Continuous Mentorship</h4>
                  <p className="text-[#cbd5e1] text-sm leading-relaxed">
                    I stay connected with students beyond graduation, helping 
                    them navigate career transitions and job searches.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Courses Taught"
            subtitle="Bridging academic theory with industry practice"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <GlassCard key={index} delay={index * 0.1}>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{course.name}</h3>
                  <p className="text-sm text-[#00d4ff]">{course.program}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                    Key Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs glass rounded-full border border-[rgba(255,255,255,0.1)] text-[#cbd5e1]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                    Learning Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {course.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#cbd5e1] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 8px rgba(0, 212, 255, 0.5)' }}></span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {course.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs glass rounded-full border border-[#00d4ff] text-[#00d4ff]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Teaching Philosophy" />

          <GlassCard>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-[#cbd5e1] leading-relaxed mb-6">
                I believe the best product designers and managers learn by solving real problems, 
                not just studying theory. My teaching approach brings industry challenges directly 
                into the classroom.
              </p>

              <p className="text-lg text-[#cbd5e1] leading-relaxed mb-6">
                Every project students work on mirrors what they'll face in their careers: 
                ambiguous requirements, competing stakeholders, technical constraints, and 
                tight deadlines. I teach them how to navigate these complexities with 
                confidence and strategic thinking.
              </p>

              <p className="text-lg text-[#cbd5e1] leading-relaxed mb-6">
                My goal isn't just to teach design or product management—it's to develop 
                leaders who can bridge design, product, and engineering. Students learn to 
                speak multiple languages: the language of users, business, and technology.
              </p>

              <p className="text-lg text-[#cbd5e1] leading-relaxed">
                The measure of success isn't grades—it's career outcomes. My students go on 
                to lead products at top companies because they've already done the work during 
                their studies.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Research Background */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Research Background" />

          <GlassCard>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 glass rounded-full flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' }}>
                <Award size={32} className="text-[#00d4ff]" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  PhD in Industrial & Organizational Psychology
                </h3>
                <p className="text-[#cbd5e1] mb-4">
                  University of Barcelona • Focus: Human-Computer Interaction & Team Dynamics
                </p>

                <div className="space-y-4 mt-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Research Focus</h4>
                    <p className="text-[#cbd5e1] text-sm leading-relaxed">
                      My doctoral research explored how design decisions impact team collaboration 
                      and organizational outcomes. This academic foundation informs how I approach 
                      product leadership and design systems today.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Applied to Practice</h4>
                    <p className="text-[#cbd5e1] text-sm leading-relaxed">
                      Understanding organizational psychology helps me navigate complex stakeholder 
                      dynamics, build consensus across teams, and create systems that scale with 
                      human behavior in mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
