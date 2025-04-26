"use client";

import { useRef } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store built with Next.js and Stripe integration for secure payments.",
    image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Vercel"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates using React, Firebase, and Redux.",
    image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg",
    tags: ["React", "Firebase", "Redux", "CSS Modules"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Portfolio Website Template",
    description: "A customizable portfolio template for creative professionals with advanced animations.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    tags: ["JavaScript", "GSAP", "HTML/CSS", "Responsive"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Weather Application",
    description: "A beautiful weather app with 7-day forecasts, location detection, and animated weather states.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    tags: ["React Native", "OpenWeather API", "Styled Components"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section 
      ref={ref}
      id="projects" 
      className="py-20 md:py-32 bg-muted/30 px-4"
    >
      <div className="container mx-auto">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent work and personal projects."
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={project.title}
              className={cn(
                "project-card group rounded-lg overflow-hidden border border-border/50 bg-card shadow-sm transition-all duration-700 ease-out",
                isInView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10",
                {
                  "transition-delay-100": idx % 2 === 1,
                }
              )}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}