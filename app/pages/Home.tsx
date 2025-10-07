
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { createPageUrl } from "@/utils";
import {
  ChevronDown,
  Layers,
  TrendingUp,
  GraduationCap,
  Users,
  Package,
  Zap,
  Code,
  Sparkles,
  Briefcase
} from "lucide-react";

import { motion } from "framer-motion";
import SectionHeader from "../components/portfolio/SectionHeader";
import MetricCard from "../components/portfolio/MetricCard";
import LeadershipCard from "../components/portfolio/LeadershipCard";
import ProjectCard from "../components/portfolio/ProjectCard";
import GlassCard from "../components/portfolio/GlassCard";
import ExpandableText from "../components/ExpandableText";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-[#0066ff] rounded-full opacity-10 blur-3xl"></div>
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
            <span className="inline-block px-6 py-3 glass rounded-full text-[#0066ff] text-base md:text-lg uppercase tracking-[0.2em] font-semibold">
              Product & Design Leadership
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Giacomo Bianchi, PhD
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-[#cbd5e1] mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I lead cross-functional teams to build products that balance user needs with business impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#work"
              className="px-8 py-4 bg-[#0066ff] rounded-xl text-white font-semibold hover:bg-[#0052cc] transition-all duration-200 glow-blue hover:scale-105"
            >
              View Product Work →
            </a>
            <Link
            href={createPageUrl("Teaching")}
              className="px-8 py-4 glass rounded-xl text-white font-semibold hover:bg-[#0066ff] hover:border-[#0066ff] transition-all duration-200"
            >
              View Teaching Portfolio →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
            className="flex justify-center"
          >
            <ChevronDown size={32} className="text-[#0066ff] glow-blue" />
          </motion.div>
        </motion.div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Driving Measurable Impact"
            subtitle="Leading through data, delivering results"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MetricCard
              icon={Layers}
              headline="60+"
              metrics={[
                "Designers aligned across 8 brands",
                "200K+ component references",
                "Co-led enterprise design system"
              ]}
              delay={0}
            />
            <MetricCard
              icon={TrendingUp}
              headline="60%"
              metrics={[
                "Friction reduction (VoD platform)",
                "40% mobile traffic increase",
                "30% efficiency improvement"
              ]}
              delay={0.1}
            />
            <MetricCard
              icon={GraduationCap}
              headline="500+"
              metrics={[
                "Students mentored over 7 years",
                "19 project teams annually",
                "2 master's programs taught"
              ]}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* How I Lead Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="How I Lead"
            subtitle="Through people, product, and strategy"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LeadershipCard
              icon={Users}
              title="Through People"
              points={[
                "Mentored designers and managed contractors",
                "Aligned 120+ cross-functional stakeholders",
                "Built collaborative culture through critique",
                "Taught 500+ students (7 years university level)",
                "Promoted design excellence through mentorship"
              ]}
              delay={0}
            />
            <LeadershipCard
              icon={Package}
              title="Through Product"
              points={[
                "Co-led design system roadmap and prioritization",
                "Managed feature backlog for B2B platforms",
                "Defined success metrics and tracked KPIs",
                "Drove decisions based on research and data",
                "Balanced user value with business constraints"
              ]}
              delay={0.1}
            />
            <LeadershipCard
              icon={Zap}
              title="Through Strategy"
              points={[
                "Made trade-off decisions across competing needs",
                "Facilitated alignment across 8 brands",
                "Translated complexity into actionable roadmaps",
                "Embedded accessibility into governance",
                "Connected design to business outcomes"
              ]}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Featured Work"
            subtitle="Strategic product leadership with measurable impact"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              role="Enterprise Leadership"
              title="Dow Jones Design System"
              company="Dow Jones"
              timeframe="2021-2024"
              description="Co-led enterprise design system serving 8 brands, aligning 60+ designers and generating 200K+ component references."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
              metrics={[
                { value: "60%", label: "Friction Reduced" },
                { value: "200K+", label: "Component Refs" },
                { value: "8", label: "Brands Unified" }
              ]}
              tags={["Design Systems", "Leadership", "Figma", "Storybook"]}
              link={createPageUrl("DowJones")}
              delay={0}
            />

            <ProjectCard
              role="B2B Multi-platform"
              title="VoD Platform Redesign"
              company="Confidential Client"
              timeframe="2020-2021"
              description="Led multi-platform redesign reducing friction by 60% while increasing mobile traffic 40%."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop"
              metrics={[
                { value: "60%", label: "Less Friction" },
                { value: "40%", label: "Mobile Growth" },
                { value: "3", label: "Platforms" }
              ]}
              tags={["UX Strategy", "Mobile", "Web", "Analytics"]}
              link={createPageUrl("VoDCaseStudy")}
              delay={0.1}
            />

            <ProjectCard
              role="Growth & Business Impact"
              title="XpuntoCero Digital Transformation"
              company="XpuntoCero"
              timeframe="2019-2020"
              description="Drove digital transformation resulting in 30% operational efficiency improvements."
              image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop"
              metrics={[
                { value: "30%", label: "Efficiency" },
                { value: "500K", label: "Yearly Sales" },
                { value: "24/7", label: "Availability" }
              ]}
              tags={["Strategy", "E-commerce", "Analytics"]}
              link={createPageUrl("XpuntoCero")}
              delay={0.2}
            />

            <ProjectCard
              role="B2B SaaS Long-term"
              title="SGPV Product Evolution"
              company="SGPV"
              timeframe="2016-2019"
              description="Led product evolution for enterprise SaaS platform over 3 years."
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop"
              metrics={[
                { value: "3yrs", label: "Evolution" },
                { value: "B2B", label: "Enterprise" },
                { value: "100%", label: "Adoption" }
              ]}
              tags={["SaaS", "Product Strategy", "Enterprise"]}
              link={createPageUrl("SGPVEvolution")}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0066ff]/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            title="How I Work"
            subtitle="I don't just design—I prototype, code, and validate through technical fluency"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center flex-shrink-0 glow-blue">
                  <Code size={24} className="text-[#0066ff]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Front-End Development
                  </h3>
                  <p className="text-sm text-[#94a3b8]">
                    React, Flutter, Dart, HTML5, CSS3, JavaScript, Bootstrap
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.1}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center flex-shrink-0 glow-blue">
                  <Sparkles size={24} className="text-[#0066ff]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    AI-Augmented Workflow
                  </h3>
                  <p className="text-sm text-[#94a3b8]">
                    ChatGPT, GitHub Copilot, Vertex AI, Midjourney
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center flex-shrink-0 glow-blue">
                  <Layers size={24} className="text-[#0066ff]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Design Systems
                  </h3>
                  <p className="text-sm text-[#94a3b8]">
                    Figma, Design Tokens, Storybook, Git, CI/CD
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-[#cbd5e1] leading-relaxed">
              My technical background allows me to prototype rapidly, participate in engineering
              discussions, and earn developer respect. I use AI tools to validate ideas in hours,
              not weeks—building working prototypes that teams can react to instead of debating
              abstract specs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="What Colleagues Say" />

          <div className="space-y-12">
            <GlassCard>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-1">
                  <ExpandableText>
                  <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-4">
                    "Giacomo is a very good assets when it comes to build bridges between design and tech. Not only he has a very good understanding of both sides. His best characteristic is the ability to talk to both in their own languages and to be the medium across the two world, communicating efficiently needs, constraints and opportunities. Last but not least, he his a good team player, able to build boundaries with everyone in the office, which comes to a benefit to the design team. 
                    He is also very good in research and humanistic approach. His ability to capture requirements and information out of interviews and focus groups is fantastic. Something I really value from a person in his position." </p></ExpandableText>
                  <div>
                    <p className="font-semibold text-white">Antonella Sassu</p>
                    <p className="text-sm text-[#94a3b8]">Senior Manager Product Design B2B  • Tech Company</p>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex-shrink-0">
                  <Image
                    src="/images/profile/1756901959970.jpg"
                    alt="Antonella Sassu" 
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                </div>
                
              </div>
            </GlassCard>

            <GlassCard delay={0.1}>
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
                <div className="flex-1">
                   <ExpandableText>
                  <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-4">
                    "I had the pleasure of working closely with Giacomo as a Design Lead Technologist at Dow Jones, and
                    I can confidently say he is an exceptional professional. Giacomo played a critical role as a
                    bridge between engineering and UX, which was instrumental in driving the success of our projects
                    and ensuring smooth handoffs between teams.
                    Additionally, I had the opportunity to collaborate with Giacomo on improving the User Acceptance
                    Testing (UAT), Quality Assurance (QA), and Design acceptance processes. During this collaboration,
                    Giacomo demonstrated his meticulous attention to detail, problem-solving skills, and dedication to
                    optimizing workflows."
                  </p></ExpandableText>
                  <div>
                    <p className="font-semibold text-white">Oana Stroe</p>
                    <p className="text-sm text-[#94a3b8]">Design Lead | Product | UX Advocate• Tech Company</p>
                  </div>
                </div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0066ff] flex-shrink-0">
                  <Image
                    src="/images/profile/1710886367232.jpg"
                    alt="Oana Stroe" 
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.2}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-1">
                <ExpandableText>
                  <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-4">
                    "I had the pleasure of working with Giacomo while teaching Intelligent Capital and Talent Management in the Master´s in International Business program at EAE Business School. 
                    He not only helped organize the course and structure content but also brought invaluable expertise in cross-cultural management, ensuring students gained a truly global perspective.<br />
                    Having taught Inclusive Leadership, I can confidently say that Giacomo embodies its principles. He fosters diverse perspectives, builds trust, and creates space where all voices are heard. 
                    He doesn’t just lead—he empowers, ensuring that learning and collaboration thrive.<br />
                    His communication skills stand out—clear, engaging, and adaptable. Whether leading discussions, mentoring students, or working with colleagues, he knows how to connect with people, spark thoughtful conversations, and bring key insights to life.
                      And when it comes to collaboration, Giacomo strengthens every team he’s part of. <br />
                      His leadership reflects the core values of global citizenship—inclusiveness, cultural competence, adaptability, and a genuine commitment to making a positive impact.
                    I would highly recommend him for any role that values strong leadership, strategic management, and the ability to foster inclusive, cross-cultural collaboration. Any organization would be lucky to have him on board!"
                          </p>
                  </ExpandableText>
                  <div>
                    <p className="font-semibold text-white"> Frank Longo </p>
                    <p className="text-sm text-[#94a3b8]"> Higher Education Leader • Universty</p>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex-shrink-0">
                  <Image
                    src="/images/profile/1685965339196.jpg"
                    alt="Frank Longo" 
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                </div>
              </div>
            </GlassCard>

             <GlassCard delay={0.1}>
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
                <div className="flex-1">
                   <ExpandableText>
                  <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-4">
                    " I had the opportunity to be instructed by Giacomo in UX/UI at EAE. Giacomo's extensive experience
                    and insightful perspective in this field provided me a solid foundation to effectively prepare and
                    manage digital products. He is truly a great professional."
                  </p></ExpandableText>
                  <div>
                    <p className="font-semibold text-white">Ismael Ruiz Gutierrez</p>
                    <p className="text-sm text-[#94a3b8]">Marketing Strategy & Business Consultant • Former Student</p>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0066ff] flex-shrink-0">
                  <Image
                    src="/images/profile/1685897244209.jpg"
                    alt="Ismael Ruiz" 
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.2}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-1">
                   <ExpandableText>
                  <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-4">
                    "Giacomo acted as consultant on a personal project that involved the design and implementation of a
                    website. He mentored me and guided me through several difficult choices pointing at the direction
                    to take for each of them. The project would not have been possible without his input. He is very
                    professional and also fun to work with. Thanks, wish you all the best. "
                          </p>
                        </ExpandableText>
                  <div>
                    <p className="font-semibold text-white"> Sergio D'Argenio</p>
                    <p className="text-sm text-[#94a3b8]"> Data Analyst • Tech Company</p>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex-shrink-0">
                  <Image
                    src="/images/profile/1517687171761.jpg"
                    alt="Sergio D'Argenio" 
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                </div>
              </div>
            </GlassCard>




          </div>
        </div>
      </section>

      {/* Dual Path CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
            {/* Product & Design Leadership */}
            <div className="glass p-12 relative group hover:bg-[rgba(0,102,255,0.1)] transition-all duration-300 border-r border-[rgba(255,255,255,0.08)]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0066ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 glass rounded-full flex items-center justify-center mb-6 glow-blue">
                  <Briefcase size={32} className="text-[#0066ff]" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Product & Design Leadership
                </h3>
                <p className="text-[#cbd5e1] mb-8 leading-relaxed">
                  Explore my work leading cross-functional teams, building design systems,
                  and driving measurable business impact.
                </p>
                <a
                  href="#work"
                  className="inline-block px-8 py-4 bg-[#0066ff] rounded-xl text-white font-semibold hover:bg-[#0052cc] transition-all duration-200 glow-blue hover:scale-105"
                >
                  Explore Product Work →
                </a>
              </div>
            </div>

            {/* Teaching & Research */}
            <div className="glass p-12 relative group hover:bg-[rgba(0,212,255,0.1)] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00d4ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 glass rounded-full flex items-center justify-center mb-6" style={{ boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' }}>
                  <GraduationCap size={32} className="text-[#00d4ff]" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Teaching & Research
                </h3>
                <p className="text-[#cbd5e1] mb-8 leading-relaxed">
                  Discover my experience teaching 500+ students and bridging academic
                  research with industry practice.
                </p>
                <Link
                href={createPageUrl("Teaching")}
                  className="inline-block px-8 py-4 glass rounded-xl text-white font-semibold border-2 border-[#00d4ff] hover:bg-[#00d4ff] transition-all duration-200"
                  style={{ boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)' }}
                >
                  View Teaching Portfolio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
