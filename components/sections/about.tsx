"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/use-in-view";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section 
      ref={ref}
      id="about" 
      className="py-20 md:py-32 px-4"
    >
      <div className="container mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="Computer Engineering student and hardware enthusiast."
        />
        
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-lg border-4 border-primary/20">
            <div className="absolute inset-0 bg-accent/10 z-10"></div>
            <Image
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Pursuing Excellence in Digital Design</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a 21-year-old Computer Engineering student at UC San Diego, just 1½ quarters away from graduation. Currently, I'm working as a Member of Technical Staff at Etched, where I focus on building emulation and FPGA-based prototypes for cutting-edge AI accelerators.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in hardware design has taken me from writing Verilog for IoT sensors at Loadstar Sensors to designing SoC logic at Intel, and now to leading emulation development at Etched. I'm passionate about digital design, emulation platforms, and exploring the complexities of physical design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Outside of tech, I'm dedicated to bodybuilding and fitness, training 5 times per week and maintaining a disciplined approach to both physical and professional growth. This balance of technical expertise and personal development drives my pursuit of excellence in everything I do.
            </p>
            
            <div className="border-l-4 border-accent pl-4 italic text-foreground/90">
              "The best way to predict the future is to create it." — Alan Kay
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}