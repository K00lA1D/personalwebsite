import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-muted/50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">John Doe</h3>
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} · All rights reserved
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-foreground/70 hover:text-accent transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-foreground/70 hover:text-accent transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-foreground/70 hover:text-accent transition-colors" />
              </Link>
              <Link href="mailto:contact@example.com" aria-label="Email">
                <Mail className="h-5 w-5 text-foreground/70 hover:text-accent transition-colors" />
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              Designed & Built with ♥ in 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}