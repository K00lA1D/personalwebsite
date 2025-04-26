"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import BackgroundAnimation from "@/components/background-animation";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-32"
    >
      <BackgroundAnimation />
      
      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <h1 
          className={cn(
            "text-6xl md:text-8xl font-bold tracking-tighter transition-all duration-700 ease-out",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          Sid Nair
        </h1>
        <p 
          className={cn(
            "text-xl md:text-2xl text-foreground/80 transition-all duration-700 delay-300 ease-out",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-accent font-medium">Computer Engineer</span> · 
          <span className="mx-2">FPGA Designer</span> · 
          <span>Digital Design</span>
        </p>
        
        <div 
          className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center pt-4 transition-all duration-700 delay-700 ease-out",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#experience">View Experience</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-foreground/60" />
        </a>
      </div>
    </section>
  );
}