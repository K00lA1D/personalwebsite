"use client";

import { useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { 
  Briefcase, GraduationCap, Calendar
} from "lucide-react";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section 
      ref={ref}
      id="experience" 
      className="py-20 md:py-32 bg-muted/30 px-4"
    >
      <div className="container mx-auto">
        <SectionHeading 
          title="Experience & Education" 
          subtitle="My professional journey in hardware design and computer engineering."
        />
        
        <div className={cn(
          "transition-all duration-700 ease-out",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <Tabs defaultValue="work" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="work" className="text-sm flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Work Experience</span>
                <span className="sm:hidden">Work</span>
              </TabsTrigger>
              <TabsTrigger value="education" className="text-sm flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden sm:inline">Education</span>
                <span className="sm:hidden">Education</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="work" className="mt-6 space-y-8">
              <ExperienceItem
                title="Member of Technical Staff"
                company="Etched, Inc."
                period="Dec 2024 - Present"
                description="Lead development of FPGA-based emulation models for AI accelerator ASICs. Architect Python tooling for automation and collaborate with RTL teams on verification strategies."
              />
              <ExperienceItem
                title="Emulation Engineer Intern"
                company="Etched, Inc."
                period="Jun 2024 - Nov 2024"
                description="Integrated C test-benches into ZeBu emulation, developed UVM test suites, and automated waveform processing using Python."
              />
              <ExperienceItem
                title="SoC Logic Design Intern"
                company="Intel Corporation"
                period="Summer 2023 & Fall 2023"
                description="Developed SystemVerilog modules for RISC-V compute subsystems, participated in timing-closure analysis, and helped characterize power-performance trade-offs."
              />
              <ExperienceItem
                title="Digital Design Intern"
                company="Loadstar Sensors"
                period="Summer 2022"
                description="Designed Verilog blocks for MEMS sensor interfaces, optimized data paths, and conducted board-level debugging on prototype PCBs."
              />
            </TabsContent>
            
            <TabsContent value="education" className="mt-6 space-y-8">
              <ExperienceItem
                title="B.S. in Computer Engineering"
                company="University of California, San Diego"
                period="Expected Summer 2025"
                description="Relevant coursework: Digital Logic Design, Digital Integrated Circuits, Operating Systems, Machine Structures."
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

function ExperienceItem({ title, company, period, description }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 pb-8 border-l border-border last:pb-0 experience-card">
      <div className="absolute top-0 left-0 w-6 h-6 -translate-x-3 rounded-full bg-background border-2 border-accent"></div>
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-lg text-accent">{company}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}