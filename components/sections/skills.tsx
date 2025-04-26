"use client";

import { useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Cpu, Code, Terminal, Bug, PenTool, Dumbbell } from "lucide-react";

const skills = [
  {
    category: "Hardware & RTL",
    icon: Cpu,
    skills: ["Digital Logic", "SystemVerilog", "UVM", "RISC-V", "SoC Design", "Clock Domain Crossing"],
  },
  {
    category: "Emulation & Prototyping",
    icon: Code,
    skills: ["ZeBu", "FPGA Bring-up", "zRci/UCLI", "zceiTrigger", "DPI-C", "Emulation Flows"],
  },
  {
    category: "Scripting & Automation",
    icon: Terminal,
    skills: ["Python", "Bash", "TCL", "Build Systems", "CI/CD", "Git/GitHub"],
  },
  {
    category: "Verification",
    icon: Bug,
    skills: ["UVM Testbenches", "SystemVerilog Assertions", "Waveform Analysis", "Coverage", "Formal Verification"],
  },
  {
    category: "Tools & Platforms",
    icon: PenTool,
    skills: ["Synopsys ZeBu/VCS", "Verdi", "FuseSoC", "Vivado", "Quartus", "ModelSim"],
  },
  {
    category: "Personal Development",
    icon: Dumbbell,
    skills: ["Bodybuilding", "Fitness Training", "Macro Tracking", "Time Management", "Technical Writing", "Mentoring"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section 
      ref={ref}
      id="skills" 
      className="py-20 md:py-32 px-4"
    >
      <div className="container mx-auto">
        <SectionHeading 
          title="Skills" 
          subtitle="Technical expertise and professional capabilities."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <div 
              key={skillGroup.category}
              className={cn(
                "skill-card bg-card rounded-lg p-6 border border-border/50 shadow-sm transition-all duration-700 ease-out",
                isInView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10",
                {
                  "transition-delay-100": idx % 3 === 1,
                  "transition-delay-200": idx % 3 === 2,
                }
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-accent/10 text-accent">
                  <skillGroup.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {skillGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}