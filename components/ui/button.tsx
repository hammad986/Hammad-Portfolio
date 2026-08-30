import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bluecore focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-background shadow-command hover:-translate-y-0.5 hover:bg-bluecore hover:text-white",
        secondary:
          "border border-white/12 bg-white/[0.06] text-white hover:-translate-y-0.5 hover:border-bluecore/60 hover:bg-bluecore/10",
        ghost: "text-muted hover:bg-white/[0.06] hover:text-white",
        download:
          "border border-bluecore/45 bg-bluecore/15 text-white hover:-translate-y-0.5 hover:border-bluecore hover:bg-bluecore/25"
      },
      size: {
        sm: "h-9 px-3.5 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-sm sm:text-base",
        xl: "h-14 px-8 text-base",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
