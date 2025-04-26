import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-2 mb-12",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-[68ch] mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-20 bg-accent mt-4",
        align === "center" && "mx-auto",
        align === "right" && "ml-auto"
      )} />
    </div>
  );
}